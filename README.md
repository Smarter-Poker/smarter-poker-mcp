# Smarter.Poker Model Context Protocol (MCP) Server

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.24095057.svg)](https://doi.org/10.5281/zenodo.24095057)
[![Glama MCP Server](https://glama.ai/mcp/servers/Smarter-Poker/smarter-poker-mcp/badges/score.svg)](https://glama.ai/mcp/servers/Smarter-Poker/smarter-poker-mcp)

Open-source Model Context Protocol (MCP) server for Smarter.Poker providing 30 read-only tools for poker equity calculation, Game Theory Optimal (GTO) preflop ranges, Malmuth-Harville Independent Chip Model (ICM) payouts, Pot-Limit Omaha (PLO) bet-sizing, live North American cardroom directory queries, tournament series schedules, and Tournament Directors Association (TDA) floor rulings over both local `stdio` and remote Streamable HTTP (`https://smarter.poker/api/mcp`).

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

## 30-Tool Reference & Web Documentation

### 1. Poker Mathematics, Equity & Tournament Solvers (`/tools/*`)
- `calculate_poker_odds` — [Hold'em & Omaha Poker Equity Calculator](https://smarter.poker/tools/poker-odds-calculator)
- `lookup_hand_matchup` — [Preflop Hold'em All-In Matchup Reference](https://smarter.poker/learn/matchups)
- `calculate_draw_outs` — [Hypergeometric Draw Outs & Rule of 4 and 2 Calculator](https://smarter.poker/tools/outs-calculator)
- `calculate_pot_odds_and_mdf` — [Pot Odds & Minimum Defense Frequency (MDF) Calculator](https://smarter.poker/tools/pot-odds-calculator)
- `calculate_plo_max_bet_and_rake` — [Pot-Limit Omaha (PLO) 3x+Pot Bet & Rake Calculator](https://smarter.poker/tools/plo-bet-calculator)
- `calculate_spr_sizing` — [Stack-to-Pot Ratio (SPR) & Geometric Sizing Calculator](https://smarter.poker/tools/spr-calculator)
- `calculate_icm_payouts` — [Malmuth-Harville Tournament ICM Calculator](https://smarter.poker/tools/icm-calculator)
- `calculate_tournament_chop` — [Final-Table ICM Chop vs. Chip Chop Calculator](https://smarter.poker/tools/chop-calculator)
- `calculate_bounty_chip_equity` — [PKO & Mystery Bounty Chip-Equivalence Calculator](https://smarter.poker/tools/bounty-calculator)
- `calculate_side_pots` — [Multi-Way All-In Side-Pot Calculator](https://smarter.poker/tools/side-pot-calculator)
- `generate_blind_structure` — [Tournament Blind Structure & Clock Generator](https://smarter.poker/tools/blind-structure-calculator)
- `calculate_bankroll_risk_of_ruin` — [Bankroll & Kelly Criterion Risk-of-Ruin Calculator](https://smarter.poker/tools/bankroll-calculator)
- `simulate_poker_variance` — [Winrate Confidence Interval & Variance Simulator](https://smarter.poker/tools/variance-calculator)
- `get_preflop_chart` — [6-Max & 9-Max GTO Preflop Range Charts](https://smarter.poker/tools/preflop-ranges)
- `lookup_starting_hand` — [169 Hold'em Starting-Hand Strategy Lookup](https://smarter.poker/learn/hands)

### 2. Live Cardrooms, Tournament Series, Rules & Reference Data
- `search_poker_venues` / `get_venue_details` — [North American Live Poker Room Directory](https://smarter.poker/hub/poker-near-me/venues)
- `get_regional_market_guide` — [Regional Poker Market Guides](https://smarter.poker/poker-rooms/guides)
- `search_tournament_series` / `get_series_details` — [Live Tournament Series & Tour Schedules](https://smarter.poker/hub/series)
- `get_freeroll_schedule` — [Freeroll & Bar League Directory](https://smarter.poker/freerolls)
- `lookup_poker_rule` — [Official TDA & Robert's Rules of Poker Reference](https://smarter.poker/rules)
- `lookup_game_variant` — [Poker Game Variant Rules & Formats](https://smarter.poker/games)
- `get_poker_term_definition` — [Poker Strategy & Math Glossary](https://smarter.poker/glossary)
- `search_strategy_lessons` — [Poker Strategy Guides](https://smarter.poker/learn)
- `search_training_simulators` — [GTO Training Scenarios](https://smarter.poker/hub/training)
- `get_research_report` — [Open Quantitative Poker Research Studies](https://smarter.poker/research)
- `get_platform_feature_specs` — [Platform Architecture Specifications](https://smarter.poker/features)
- `get_competitor_comparison` — [Poker Software & Tool Feature Matrix](https://smarter.poker/compare)
- `get_citation_and_backlink_kit` — [Embed Widgets & Streamer Chat Commands](https://smarter.poker/tools/embeds)

## Archival Identifiers & License
- **Software DOI**: [10.5281/zenodo.24095057](https://doi.org/10.5281/zenodo.24095057)
- **Companion Datasets DOI**: [10.5281/zenodo.24095049](https://doi.org/10.5281/zenodo.24095049)
- **Software Heritage SWHID**: `swh:1:snp:b559bea6460c28fc68ae61ea315eb2650fc387e7`
- **License**: MIT License
