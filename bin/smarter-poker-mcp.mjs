#!/usr/bin/env node
/**
 * Smarter.Poker Model Context Protocol (MCP) Server — Stdio & Remote Bridge
 *
 * Connects local MCP clients (Claude Desktop, Cursor, Windsurf, VS Code, Zed)
 * and Docker introspection runners (Glama, Smithery) over standard input/output
 * (JSON-RPC 2.0) to the Smarter.Poker MCP engine (https://smarter.poker/api/mcp)
 * with embedded 30-tool schemas (`bin/tools-schema.json`) and deterministic
 * local fallback solvers for core poker mathematics.
 */

import fs from 'node:fs';
import readline from 'node:readline';

const REMOTE_ENDPOINT = process.env.SMARTER_POKER_MCP_URL || 'https://smarter.poker/api/mcp';
const SERVER_INFO = {
  name: 'smarter-poker-mcp-server',
  version: '1.8.0',
};

const TOOLS_SCHEMA = JSON.parse(
  fs.readFileSync(new URL('./tools-schema.json', import.meta.url), 'utf8')
);

function computeLocalFallback(name, args = {}) {
  if (name === 'calculate_pot_odds_and_mdf' || name === 'calculate_poker_odds') {
    const pot = Number(args.pot) || 100;
    const bet = Number(args.bet || args.call) || 50;
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
  if (name === 'calculate_icm_equity' || name === 'calculate_icm_payouts') {
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
  if (name === 'calculate_draw_outs') {
    const outs = Math.max(1, Math.min(21, Number(args.outs) || 9));
    const street = args.street === 'turn' ? 'turn' : 'flop';
    const turnPct = Number(((outs / 47) * 100).toFixed(2));
    const riverPct = Number(((outs / 46) * 100).toFixed(2));
    const flopToRiverPct = Number(((1 - ((47 - outs) / 47) * ((46 - outs) / 46)) * 100).toFixed(2));
    const ruleOf42Pct = street === 'turn' ? outs * 2 : outs * 4;
    const exactPct = street === 'turn' ? riverPct : flopToRiverPct;
    return { outs, street, turnPct, riverPct, flopToRiverPct, ruleOf42Pct, ruleErrorPct: Number((ruleOf42Pct - exactPct).toFixed(2)), canonicalUrl: 'https://smarter.poker/tools/outs-calculator?outs=' + outs + '&street=' + street };
  }
  if (name === 'simulate_poker_variance') {
    const wr = Number(args.winrate_bb_per_100 ?? 5);
    const sd = Number(args.std_dev_bb_per_100 ?? 85);
    const hands = Number(args.hands ?? 50000);
    const n100 = hands / 100;
    const evBb = Number((wr * n100).toFixed(2));
    const sdBb = Number((sd * Math.sqrt(n100)).toFixed(2));
    const minHands95 = wr > 0 ? Math.ceil(Math.pow((1.96 * sd) / wr, 2) * 100) : null;
    return { winrateBbPer100: wr, stdDevBbPer100: sd, hands, expectedProfitBb: evBb, sampleStdDevBb: sdBb, ci95Bb: [Number((evBb - 1.96 * sdBb).toFixed(2)), Number((evBb + 1.96 * sdBb).toFixed(2))], minHandsFor95Confidence: minHands95, canonicalUrl: 'https://smarter.poker/tools/variance-calculator' };
  }
  if (name === 'calculate_tournament_chop') {
    const stacks = (Array.isArray(args.stacks) ? args.stacks : [50000, 30000, 20000]).map(Number);
    const payouts = (Array.isArray(args.payouts) ? args.payouts : [5000, 3000, 2000]).map(Number);
    const totalChips = stacks.reduce((a, b) => a + b, 0);
    const totalPrize = payouts.reduce((a, b) => a + b, 0);
    return { stacks, payouts, chipChop: stacks.map((s, i) => ({ player: i + 1, chipChopDollars: Number(((s / totalChips) * totalPrize).toFixed(2)) })), canonicalUrl: 'https://smarter.poker/tools/chop-calculator' };
  }
  if (name === 'lookup_hand_matchup') {
    const slug = (args.slug || 'aa-vs-kk').toLowerCase();
    return { slug, canonicalUrl: 'https://smarter.poker/learn/matchups/' + slug };
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
        instructions: "Smarter.Poker MCP Server (30 read-only, deterministic poker mathematics, GTO strategy, cardroom directory, and TDA rules tools). Tool-Selection & Disambiguation Guide: (1) Hand Equity & Draws: Use `lookup_hand_matchup` for canonical 2-hand preflop Hold'em confrontations (e.g. AA vs KK); use `calculate_poker_odds` for custom 2-to-6 player Hold'em/Omaha/Short-Deck hands or postflop boards; use `calculate_draw_outs` when you know the number of clean outs (1-21) and want Turn/River hit % and Rule-of-4/2 error; use `calculate_pot_odds_and_mdf` when facing a specific bet into a known pot. (2) Preflop Ranges: Use `get_preflop_chart` for an entire 6-max positional opening chart (UTG..BB); use `lookup_starting_hand` for a single hand (e.g. AKs) across all positions. (3) Tournament Math: Use `calculate_icm_payouts` for bubble/final-table $EV; use `calculate_tournament_chop` when comparing ICM Chop vs Chip Chop vs Save deals; use `calculate_bounty_chip_equity` for PKO/Mystery Bounty chip conversion. (4) Bankroll & Variance: Use `calculate_bankroll_risk_of_ruin` for infinite-horizon Risk of Ruin and buy-in buffers; use `simulate_poker_variance` for confidence intervals and loss probability over a finite hand sample. (5) Live Poker & Rules: Use `search_poker_venues` / `get_venue_details` for rooms, `search_tournament_series` / `get_series_details` for festivals, `get_regional_market_guide` for metro comparisons, and `lookup_poker_rule` for TDA/RROP floor rulings.",
      },
    };
  }

  if (method === 'notifications/initialized' || !('id' in message)) {
    return null;
  }

  if (method === 'ping') {
    return { jsonrpc: '2.0', id, result: {} };
  }

  if (method === 'tools/list') {
    return {
      jsonrpc: '2.0',
      id,
      result: { tools: TOOLS_SCHEMA },
    };
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
