import { spawn } from 'node:child_process';
import assert from 'node:assert/strict';
import {
  TOOLS,
  PROMPTS,
  RESOURCE_TEMPLATES,
  TOOL_NAME_ALIASES,
  STREAMER_COMMANDS,
  executeTool,
  forwardRpc,
} from './src/index.mjs';

assert.equal(TOOLS.length, 55, `Expected 55 TOOLS, got ${TOOLS.length}`);
assert.equal(PROMPTS.length, 12, `Expected 12 PROMPTS, got ${PROMPTS.length}`);
assert.equal(RESOURCE_TEMPLATES.length, 18, `Expected 18 RESOURCE_TEMPLATES, got ${RESOURCE_TEMPLATES.length}`);
assert.equal(STREAMER_COMMANDS.length, 34, `Expected 34 STREAMER_COMMANDS, got ${STREAMER_COMMANDS.length}`);

const newTools = [
  'analyze_flop_board_texture',
  'calculate_tournament_m_ratio',
  'calculate_cash_session_plan',
  'calculate_straddle_bomb_pot_ev',
  'format_poker_hand_history',
  'calculate_satellite_bubble_factor',
  'calculate_bad_beat_jackpot_ev',
  'resolve_holdem_showdown_winner',
  'get_poker_position_strategy',
  'get_us_state_poker_guide',
  'calculate_plo_wrap_outs',
  'calculate_late_reg_icm_ev',
  'calculate_winrate_confidence_interval',
  'calculate_poker_trip_budget',
  'calculate_geometric_bet_sizing',
  'score_live_table_selection',
  'calculate_mtt_session_abi_plan',
  'get_player_archetype_exploit',
  'get_flop_board_texture_guide',
  'get_international_poker_guide',
];

for (const toolName of newTools) {
  const res = await executeTool(toolName, {});
  assert.equal(res.tool, toolName);
}

for (const [alias, canonical] of Object.entries(TOOL_NAME_ALIASES)) {
  const res = await executeTool(alias, {});
  assert.equal(res.tool, canonical);
}

const proc = spawn('node', ['./bin/smarter-poker-mcp.mjs'], {
  cwd: new URL('.', import.meta.url).pathname,
  stdio: ['pipe', 'pipe', 'inherit'],
});

const responses = [];
proc.stdout.on('data', (chunk) => {
  for (const line of chunk.toString().split('\n')) {
    if (line.trim()) {
      responses.push(JSON.parse(line));
    }
  }
});

function send(msg) {
  proc.stdin.write(`${JSON.stringify(msg)}\n`);
}

send({ jsonrpc: '2.0', id: 1, method: 'initialize', params: { protocolVersion: '2024-11-05' } });
send({ jsonrpc: '2.0', id: 2, method: 'tools/list', params: {} });
send({ jsonrpc: '2.0', id: 3, method: 'prompts/list', params: {} });
send({
  jsonrpc: '2.0',
  id: 4,
  method: 'tools/call',
  params: { name: 'calculate_pot_odds_and_mdf', arguments: { pot: 100, bet: 50, outs: 9 } },
});

setTimeout(() => {
  proc.kill();
  assert.equal(responses.length, 4, `Expected 4 responses, got ${responses.length}`);
  assert.equal(responses[0].result.serverInfo.name, 'smarter-poker-mcp-server');
  assert.equal(responses[0].result.serverInfo.version, '1.0.7');
  assert.equal(responses[1].result.tools.length, 55);
  assert.equal(responses[2].result.prompts.length, 12);
  assert.ok(JSON.stringify(responses[3].result).includes('pot-odds-calculator'));
  console.log('STDIO MCP TEST PASSED:', responses.length, 'tools:', responses[1].result.tools.length, 'prompts:', responses[2].result.prompts.length);
}, 2500);
