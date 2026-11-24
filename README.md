# Smarter.Poker Model Context Protocol (MCP) Server (`v1.0.7`)

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.24095057.svg)](https://doi.org/10.5281/zenodo.24095057)
[![Glama MCP Server](https://glama.ai/mcp/servers/Smarter-Poker/smarter-poker-mcp/badges/score.svg)](https://glama.ai/mcp/servers/Smarter-Poker/smarter-poker-mcp)

Open-source Model Context Protocol (MCP) server for Smarter.Poker providing **55 zero-auth read-only tools**, **12 prompt workflows**, **18 resource templates**, and **34 streamer chat commands** for poker equity calculation, Game Theory Optimal (GTO) preflop ranges, Malmuth-Harville Independent Chip Model (ICM) payouts, Harrington M-Ratio & Effective M, Satellite Bubble Factor & seat-lock thresholds, Tournament Late-Registration ICM chip appreciation, MTT Session ABI exposure & 0-ITM brick risk, Multi-Street 2e & 3e Geometric Bet Sizing, 4-Card & 5-Card PLO Straight Wrap Outs & 3x+pot bet-sizing, Winrate 70%/95%/99% Confidence Intervals, Live Cash Table Selection scoring, Poker Festival Travel Overhead & Trip Budgeting, Flop Board Texture & GTO C-Bet sizing, 7-Card Texas Hold'em Showdown resolution, Cash Game Session planning, Straddle & Double-Board Bomb Pot EV, Bad Beat Jackpot & High-Hand promotion EV, Reddit/Discord Hand History formatting, US W-2G poker tax estimation, tournament staking markup, preflop isolation sizing, home-game chip sets, 9 table position GTO guides, 8 player archetype exploitative guides, 12 canonical flop board texture guides, 15 US state poker law guides, 10 international poker destination guides, live North American cardroom directory queries, tournament series schedules, and Tournament Directors Association (TDA) floor rulings over both local `stdio` (`npx` / Docker) and remote Streamable HTTP (`https://smarter.poker/api/mcp`).

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

## 55-Tool Reference & Web Documentation

### 1. Poker Mathematics, Equity & Tournament Solvers (`34 Solvers` — `/tools/*`)
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
19. `calculate_home_game_chip_set` — [Cash & Tournament Chip Denomination & Color Breakdown Calculator](https://smarter.poker/tools/home-game-kit)
20. `analyze_flop_board_texture` — [Flop Board Texture, Range Advantage & GTO C-Bet Analyzer](https://smarter.poker/tools/board-texture-analyzer)
21. `calculate_tournament_m_ratio` — [Harrington M-Ratio, Effective M & Q-Ratio Calculator](https://smarter.poker/tools/m-ratio-calculator)
22. `calculate_cash_session_plan` — [Cash Game Session Planner, Net Hourly EV & Stop-Loss Calculator](https://smarter.poker/tools/session-planner)
23. `calculate_straddle_bomb_pot_ev` — [UTG/Button Straddle & Double-Board Bomb Pot EV Calculator](https://smarter.poker/tools/straddle-calculator)
24. `format_poker_hand_history` — [Reddit/Discord Poker Hand History Formatter & SPR Converter](https://smarter.poker/tools/hand-converter)
25. `calculate_satellite_bubble_factor` — [Satellite Seat-Lock Threshold & Bubble Factor Calculator](https://smarter.poker/tools/satellite-calculator)
26. `calculate_bad_beat_jackpot_ev` — [Bad Beat Jackpot (BBJ) & High-Hand Promotion EV Calculator](https://smarter.poker/tools/promo-ev-calculator)
27. `resolve_holdem_showdown_winner` — [7-Card Texas Hold'em Showdown Winner, Kicker & Split-Pot Resolver](https://smarter.poker/tools/who-wins-calculator)
28. `calculate_plo_wrap_outs` — [4-Card & 5-Card PLO Straight Wrap Outs & Flush Redraw Equity Calculator](https://smarter.poker/tools/plo-outs-calculator)
29. `calculate_late_reg_icm_ev` — [Tournament Late-Registration ICM Chip Appreciation & Equity Boost Calculator](https://smarter.poker/tools/late-reg-calculator)
30. `calculate_winrate_confidence_interval` — [Poker Winrate 70%/95%/99% Confidence Interval & Loss Probability Calculator](https://smarter.poker/tools/winrate-confidence-calculator)
31. `calculate_poker_trip_budget` — [Poker Festival Travel Overhead %, Expense Rake & Breakeven Target Planner](https://smarter.poker/tools/poker-trip-planner)
32. `calculate_geometric_bet_sizing` — [Multi-Street 2e & 3e Geometric Pot-Fraction Bet Sizing Calculator](https://smarter.poker/tools/geometric-bet-calculator)
33. `score_live_table_selection` — [Live Cash Game Table Selection Profitability Scorer](https://smarter.poker/tools/table-selection-calculator)
34. `calculate_mtt_session_abi_plan` — [MTT Tournament Grind Session ABI Exposure & 0-ITM Brick Risk Planner](https://smarter.poker/tools/mtt-grind-planner)

### 2. Live Cardrooms, US & International Law, Position & Archetype Strategy, Series, Rules & Reference Data (`21 Tools`)
35. `search_poker_venues` — [North American Live Poker Room Directory Search](https://smarter.poker/hub/poker-near-me/venues)
36. `get_venue_details` — [Live Cardroom Rake, Tables & Cash Game Details](https://smarter.poker/hub/poker-near-me/venues)
37. `get_regional_market_guide` — [Regional Poker Market Guides (12 Markets)](https://smarter.poker/poker-rooms/guides)
38. `get_us_state_poker_guide` — [US State Poker Legality, Tax Withholding & Rake Guides (15 States)](https://smarter.poker/poker-rooms/states)
39. `get_international_poker_guide` — [International Poker Destination Rooms, Stakes & Tax Guides (10 Global Cities)](https://smarter.poker/poker-rooms/international)
40. `get_poker_position_strategy` — [9-Max & 6-Max Table Position GTO RFI %, 3-Bet % & Winrate Guides (9 Positions)](https://smarter.poker/learn/positions)
41. `get_player_archetype_exploit` — [Exploitative Counter-Strategy By Live Poker Player Archetype (8 Archetypes)](https://smarter.poker/learn/player-types)
42. `get_flop_board_texture_guide` — [Canonical Flop Board Texture Solver Guides (12 Textures)](https://smarter.poker/learn/board-textures)
43. `search_tournament_series` — [Live Tournament Series & Tour Schedule Search](https://smarter.poker/hub/series)
44. `get_series_details` — [Tournament Series Event & Guarantee Details](https://smarter.poker/hub/series)
45. `get_poker_series_strategy_guide` — [Major Poker Tour & Series Strategy Guides (10 Tours + First-Time Live Guide)](https://smarter.poker/poker-series/guides)
46. `get_freeroll_schedule` — [Freeroll & Bar League Directory](https://smarter.poker/freerolls)
47. `lookup_poker_rule` — [Floor Rule Reference (Citing Published TDA & RROP Standards) (30 Rules)](https://smarter.poker/rules)
48. `lookup_game_variant` — [Poker Game Variant Rules & Formats (15 Variants)](https://smarter.poker/games)
49. `get_poker_term_definition` — [Poker Strategy & Math Glossary (80 Terms)](https://smarter.poker/glossary)
50. `search_strategy_lessons` — [Poker Strategy Guides (40 Lessons)](https://smarter.poker/learn)
51. `search_training_simulators` — [GTO Training Scenarios](https://smarter.poker/hub/training)
52. `get_research_report` — [Open Quantitative Poker Research Studies (15 Studies)](https://smarter.poker/research)
53. `get_platform_feature_specs` — [Platform Architecture Specifications](https://smarter.poker/features)
54. `get_competitor_comparison` — [Poker Software & Tool Feature Matrix (30 Comparisons)](https://smarter.poker/compare)
55. `get_citation_and_backlink_kit` — [Embed Widgets & 34 Streamer Chat Commands](https://smarter.poker/tools/embeds)

## 12 Structured MCP Prompts

1. `find_live_poker_near_city` — Search verified live poker rooms, cash game stakes, and daily tournament schedules in a target city or state.
2. `analyze_icm_final_table` — Compute Malmuth-Harville ICM tournament equity and bubble pressure for a final table stack and payout distribution.
3. `explain_poker_strategy_concept` — Explain a poker strategy concept or GTO preflop range using the Smarter.Poker curriculum and glossary.
4. `compare_poker_software` — Compare poker training software, bankroll trackers, or club management apps using verified primary-source citations.
5. `plan_final_table_chop_deal` — Compare Malmuth-Harville ICM Chop, Linear Chip Chop, and Save-Amount final table deal payouts.
6. `analyze_preflop_hand_matchup` — Evaluate exact preflop win/tie/loss combinatorics, flop texture equity shifts, and stack-off thresholds.
7. `audit_poker_variance_and_bankroll` — Simulate sample EV, 68%/95%/99.7% confidence intervals, probability of loss, and required Risk-of-Ruin buy-in cushions.
8. `prepare_tournament_series_trip` — Build a complete tournament series schedule, late-registration plan, venue logistics checklist, and bankroll allocation.
9. `analyze-flop-cbet-texture` — Evaluate flop board texture, range advantage, and GTO C-Bet sizing.
10. `plan-satellite-or-bounty-endgame` — Calculate PKO bounty chip equivalents or satellite bubble survival thresholds.
11. `exploit-live-player-archetype` — Generate an exploitative counter-strategy and table selection score against a specific live poker player archetype.
12. `plan-geometric-overbet-line` — Calculate 2-street (2e) and 3-street (3e) geometric pot-fraction bet sizing and polarized bluff ratios for a given pot and stack.

## 18 Markdown Resource Templates

1. `https://smarter.poker/learn/{slug}.md`
2. `https://smarter.poker/learn/category/{category}.md`
3. `https://smarter.poker/glossary/{term}.md`
4. `https://smarter.poker/compare/{slug}.md`
5. `https://smarter.poker/hub/venues/{id}.md`
6. `https://smarter.poker/learn/hands/{hand}.md`
7. `https://smarter.poker/research/{slug}.md`
8. `https://smarter.poker/hub/training/{tool}.md`
9. `https://smarter.poker/rules/{slug}.md`
10. `https://smarter.poker/games/{variant}.md`
11. `https://smarter.poker/poker-rooms/guides/{city}.md`
12. `https://smarter.poker/tools/{calculator}.md`
13. `https://smarter.poker/learn/positions/{pos}.md`
14. `https://smarter.poker/learn/stakes/{stake}.md`
15. `https://smarter.poker/learn/famous-hands/{slug}.md`
16. `https://smarter.poker/poker-rooms/states/{state}.md`
17. `https://smarter.poker/learn/player-types/{type}.md` (`poker://player-type/{type}`)
18. `https://smarter.poker/poker-rooms/international/{city}.md` (`poker://international-poker/{city}`)

## 34 Streamer Chatbot Commands (`/api/stream/cmd`)

`!odds`, `!potodds`, `!pushfold`, `!icm`, `!bounty`, `!winrate`, `!plo`, `!rake`, `!3bet`, `!rule`, `!chop`, `!outs`, `!variance`, `!matchup`, `!tax`, `!stake`, `!iso`, `!series`, `!board`, `!mratio`, `!straddle`, `!sat`, `!bbj`, `!position`, `!math`, `!iq`, `!wrap`, `!latereg`, `!confidence`, `!trip`, `!geo`, `!table`, `!exploit`, `!intl`

## Archival Identifiers & License
- **Software DOI**: [10.5281/zenodo.24095057](https://doi.org/10.5281/zenodo.24095057)
- **55-Tool MCP + OpenAPI 3.1 Bundle DOI**: [10.5281/zenodo.24115453](https://doi.org/10.5281/zenodo.24115453)
- **Companion Datasets DOI**: [10.5281/zenodo.24095049](https://doi.org/10.5281/zenodo.24095049)
- **Software Heritage SWHID**: `swh:1:snp:b559bea6460c28fc68ae61ea315eb2650fc387e7`
- **License**: MIT License
