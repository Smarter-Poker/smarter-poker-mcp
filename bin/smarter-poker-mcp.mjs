#!/usr/bin/env node
/**
 * Smarter.Poker Model Context Protocol (MCP) Server — Stdio & Remote Bridge (v1.0.6)
 *
 * Connects local MCP clients (Claude Desktop, Cursor, Windsurf, VS Code, Zed)
 * and Docker introspection runners (Glama, Smithery) over standard input/output
 * (JSON-RPC 2.0) to the Smarter.Poker MCP engine (https://smarter.poker/api/mcp)
 * with embedded 45-tool schemas (`bin/tools-schema.json`), 10 prompt workflows,
 * 16 resource templates, 26 streamer commands, and deterministic local fallback
 * solvers for core poker mathematics.
 */

import {
  SERVER_INFO,
  TOOLS,
  PROMPTS,
  RESOURCE_TEMPLATES,
  TOOL_NAME_ALIASES,
  STREAMER_COMMANDS,
  computeLocalFallback,
  executeTool,
  getPrompt,
  forwardRpc,
  startStdioServer,
} from '../src/index.mjs';

export {
  SERVER_INFO,
  TOOLS,
  PROMPTS,
  RESOURCE_TEMPLATES,
  TOOL_NAME_ALIASES,
  STREAMER_COMMANDS,
  computeLocalFallback,
  executeTool,
  getPrompt,
  forwardRpc,
  startStdioServer,
};

startStdioServer();
