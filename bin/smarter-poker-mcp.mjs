#!/usr/bin/env node
/**
 * Smarter.Poker Model Context Protocol (MCP) Server — Stdio & Remote Bridge
 *
 * Connects local MCP clients (Claude Desktop, Cursor, Windsurf, VS Code, Zed)
 * over standard input/output (JSON-RPC 2.0) to the Smarter.Poker MCP engine
 * (https://smarter.poker/api/mcp) with built-in deterministic local fallback
 * solvers for core poker mathematics (Pot Odds, MDF, Malmuth-Harville ICM,
 * and Pot-Limit Omaha max-bet sizing).
 */

import readline from 'node:readline';

const REMOTE_ENDPOINT = process.env.SMARTER_POKER_MCP_URL || 'https://smarter.poker/api/mcp';
const SERVER_INFO = {
  name: 'smarter-poker-mcp-server',
  version: '1.0.0',
};

const FALLBACK_TOOLS = [
  {
    name: 'calculate_pot_odds_and_mdf',
    description:
      'Calculate exact poker pot odds ratio, required break-even calling equity %, Minimum Defense Frequency (MDF %), and rule-of-4/2 draw equity.',
    inputSchema: {
      type: 'object',
      properties: {
        pot: { type: 'number', description: 'Current pot size before the bet' },
        bet: { type: 'number', description: 'Bet size facing the player' },
        outs: { type: 'number', description: 'Optional number of clean outs (0-20)' },
      },
      required: ['pot', 'bet'],
    },
  },
  {
    name: 'calculate_plo_pot_limit_bet',
    description:
      'Calculate the exact maximum legal pot-limit raise in Pot-Limit Omaha (PLO) using the 3 * call + pot + dead_money formula.',
    inputSchema: {
      type: 'object',
      properties: {
        pot: { type: 'number', description: 'Current pot before the bet to call' },
        call: { type: 'number', description: 'Current bet facing the active player' },
        dead: { type: 'number', description: 'Additional dead money or posted blinds in the pot' },
      },
      required: ['pot', 'call'],
    },
  },
  {
    name: 'calculate_icm_equity',
    description:
      'Compute exact Malmuth-Harville Independent Chip Model (ICM) tournament dollar equity ($EV) for up to 9 stack sizes and a payout structure.',
    inputSchema: {
      type: 'object',
      properties: {
        stacks: {
          type: 'array',
          items: { type: 'number' },
          description: 'Array of player chip stacks (e.g. [50000, 30000, 20000])',
        },
        payouts: {
          type: 'array',
          items: { type: 'number' },
          description: 'Array of prize payouts (e.g. [5000, 3000, 2000])',
        },
      },
      required: ['stacks', 'payouts'],
    },
  },
];

function computeLocalFallback(name, args = {}) {
  if (name === 'calculate_pot_odds_and_mdf') {
    const pot = Number(args.pot) || 100;
    const bet = Number(args.bet) || 50;
    const outs = Number(args.outs) || 0;
    const totalPotAfterCall = pot + bet * 2;
    const reqEquity = (bet / totalPotAfterCall) * 100;
    const mdf = (pot / (pot + bet)) * 100;
    const ratio = (pot + bet) / bet;
    return {
      pot,
      bet,
      potOddsRatio: `${ratio.toFixed(2)}:1`,
      requiredEquityPct: Number(reqEquity.toFixed(2)),
      mdfPct: Number(mdf.toFixed(2)),
      turnDrawEquityPct: outs > 0 ? Number(((outs / 47) * 100).toFixed(2)) : null,
      canonicalUrl: `https://smarter.poker/tools/pot-odds-calculator?pot=${pot}&bet=${bet}&outs=${outs}`,
    };
  }
  if (name === 'calculate_plo_pot_limit_bet') {
    const pot = Number(args.pot) || 100;
    const call = Number(args.call) || 50;
    const dead = Number(args.dead) || 0;
    const maxBet = 3 * call + pot + dead;
    const potAfterRaise = pot + dead + call + maxBet;
    return {
      pot,
      call,
      dead,
      maxPotLimitRaiseTo: maxBet,
      totalPotAfterMaxRaise: potAfterRaise,
      nextPlayerPotSizedRepotTo: 3 * maxBet + pot + dead + call,
      canonicalUrl: `https://smarter.poker/tools/plo-bet-calculator?pot=${pot}&call=${call}&dead=${dead}`,
    };
  }
  if (name === 'calculate_icm_equity') {
    const stacks = (Array.isArray(args.stacks) ? args.stacks : [50000, 30000, 20000]).map(Number);
    const payouts = (Array.isArray(args.payouts) ? args.payouts : [5000, 3000, 2000]).map(Number);
    const n = stacks.length;
    const ev = new Array(n).fill(0);
    function recurse(remainingIdx, remainingChipTotal, prizeIdx, prob) {
      if (prizeIdx >= payouts.length || remainingIdx.length === 0 || prob < 1e-12) return;
      for (let i = 0; i < remainingIdx.length; i++) {
        const player = remainingIdx[i];
        const stack = stacks[player];
        if (stack <= 0) continue;
        const pWin = stack / remainingChipTotal;
        ev[player] += prob * pWin * payouts[prizeIdx];
        if (prizeIdx + 1 < payouts.length) {
          const nextIdx = remainingIdx.filter((_, idx) => idx !== i);
          recurse(nextIdx, remainingChipTotal - stack, prizeIdx + 1, prob * pWin);
        }
      }
    }
    const totalChips = stacks.reduce((a, b) => a + b, 0);
    recurse(
      stacks.map((_, idx) => idx),
      totalChips,
      0,
      1
    );
    return {
      stacks,
      payouts,
      icmEquities: ev.map((val, i) => ({
        player: i + 1,
        stack: stacks[i],
        icmDollarEv: Number(val.toFixed(2)),
      })),
      canonicalUrl: `https://smarter.poker/tools/icm-calculator?stacks=${stacks.join(',')}&payouts=${payouts.join(',')}`,
    };
  }
  return {
    tool: name,
    canonicalUrl: 'https://smarter.poker/tools',
  };
}

async function forwardRpc(message) {
  const { id, method, params } = message;

  if (method === 'initialize') {
    return {
      jsonrpc: '2.0',
      id,
      result: {
        protocolVersion: params?.protocolVersion || '2024-11-05',
        capabilities: {
          tools: { listChanged: false },
        },
        serverInfo: SERVER_INFO,
      },
    };
  }

  if (method === 'notifications/initialized' || !('id' in message)) {
    return null;
  }

  if (method === 'ping') {
    return { jsonrpc: '2.0', id, result: {} };
  }

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(REMOTE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(message),
      signal: controller.signal,
    });
    clearTimeout(timer);
    if (res.ok) {
      return await res.json();
    }
  } catch {
    // Fall back to local deterministic solvers if offline
  }

  if (method === 'tools/list') {
    return {
      jsonrpc: '2.0',
      id,
      result: { tools: FALLBACK_TOOLS },
    };
  }

  if (method === 'tools/call') {
    const result = computeLocalFallback(params?.name, params?.arguments);
    return {
      jsonrpc: '2.0',
      id,
      result: {
        content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
      },
    };
  }

  return {
    jsonrpc: '2.0',
    id,
    error: { code: -32601, message: `Method not found: ${method}` },
  };
}

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

rl.on('line', async (line) => {
  const trimmed = line.trim();
  if (!trimmed || !trimmed.startsWith('{')) return;
  try {
    const msg = JSON.parse(trimmed);
    const reply = await forwardRpc(msg);
    if (reply) {
      process.stdout.write(`${JSON.stringify(reply)}\n`);
    }
  } catch (err) {
    process.stdout.write(
      `${JSON.stringify({
        jsonrpc: '2.0',
        id: null,
        error: { code: -32700, message: `Parse error: ${err.message}` },
      })}\n`
    );
  }
});
