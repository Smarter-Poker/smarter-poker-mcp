# Smarter.Poker Model Context Protocol (MCP) Server (`v1.0.5`)

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.24095057.svg)](https://doi.org/10.5281/zenodo.24095057)
[![Glama MCP Server](https://glama.ai/mcp/servers/Smarter-Poker/smarter-poker-mcp/badges/score.svg)](https://glama.ai/mcp/servers/Smarter-Poker/smarter-poker-mcp)

Open-source Model Context Protocol (MCP) server for Smarter.Poker providing **35 zero-auth read-only tools**, **8 prompt workflows**, **15 resource templates**, and **18 streamer chat commands** for poker equity calculation, Game Theory Optimal (GTO) preflop ranges, Malmuth-Harville Independent Chip Model (ICM) payouts, Pot-Limit Omaha (PLO) bet-sizing, US W-2G poker tax estimation, tournament staking markup, preflop isolation sizing, home-game chip sets, live North American cardroom directory queries, tournament series schedules, and Tournament Directors Association (TDA) floor rulings over both local `stdio` (`npx` / Docker) and remote Streamable HTTP (`https://smarter.poker/api/mcp`).

## Verified Registry Listings

- **Glama MCP Directory**: [https://glama.ai/mcp/servers/Smarter-Poker/smarter-poker-mcp](https://glama.ai/mcp/servers/Smarter-Poker/smarter-poker-mcp)
- **TensorBlock Awesome MCP Servers**: [https://www.tensorblock.co/mcp/servers/smarter-poker-5bce8c2f](https://www.tensorblock.co/mcp/servers/smarter-poker-5bce8c2f)
- **Remote Streamable HTTP Endpoint**: [https://smarter.poker/api/mcp](https://smarter.poker/api/mcp)
- **Machine-Readable MCP Discovery Manifest**: [https://smarter.poker/.well-known/mcp.json](https://smarter.poker/.well-known/mcp.json)

## Quick Start

### 1. Remote HTTP Connection (Zero Install)
```json
{
  "mcpServers": {
    "smarter-poker": {
      "url": "https://smarter.poker/api/mcp"
    }
  }
}
```

### 2. Local `stdio` Runner (`npx` / Node.js >= 18)
```json
{
  "mcpServers": {
    "smarter-poker": {
      "command": "npx",
      "args": ["-y", "github:Smarter-Poker/smarter-poker-mcp"]
    }
  }
}
```

## 35-Tool Reference & Web Documentation

### 1. Poker Mathematics, Equity & Tournament Solvers (`18 Solvers` — `/tools/*`)
1. `calculate_poker_odds` — [Hold'em & Omaha Poker Equity Calculator](https://smarter.poker/tools/poker-odds-calculator)
2. `lookup_hand_matchup` — [Preflop Hold'em All-In Matchup Reference (25 Matchups)](https://smarter.poker/learn/matchups)
3. `calculate_draw_outs` — [Hypergeometric Draw Outs & Rule of 4 and 2 Calculator](https://smarter.poker/tools/outs-calculator)
4. `calculate_pot_odds_and_mdf` — [Pot Odds & Minimum Defense Frequency (MDF) Calculator](https://smarter.poker/tools/pot-odds-calculator)
5. `calculate_plo_max_bet_and_rake` — [Pot-Limit Omaha (PLO) 3x+Pot Bet & Rake Calculator](https://smarter.poker/tools/plo-bet-calculator)
6. `calculate_spr_sizing` — [Stack-to-Pot Ratio (SPR) & Geometric Sizing Calculator](https://smarter.poker/tools/spr-calculator)
7. `calculate_icm_payouts` — [Malmuth-Harville Tournament ICM Calculator](https://smarter.poker/tools/icm-calculator)
8. `calculate_tournament_chop` — [Final-Table ICM Chop vs. Chip Chop Calculator](https://smarter.poker/tools/chop-calculator)
9. `calculate_bounty_chip_equity` — [PKO & Mystery Bounty Chip-Equivalence Calculator](https://smarter.poker/tools/bounty-calculator)
10. `calculate_side_pots` — [Multi-Way All-In Side-Pot Calculator](https://smarter.poker/tools/side-pot-calculator)
11. `generate_blind_structure` — [Tournament Blind Structure & Clock Generator](https://smarter.poker/tools/blind-structure-calculator)
12. `calculate_bankroll_risk_of_ruin` — [Bankroll & Kelly Criterion Risk-of-Ruin Calculator](https://smarter.poker/tools/bankroll-calculator)
13. `simulate_poker_variance` — [Winrate Confidence Interval & Variance Simulator](https://smarter.poker/tools/variance-calculator)
14. `get_preflop_chart` — [6-Max & 9-Max GTO Preflop Range Charts](https://smarter.poker/tools/preflop-ranges)
15. `lookup_starting_hand` — [169 Hold'em Starting-Hand Strategy Lookup](https://smarter.poker/learn/hands)
16. `calculate_poker_taxes_w2g` — [US IRS Form W-2G Withholding & Poker Tax Calculator](https://smarter.poker/tools/poker-tax-calculator)
17. `calculate_staking_markup_split` — [Tournament Staking, Backing Markup & Make-Up Calculator](https://smarter.poker/tools/staking-calculator)
18. `calculate_preflop_isolation_raise` — [3x + 1x/Limper + OOP Preflop Isolation Sizing Calculator](https://smarter.poker/tools/iso-calculator)
19. `calculate_home_game_chip_set` — [Cash & Tournament Chip Denomination & Color Breakdown Calculator](https://smarter.poker/tools/home-game-calculator)

### 2. Live Cardrooms, Tournament Series, Rules & Reference Data (`16 Tools`)
20. `search_poker_venues` — [North American Live Poker Room Directory Search](https://smarter.poker/hub/poker-near-me/venues)
21. `get_venue_details` — [Live Cardroom Rake, Tables & Cash Game Details](https://smarter.poker/hub/poker-near-me/venues)
22. `get_regional_market_guide` — [Regional Poker Market Guides (25 Markets)](https://smarter.poker/poker-rooms/guides)
23. `search_tournament_series` — [Live Tournament Series & Tour Schedule Search](https://smarter.poker/hub/series)
24. `get_series_details` — [Tournament Series Event & Guarantee Details](https://smarter.poker/hub/series)
25. `get_poker_series_strategy_guide` — [Major Poker Tour & Series Strategy Guides (12 Tours)](https://smarter.poker/series/guides)
26. `get_freeroll_schedule` — [Freeroll & Bar League Directory](https://smarter.poker/freerolls)
27. `lookup_poker_rule` — [Floor Rule Reference (Citing Published TDA & RROP Standards) (30 Rules)](https://smarter.poker/rules)
28. `lookup_game_variant` — [Poker Game Variant Rules & Formats (15 Variants)](https://smarter.poker/games)
29. `get_poker_term_definition` — [Poker Strategy & Math Glossary (80 Terms)](https://smarter.poker/glossary)
30. `search_strategy_lessons` — [Poker Strategy Guides (35 Lessons)](https://smarter.poker/learn)
31. `search_training_simulators` — [GTO Training Scenarios](https://smarter.poker/hub/training)
32. `get_research_report` — [Open Quantitative Poker Research Studies (15 Studies)](https://smarter.poker/research)
33. `get_platform_feature_specs` — [Platform Architecture Specifications](https://smarter.poker/features)
34. `get_competitor_comparison` — [Poker Software & Tool Feature Matrix](https://smarter.poker/compare)
35. `get_citation_and_backlink_kit` — [Embed Widgets & 18 Streamer Chat Commands (`!odds`, `!icm`, `!potodds`, `!pushfold`, `!outs`, `!chop`, `!bounty`, `!spr`, `!plo`, `!variance`, `!bankroll`, `!sidepot`, `!blinds`, `!hand`, `!rule`, `!room`, `!tax`, `!markup`)](https://smarter.poker/tools/embeds)

## Archival Identifiers & License
- **Software DOI**: [10.5281/zenodo.24095057](https://doi.org/10.5281/zenodo.24095057)
- **35-Tool MCP + OpenAPI 3.1 Bundle DOI**: [10.5281/zenodo.24115453](https://doi.org/10.5281/zenodo.24115453)
- **Companion Datasets DOI**: [10.5281/zenodo.24095049](https://doi.org/10.5281/zenodo.24095049)
- **Software Heritage SWHID**: `swh:1:snp:b559bea6460c28fc68ae61ea315eb2650fc387e7`
- **License**: MIT License
