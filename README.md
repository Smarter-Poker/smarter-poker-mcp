# Smarter.Poker Model Context Protocol (MCP) Server

Official open-source Model Context Protocol (MCP) server for **[Smarter.Poker](https://smarter.poker)** providing **26 deterministic poker math, GTO preflop range, Malmuth-Harville ICM, Pot-Limit Omaha (PLO) bet-sizing, live poker room directory, and Robert's Rules / TDA floor ruling tools** over both local `stdio` and remote Streamable HTTP (`https://smarter.poker/api/mcp`).

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

## Tools Included (26 Tools)

- **Poker Equity & Pot Odds Solvers**:
  - `calculate_poker_equity` — Exact combinatoric & Monte Carlo preflop/postflop hand equity ([Poker Odds Calculator](https://smarter.poker/tools/poker-odds-calculator))
  - `calculate_pot_odds_and_mdf` — Pot odds ratio, required break-even calling equity %, Minimum Defense Frequency (MDF %), and rule-of-4/2 draw equity ([Pot Odds Calculator](https://smarter.poker/tools/pot-odds-calculator))
  - `calculate_plo_pot_limit_bet` — Pot-Limit Omaha (PLO) maximum legal pot-sized raise (`3 * call + pot + dead`) ([PLO Bet Calculator](https://smarter.poker/tools/plo-bet-calculator))
  - `calculate_preflop_3bet_defenses` — Optimal 3-bet sizing, MDF %, 4-bet bluff ratios, and postflop SPR ([3-Bet Defense Calculator](https://smarter.poker/tools/3bet-calculator))
  - `calculate_spr_sizing` — Stack-to-Pot Ratio (SPR) commitment thresholds and geometric multi-street bet sizing ([SPR Calculator](https://smarter.poker/tools/spr-calculator))
- **Tournament ICM, Push/Fold, Payout & Bounty Solvers**:
  - `calculate_icm_equity` — Malmuth-Harville Independent Chip Model ($EV) & bubble factors ([ICM Calculator](https://smarter.poker/tools/icm-calculator))
  - `calculate_push_fold_nash` — Short-stack 3BB–20BB Nash equilibrium push/call ranges ([Push/Fold Charts](https://smarter.poker/tools/push-fold-calculator))
  - `calculate_pko_bounty_conversion` — Progressive Knockout (PKO) & Mystery Bounty chip-EV conversion ([Bounty Calculator](https://smarter.poker/tools/bounty-calculator))
  - `generate_tournament_payout_schedule` — Exponential prize-pool payout table generator ([Payout Structure Calculator](https://smarter.poker/tools/payout-calculator))
  - `generate_blind_structure` — Custom tournament clock & blind level progression ([Blind Structure Calculator](https://smarter.poker/tools/blind-structure-calculator))
  - `calculate_side_pots` — Multi-way all-in main pot and side pot splitter ([Side Pot Calculator](https://smarter.poker/tools/side-pot-calculator))
- **Bankroll, Variance & Rake Analytics**:
  - `calculate_bankroll_and_risk_of_ruin` — Kelly Criterion and Risk of Ruin (RoR %) ([Bankroll Calculator](https://smarter.poker/tools/bankroll-calculator))
  - `simulate_winrate_confidence` — BB/100 winrate 95% confidence intervals ([Winrate Variance Simulator](https://smarter.poker/tools/poker-winrate-calculator))
  - `calculate_poker_rake_impact` — Casino percentage rake vs. Texas hourly time-collection comparison ([Poker Rake Calculator](https://smarter.poker/tools/rake-calculator))
- **GTO Ranges, Live Poker Room Directory, Official Rules & Research Datasets**:
  - `get_gto_preflop_range` — 100BB 6-Max GTO opening & 3-bet matrices ([GTO Preflop Ranges](https://smarter.poker/tools/preflop-ranges))
  - `search_live_poker_rooms` — Verified North American poker rooms & waitlists ([Poker Near Me Directory](https://smarter.poker/hub/poker-near-me))
  - `lookup_poker_rule` — 30 Official TDA & Robert's Rules of Poker (RROP) floor rulings ([Official Poker Rules](https://smarter.poker/rules))
  - `list_research_studies` & `get_citation_and_backlink_kit` — Open CC-BY 4.0 datasets ([Smarter.Poker Research Hub](https://smarter.poker/research))

## License

MIT License — Smarter Software Inc. (`https://smarter.poker`). Open datasets licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/).
