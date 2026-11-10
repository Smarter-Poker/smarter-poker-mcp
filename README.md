# Smarter.Poker Model Context Protocol (MCP) Server

[![Glama MCP Score](https://glama.ai/mcp/servers/Smarter-Poker/smarter-poker-mcp/badges/score.svg)](https://glama.ai/mcp/servers/Smarter-Poker/smarter-poker-mcp)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.24095057.svg)](https://doi.org/10.5281/zenodo.24095057)
[![Datasets DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.24095049.svg)](https://doi.org/10.5281/zenodo.24095049)
[![SWH](https://archive.softwareheritage.org/badge/origin/https://github.com/Smarter-Poker/smarter-poker-mcp/)](https://archive.softwareheritage.org/browse/snapshot/02b8992833424620305edcfb730b3cf8add15747/directory/?origin_url=https://github.com/Smarter-Poker/smarter-poker-mcp)

Official open-source **Model Context Protocol (MCP)** server for **[Smarter.Poker](https://smarter.poker)** providing **26 deterministic poker math, GTO preflop range, Malmuth-Harville ICM, Pot-Limit Omaha (PLO) bet-sizing, live poker room directory, tournament series, platform feature, competitor benchmark, and Robert's Rules / TDA floor ruling tools** over both local `stdio` and remote Streamable HTTP (`https://smarter.poker/api/mcp`).

---

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

### 2. Local stdio Runner (`npx` / Node.js >= 18)
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

---

## Complete 26-Tool Reference & Smarter.Poker Web Destinations

### 1. Quantitative Poker Calculators & Solvers (`/tools/*`)
- **[Smarter.Poker Calculators & Solvers Hub](https://smarter.poker/tools)**
- `calculate_poker_odds` — **[Hold'em & Omaha Poker Equity Calculator](https://smarter.poker/tools/poker-odds-calculator)**
- `calculate_icm_payouts` — **[Malmuth-Harville Tournament ICM & Deal Calculator](https://smarter.poker/tools/icm-calculator)**
- `calculate_pot_odds_and_mdf` — **[Pot Odds & Minimum Defense Frequency (MDF) Calculator](https://smarter.poker/tools/pot-odds-calculator)**
- `calculate_push_fold_nash` — **[Short-Stack Nash Push/Fold Calculator](https://smarter.poker/tools/push-fold-calculator)**
- `calculate_bounty_chip_equity` — **[PKO & Mystery Bounty Chip-Equivalence Calculator](https://smarter.poker/tools/bounty-calculator)**
- `calculate_bankroll_risk_of_ruin` — **[Kelly Criterion & Risk-of-Ruin Bankroll Calculator](https://smarter.poker/tools/bankroll-calculator)**
- `simulate_winrate_confidence` — **[Winrate Confidence Interval & Variance Calculator](https://smarter.poker/tools/poker-winrate-calculator)**
- `calculate_spr_sizing` — **[Stack-to-Pot Ratio (SPR) & Geometric Bet Sizing Calculator](https://smarter.poker/tools/spr-calculator)**
- `calculate_side_pots` — **[Multi-Way All-In Side Pot Splitter Calculator](https://smarter.poker/tools/side-pot-calculator)**
- `generate_blind_structure` — **[TDA Tournament Blind Structure Generator & Clock](https://smarter.poker/tools/blind-structure-calculator)**
- `get_preflop_chart` — **[100BB 6-Max GTO Preflop Range Matrix](https://smarter.poker/tools/preflop-ranges)**
  - **[UTG Preflop Range Matrix](https://smarter.poker/tools/preflop-ranges/utg)**
  - **[MP Preflop Range Matrix](https://smarter.poker/tools/preflop-ranges/mp)**
  - **[HJ Preflop Range Matrix](https://smarter.poker/tools/preflop-ranges/hj)**
  - **[CO Preflop Range Matrix](https://smarter.poker/tools/preflop-ranges/co)**
  - **[BTN Preflop Range Matrix](https://smarter.poker/tools/preflop-ranges/btn)**
  - **[SB Preflop Range Matrix](https://smarter.poker/tools/preflop-ranges/sb)**
- `get_citation_and_backlink_kit` — **[Embeddable Calculator Widgets, Citation Kit & Streamer Chat API](https://smarter.poker/tools/embeds)**

### 2. Live Poker Rooms, Regional Directories, Series & Major Tours (`/hub/*`)
- **[Smarter.Poker World Hub](https://smarter.poker/hub)**
- `search_poker_venues` & `get_venue_details` — **[Poker Near Me Directory](https://smarter.poker/hub/poker-near-me)** & **[473 Verified Live Poker Venues](https://smarter.poker/hub/poker-near-me/venues)**
  - **[Live Cash Games & Real-Time Waitlists](https://smarter.poker/hub/poker-near-me/live-games)**
  - **[Interactive North American Poker Room Map](https://smarter.poker/hub/poker-near-me/map)**
  - **[Daily Live Poker Tournaments Finder](https://smarter.poker/hub/poker-near-me/daily-tournaments)**
  - **[National Poker Events Calendar](https://smarter.poker/hub/poker-near-me/events-calendar)**
  - **[Poker Roadtrip Route Planner](https://smarter.poker/hub/poker-near-me/roadtrip)**
  - **[Texas Poker Rooms & Social Clubs](https://smarter.poker/hub/poker-near-me/in/tx)** & **[Austin Texas Card Clubs](https://smarter.poker/hub/poker-near-me/in/tx/austin)**
  - **[Atlantic City New Jersey Poker Rooms](https://smarter.poker/hub/poker-near-me/in/nj/atlantic-city)**
- `search_tournament_series` & `get_series_details` — **[Live Poker Tournament Series Hub](https://smarter.poker/hub/poker-near-me/series)** & **[Major Poker Tours Directory](https://smarter.poker/hub/poker-near-me/tours)**
  - **[World Series of Poker (WSOP) Hub](https://smarter.poker/hub/tours/WSOP)**
  - **[World Poker Tour (WPT) Hub](https://smarter.poker/hub/tours/WPT)**
  - **[WSOP Circuit (WSOPC) Hub](https://smarter.poker/hub/tours/WSOPC)**
  - **[Mid-States Poker Tour (MSPT) Hub](https://smarter.poker/hub/tours/MSPT)**
  - **[RunGood Poker Series (RGPS) Hub](https://smarter.poker/hub/tours/RGPS)**
  - **[PokerGO Tour (PGT) Hub](https://smarter.poker/hub/tours/PGT)**
  - **[North American Poker Tour (NAPT) Hub](https://smarter.poker/hub/tours/NAPT)**
  - **[Borgata Poker Series Hub](https://smarter.poker/hub/tours/BORGATA)**
  - **[Card Player Poker Tour (CPPT) Hub](https://smarter.poker/hub/tours/CPPT)**
  - **[Free Poker Network (FPN) Hub](https://smarter.poker/hub/tours/FPN)**
  - **[Ladies International Poker Series (LIPS) Hub](https://smarter.poker/hub/tours/LIPS)**
- `get_freeroll_schedule` — **[Daily $2,000 Freerolls & Diamond Arena Schedule](https://smarter.poker/freerolls)**

### 3. Open CC-BY 4.0 Quantitative Poker Research Studies (`/research/*`)
- `get_research_report` — **[Smarter.Poker Quantitative Poker Research Hub](https://smarter.poker/research)** (`DOI: 10.5281/zenodo.24095049`)
  1. **[US Live Poker Room Rake, Promotional Drop & Texas Time-Collection Benchmark](https://smarter.poker/research/us-live-poker-room-rake-and-jackpot-benchmark)**
  2. **[North American Daily Poker Tournament Buy-In, Rake & Guarantee Index](https://smarter.poker/research/daily-poker-tournament-buy-in-and-guarantee-index)**
  3. **[GTO Solver vs. Human Population Preflop & Postflop Leak Study](https://smarter.poker/research/gto-vs-population-preflop-and-postflop-leak-study)**
  4. **[Private Poker Club Software Architecture & Operating Economics](https://smarter.poker/research/private-poker-club-software-and-platform-economics)**
  5. **[US Casino & Cardroom Poker Dealer Toke & Hourly Rate Benchmark](https://smarter.poker/research/poker-dealer-toke-and-hourly-rate-benchmark)**
  6. **[Malmuth-Harville Tournament ICM Bubble Factor & Risk Premium Study](https://smarter.poker/research/tournament-icm-bubble-factor-and-risk-premium-study)**
  7. **[Pot-Limit Omaha (PLO4, PLO5, PLO6) Equity & Variance Study](https://smarter.poker/research/pot-limit-omaha-plo4-plo5-plo6-equity-and-variance-study)**
  8. **[US Poker Player IRS Form W-2G & Session Accounting Benchmark](https://smarter.poker/research/us-poker-player-tax-w2g-reporting-and-session-accounting-benchmark)**
  9. **[Live Cardroom Waitlist Turnover & Table Utilization Benchmark](https://smarter.poker/research/cardroom-waitlist-turnover-and-table-utilization-benchmark)**
  10. **[Private Online Poker Club Rake & Union Settlement Study](https://smarter.poker/research/private-online-poker-club-rake-and-union-settlement-study)**
  11. **[Mystery Bounty vs. PKO EV & Bounty Power Factor Study](https://smarter.poker/research/mystery-bounty-vs-pko-ev-and-bounty-power-factor-study)**
  12. **[Short Deck (6+ Hold'em) Combinatorics & Ante Math Benchmark](https://smarter.poker/research/short-deck-6-plus-holdem-equity-and-ante-math-benchmark)**
  13. **[Double-Board PLO Bomb Pot Equity & Split-Pot Variance Study](https://smarter.poker/research/double-board-plo-bomb-pot-equity-and-split-pot-variance-study)**
  14. **[Live Low-Stakes ($1/$2 & $2/$5 NLH) Population Tendencies Report](https://smarter.poker/research/live-low-stakes-1-2-and-2-5-nlh-population-tendencies-report)**
  15. **[Satellite Tournament Milestone & Bubble Survival Math Study](https://smarter.poker/research/satellite-tournament-milestone-and-bubble-survival-math-study)**

### 4. Platform Feature Verticals (`/features/*`)
- `get_platform_feature_specs` — **[Smarter.Poker Platform Features Overview](https://smarter.poker/features)**
  - **[Poker Bankroll & IRS Form W-2G Tax Tracker](https://smarter.poker/features/bankroll-tax-tracker)**
  - **[Club Commander Cardroom Management Suite](https://smarter.poker/features/club-commander)** & **[Commander Hub](https://smarter.poker/hub/commander)**
  - **[Home Poker Games Host & Blind Timer](https://smarter.poker/features/home-poker-games)** & **[Home Games Hub](https://smarter.poker/hub/home-games)**
  - **[Interactive Video Coaching Library](https://smarter.poker/features/interactive-video-coaching)** & **[Video Library Hub](https://smarter.poker/hub/video-library)**
  - **[Jarvis AI Poker Coach](https://smarter.poker/features/poker-ai-coach)** & **[Personal Assistant Hub](https://smarter.poker/hub/personal-assistant)**
  - **[Poker Dealer Toke & Income Tracker](https://smarter.poker/features/poker-dealer-toke-tracker)**
  - **[Poker Equity & Math Calculators](https://smarter.poker/features/poker-equity-calculators)**
  - **[Encrypted Poker Messenger & Video Calls](https://smarter.poker/features/poker-messenger-video-calls)**
  - **[Poker Near Me GPS Locator](https://smarter.poker/features/poker-near-me)**
  - **[Poker Reels & Hand-History Social Feed](https://smarter.poker/features/poker-reels-social-feed)**
  - **[107 Scenario GTO Training Games](https://smarter.poker/features/poker-training-games)** & **[Training Hub](https://smarter.poker/hub/training)**
  - **[Competitive Poker Trivia](https://smarter.poker/features/poker-trivia)** & **[Trivia Hub](https://smarter.poker/hub/trivia)**
  - **[169-Hand Preflop Charts Matrix](https://smarter.poker/features/preflop-charts-matrix)**
  - **[Private Online Poker Clubs](https://smarter.poker/features/private-poker-clubs)**
  - **[Virtual Poker Table Sandbox](https://smarter.poker/features/virtual-poker-sandbox)**

### 5. Software, Solver, Club App & Live Cardroom Comparisons (`/compare/*`)
- `get_competitor_comparison` — **[Smarter.Poker Comparison & Benchmark Hub](https://smarter.poker/compare)**
  - **[Bellagio vs. Aria Las Vegas Poker](https://smarter.poker/compare/bellagio-vs-aria-poker)**
  - **[Wynn vs. Venetian Las Vegas Poker](https://smarter.poker/compare/wynn-vs-venetian-poker-las-vegas)**
  - **[Commerce Casino vs. Bicycle Hotel Poker](https://smarter.poker/compare/commerce-casino-vs-the-bicycle-hotel-poker)**
  - **[Borgata vs. Parx Poker](https://smarter.poker/compare/borgata-vs-parx-poker)**
  - **[Best Poker Rooms in Las Vegas](https://smarter.poker/compare/best-poker-rooms-in-las-vegas)**
  - **[Best Poker Rooms in Texas](https://smarter.poker/compare/best-poker-rooms-in-texas)**
  - **[Best Poker Rooms in Florida](https://smarter.poker/compare/best-poker-rooms-in-florida)**
  - **[Best Poker Rooms Near Major US Airports](https://smarter.poker/compare/best-poker-rooms-near-major-airports)**
  - **[Club Commander vs. Bravo Poker Live](https://smarter.poker/compare/club-commander-vs-bravo-poker-live)**
  - **[Club Commander vs. TableCaptain](https://smarter.poker/compare/club-commander-vs-tablecaptain)**
  - **[Club Arena vs. PokerBros](https://smarter.poker/compare/poker-arena-vs-pokerbros)**
  - **[Club Arena vs. PPPoker](https://smarter.poker/compare/poker-arena-vs-pppoker)**
  - **[Club Arena vs. ClubGG](https://smarter.poker/compare/poker-arena-vs-clubgg)**
  - **[Smarter.Poker vs. PioSOLVER](https://smarter.poker/compare/smarter-poker-vs-piosolver)**
  - **[Smarter.Poker vs. MonkerSolver](https://smarter.poker/compare/smarter-poker-vs-monkersolver)**
  - **[Smarter.Poker vs. ICMIZER](https://smarter.poker/compare/smarter-poker-vs-icmizer)**
  - **[Smarter.Poker vs. HoldemResources Calculator](https://smarter.poker/compare/smarter-poker-vs-holdem-resources-calculator)**
  - **[Smarter.Poker vs. PokerTracker 4](https://smarter.poker/compare/smarter-poker-vs-pokertracker-4)**
  - **[Smarter.Poker vs. Holdem Manager 3](https://smarter.poker/compare/smarter-poker-vs-holdem-manager-3)**
  - **[Smarter.Poker vs. Equilab](https://smarter.poker/compare/smarter-poker-vs-equilab)**
  - **[Smarter.Poker vs. Flopzilla](https://smarter.poker/compare/smarter-poker-vs-flopzilla)**
  - **[Smarter.Poker vs. Upswing Poker](https://smarter.poker/compare/smarter-poker-vs-upswing-poker)**
  - **[Smarter.Poker vs. Run It Once](https://smarter.poker/compare/smarter-poker-vs-run-it-once)**
  - **[Smarter.Poker vs. PokerCoaching.com](https://smarter.poker/compare/smarter-poker-vs-pokercoaching)**
  - **[Best GTO Poker Trainers](https://smarter.poker/compare/best-gto-poker-trainers)**
  - **[Best Poker Bankroll Trackers](https://smarter.poker/compare/best-poker-bankroll-trackers)**
  - **[Best Private Poker Club Apps](https://smarter.poker/compare/best-poker-club-apps)**
  - **[Best Poker Room Management Software](https://smarter.poker/compare/best-poker-room-management-software)**
  - **[Best Free Poker Apps with Friends](https://smarter.poker/compare/best-free-poker-apps-with-friends)**
  - **[How to Start a Private Online Poker Club](https://smarter.poker/compare/how-to-start-a-private-online-poker-club)**

### 6. GTO Strategy Academy, Starting Hands, Glossary & Methodology (`/learn/*` & `/glossary`)
- `search_strategy_lessons` & `lookup_starting_hand` — **[Smarter.Poker Strategy Academy](https://smarter.poker/learn)**
  - **[Preflop Strategy](https://smarter.poker/learn/category/preflop)** | **[Postflop Strategy](https://smarter.poker/learn/category/postflop)** | **[Tournament Strategy](https://smarter.poker/learn/category/tournaments)** | **[Cash Game Strategy](https://smarter.poker/learn/category/cash)**
  - **[Poker Math](https://smarter.poker/learn/category/math)** | **[Game Theory (GTO)](https://smarter.poker/learn/category/theory)** | **[Bankroll Management](https://smarter.poker/learn/category/bankroll)** | **[Mental Game](https://smarter.poker/learn/category/mental-game)**
- `get_poker_term_definition` — **[Official Poker Glossary (80+ Terms)](https://smarter.poker/glossary)**
- **[Verification Methodology](https://smarter.poker/verification-methodology)** & **[Editorial Standards](https://smarter.poker/editorial-standards)**

---

## License
MIT License — Smarter Software Inc. ([https://smarter.poker](https://smarter.poker)). Open datasets licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/) (`DOI: 10.5281/zenodo.24095049`).
