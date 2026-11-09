import { spawn } from 'node:child_process';
import assert from 'node:assert/strict';

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
send({
  jsonrpc: '2.0',
  id: 3,
  method: 'tools/call',
  params: { name: 'calculate_pot_odds_and_mdf', arguments: { pot: 100, bet: 50, outs: 9 } },
});

setTimeout(() => {
  proc.kill();
  assert.equal(responses.length, 3, `Expected 3 responses, got ${responses.length}`);
  assert.equal(responses[0].result.serverInfo.name, 'smarter-poker-mcp-server');
  assert.ok(responses[1].result.tools.length >= 3);
  assert.ok(JSON.stringify(responses[2].result).includes('pot-odds-calculator'));
  console.log('STDIO MCP TEST PASSED:', responses.length, 'tools:', responses[1].result.tools.length);
}, 2500);
