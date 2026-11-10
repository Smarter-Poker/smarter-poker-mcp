# Smarter.Poker Model Context Protocol (MCP) Server

[![Glama MCP Score](https://glama.ai/mcp/servers/Smarter-Poker/smarter-poker-mcp/badges/score.svg)](https://glama.ai/mcp/servers/Smarter-Poker/smarter-poker-mcp)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.24095057.svg)](https://doi.org/10.5281/zenodo.24095057)
[![Datasets DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.24095049.svg)](https://doi.org/10.5281/zenodo.24095049)
[![SWH](https://archive.softwareheritage.org/badge/origin/https://github.com/Smarter-Poker/smarter-poker-mcp/)](https://archive.softwareheritage.org/browse/snapshot/02b8992833424620305edcfb730b3cf8add15747/directory/?origin_url=https://github.com/Smarter-Poker/smarter-poker-mcp)

Official open-source **Model Context Protocol (MCP)** server for **[Smarter.Poker](https://smarter.poker)** providing **30 deterministic poker math, GTO preflop range, Malmuth-Harville ICM, Pot-Limit Omaha (PLO) bet-sizing, live poker room directory, tournament series, platform feature, competitor benchmark, and Robert's Rules / TDA floor ruling tools** over both local `stdio` and remote Streamable HTTP (`https://smarter.poker/api/mcp`).

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

## Complete 30-Tool Reference & Smarter.Poker Web Destinations

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

## Complete Smarter.Poker Canonical Resource & Vertical Index (324 Core Hubs + 6 CERN/Zenodo Open-Access Archives = 1,841 Total Indexed URLs)

### CERN / Zenodo Open-Access DOI Archives (100.0% Sitemap Coverage — 1,841 Canonical URLs)
- **Record 1 (Core Calculators, Research, Software Comparisons, Game Variants & Commander Hubs — 324 URLs)**: [https://doi.org/10.5281/zenodo.24095049](https://doi.org/10.5281/zenodo.24095049) ([Zenodo Record 24095049](https://zenodo.org/records/24095049))
- **Record 2 (30-Tool Model Context Protocol Server & JSON-RPC 2.0 Schema Registry — 324 URLs)**: [https://doi.org/10.5281/zenodo.24095057](https://doi.org/10.5281/zenodo.24095057) ([Zenodo Record 24095057](https://zenodo.org/records/24095057))
- **Record 3 (Poker Strategy Academy, 169 Starting-Hand Encyclopedia, TDA Rules & Glossary Corpus — 358 URLs)**: [https://doi.org/10.5281/zenodo.24095560](https://doi.org/10.5281/zenodo.24095560) ([Zenodo Record 24095560](https://zenodo.org/records/24095560))
- **Record 4 (North American State, Metro & Regional Poker Room Geolocation Atlas — 413 URLs)**: [https://doi.org/10.5281/zenodo.24095564](https://doi.org/10.5281/zenodo.24095564) ([Zenodo Record 24095564](https://zenodo.org/records/24095564))
- **Record 5 (Verified US Cardroom & Social Poker Club Venue Registry — 473 URLs)**: [https://doi.org/10.5281/zenodo.24095597](https://doi.org/10.5281/zenodo.24095597) ([Zenodo Record 24095597](https://zenodo.org/records/24095597))
- **Record 6 (Live Poker Tournament Series, Championship Festivals & Major Tour Schedule Index — 359 URLs)**: [https://doi.org/10.5281/zenodo.24095602](https://doi.org/10.5281/zenodo.24095602) ([Zenodo Record 24095602](https://zenodo.org/records/24095602))

### Direct Canonical Vertical Links (324 Core Endpoints)
- [Home](https://smarter.poker/)
- [about](https://smarter.poker/about)
- [press](https://smarter.poker/press)
- [search](https://smarter.poker/search)
- [verification-methodology](https://smarter.poker/verification-methodology)
- [editorial-standards](https://smarter.poker/editorial-standards)
- [terms](https://smarter.poker/terms)
- [privacy](https://smarter.poker/privacy)
- [legal/official-rules](https://smarter.poker/legal/official-rules)
- [hub](https://smarter.poker/hub)
- [hub/news](https://smarter.poker/hub/news)
- [hub/diamond-store](https://smarter.poker/hub/diamond-store)
- [hub/vip-membership](https://smarter.poker/hub/vip-membership)
- [hub/vip-membership/monthly](https://smarter.poker/hub/vip-membership/monthly)
- [hub/vip-membership/yearly](https://smarter.poker/hub/vip-membership/yearly)
- [hub/vip-membership/lifetime](https://smarter.poker/hub/vip-membership/lifetime)
- [hub/vip-membership/gift/monthly](https://smarter.poker/hub/vip-membership/gift/monthly)
- [hub/vip-membership/gift/yearly](https://smarter.poker/hub/vip-membership/gift/yearly)
- [hub/vip-membership/gift/lifetime](https://smarter.poker/hub/vip-membership/gift/lifetime)
- [hub/vip-membership/compare](https://smarter.poker/hub/vip-membership/compare)
- [hub/install](https://smarter.poker/hub/install)
- [hub/merch-store](https://smarter.poker/hub/merch-store)
- [hub/smarter-rewards](https://smarter.poker/hub/smarter-rewards)
- [hub/club-shop](https://smarter.poker/hub/club-shop)
- [hub/bankroll-manager](https://smarter.poker/hub/bankroll-manager)
- [hub/poker-tools](https://smarter.poker/hub/poker-tools)
- [freerolls](https://smarter.poker/freerolls)
- [hub/events-calendar](https://smarter.poker/hub/events-calendar)
- [hub/daily-tournaments](https://smarter.poker/hub/daily-tournaments)
- [hub/tournaments/this-weekend](https://smarter.poker/hub/tournaments/this-weekend)
- [hub/poker-tours](https://smarter.poker/hub/poker-tours)
- [hub/poker-series](https://smarter.poker/hub/poker-series)
- [hub/social-media](https://smarter.poker/hub/social-media)
- [hub/leaderboards](https://smarter.poker/hub/leaderboards)
- [hub/promotions](https://smarter.poker/hub/promotions)
- [hub/reels](https://smarter.poker/hub/reels)
- [hub/lives](https://smarter.poker/hub/lives)
- [hub/help](https://smarter.poker/hub/help)
- [hub/pages](https://smarter.poker/hub/pages)
- [hub/news/sources](https://smarter.poker/hub/news/sources)
- [hub/social-pages](https://smarter.poker/hub/social-pages)
- [glossary](https://smarter.poker/glossary)
- [learn](https://smarter.poker/learn)
- [tools](https://smarter.poker/tools)
- [tools/poker-odds-calculator](https://smarter.poker/tools/poker-odds-calculator)
- [tools/icm-calculator](https://smarter.poker/tools/icm-calculator)
- [tools/pot-odds-calculator](https://smarter.poker/tools/pot-odds-calculator)
- [tools/bankroll-calculator](https://smarter.poker/tools/bankroll-calculator)
- [tools/push-fold-calculator](https://smarter.poker/tools/push-fold-calculator)
- [tools/bounty-calculator](https://smarter.poker/tools/bounty-calculator)
- [tools/poker-winrate-calculator](https://smarter.poker/tools/poker-winrate-calculator)
- [tools/side-pot-calculator](https://smarter.poker/tools/side-pot-calculator)
- [tools/blind-structure-calculator](https://smarter.poker/tools/blind-structure-calculator)
- [tools/spr-calculator](https://smarter.poker/tools/spr-calculator)
- [tools/plo-bet-calculator](https://smarter.poker/tools/plo-bet-calculator)
- [tools/payout-calculator](https://smarter.poker/tools/payout-calculator)
- [tools/rake-calculator](https://smarter.poker/tools/rake-calculator)
- [tools/3bet-calculator](https://smarter.poker/tools/3bet-calculator)
- [tools/chop-calculator](https://smarter.poker/tools/chop-calculator)
- [tools/variance-calculator](https://smarter.poker/tools/variance-calculator)
- [tools/outs-calculator](https://smarter.poker/tools/outs-calculator)
- [tools/poker-tax-calculator](https://smarter.poker/tools/poker-tax-calculator)
- [tools/staking-calculator](https://smarter.poker/tools/staking-calculator)
- [tools/iso-calculator](https://smarter.poker/tools/iso-calculator)
- [tools/home-game-kit](https://smarter.poker/tools/home-game-kit)
- [tools/format-quiz](https://smarter.poker/tools/format-quiz)
- [tools/preflop-ranges](https://smarter.poker/tools/preflop-ranges)
- [tools/embeds](https://smarter.poker/tools/embeds)
- [tools/preflop-ranges/utg](https://smarter.poker/tools/preflop-ranges/utg)
- [tools/preflop-ranges/mp](https://smarter.poker/tools/preflop-ranges/mp)
- [tools/preflop-ranges/hj](https://smarter.poker/tools/preflop-ranges/hj)
- [tools/preflop-ranges/co](https://smarter.poker/tools/preflop-ranges/co)
- [tools/preflop-ranges/btn](https://smarter.poker/tools/preflop-ranges/btn)
- [tools/preflop-ranges/sb](https://smarter.poker/tools/preflop-ranges/sb)
- [compare](https://smarter.poker/compare)
- [compare/best-poker-club-apps](https://smarter.poker/compare/best-poker-club-apps)
- [compare/poker-arena-vs-pokerbros](https://smarter.poker/compare/poker-arena-vs-pokerbros)
- [compare/poker-arena-vs-pppoker](https://smarter.poker/compare/poker-arena-vs-pppoker)
- [compare/poker-arena-vs-clubgg](https://smarter.poker/compare/poker-arena-vs-clubgg)
- [compare/best-free-poker-apps-with-friends](https://smarter.poker/compare/best-free-poker-apps-with-friends)
- [compare/how-to-start-a-private-online-poker-club](https://smarter.poker/compare/how-to-start-a-private-online-poker-club)
- [compare/best-poker-room-management-software](https://smarter.poker/compare/best-poker-room-management-software)
- [compare/club-commander-vs-tablecaptain](https://smarter.poker/compare/club-commander-vs-tablecaptain)
- [compare/club-commander-vs-bravo-poker-live](https://smarter.poker/compare/club-commander-vs-bravo-poker-live)
- [compare/best-gto-poker-trainers](https://smarter.poker/compare/best-gto-poker-trainers)
- [compare/best-poker-bankroll-trackers](https://smarter.poker/compare/best-poker-bankroll-trackers)
- [compare/bellagio-vs-aria-poker](https://smarter.poker/compare/bellagio-vs-aria-poker)
- [compare/commerce-casino-vs-the-bicycle-hotel-poker](https://smarter.poker/compare/commerce-casino-vs-the-bicycle-hotel-poker)
- [compare/best-poker-rooms-in-las-vegas](https://smarter.poker/compare/best-poker-rooms-in-las-vegas)
- [compare/best-poker-rooms-in-texas](https://smarter.poker/compare/best-poker-rooms-in-texas)
- [compare/best-poker-rooms-near-major-airports](https://smarter.poker/compare/best-poker-rooms-near-major-airports)
- [compare/smarter-poker-vs-pokercoaching](https://smarter.poker/compare/smarter-poker-vs-pokercoaching)
- [compare/smarter-poker-vs-icmizer](https://smarter.poker/compare/smarter-poker-vs-icmizer)
- [compare/smarter-poker-vs-equilab](https://smarter.poker/compare/smarter-poker-vs-equilab)
- [compare/smarter-poker-vs-run-it-once](https://smarter.poker/compare/smarter-poker-vs-run-it-once)
- [compare/smarter-poker-vs-upswing-poker](https://smarter.poker/compare/smarter-poker-vs-upswing-poker)
- [compare/smarter-poker-vs-pokertracker-4](https://smarter.poker/compare/smarter-poker-vs-pokertracker-4)
- [compare/smarter-poker-vs-holdem-manager-3](https://smarter.poker/compare/smarter-poker-vs-holdem-manager-3)
- [compare/smarter-poker-vs-piosolver](https://smarter.poker/compare/smarter-poker-vs-piosolver)
- [compare/smarter-poker-vs-monkersolver](https://smarter.poker/compare/smarter-poker-vs-monkersolver)
- [compare/smarter-poker-vs-holdem-resources-calculator](https://smarter.poker/compare/smarter-poker-vs-holdem-resources-calculator)
- [compare/smarter-poker-vs-flopzilla](https://smarter.poker/compare/smarter-poker-vs-flopzilla)
- [compare/wynn-vs-venetian-poker-las-vegas](https://smarter.poker/compare/wynn-vs-venetian-poker-las-vegas)
- [compare/borgata-vs-parx-poker](https://smarter.poker/compare/borgata-vs-parx-poker)
- [compare/best-poker-rooms-in-florida](https://smarter.poker/compare/best-poker-rooms-in-florida)
- [features](https://smarter.poker/features)
- [features/bankroll-tax-tracker](https://smarter.poker/features/bankroll-tax-tracker)
- [features/poker-dealer-toke-tracker](https://smarter.poker/features/poker-dealer-toke-tracker)
- [features/poker-ai-coach](https://smarter.poker/features/poker-ai-coach)
- [features/virtual-poker-sandbox](https://smarter.poker/features/virtual-poker-sandbox)
- [features/club-commander](https://smarter.poker/features/club-commander)
- [features/poker-messenger-video-calls](https://smarter.poker/features/poker-messenger-video-calls)
- [features/poker-trivia](https://smarter.poker/features/poker-trivia)
- [features/poker-training-games](https://smarter.poker/features/poker-training-games)
- [features/home-poker-games](https://smarter.poker/features/home-poker-games)
- [features/interactive-video-coaching](https://smarter.poker/features/interactive-video-coaching)
- [features/poker-near-me](https://smarter.poker/features/poker-near-me)
- [features/private-poker-clubs](https://smarter.poker/features/private-poker-clubs)
- [features/poker-reels-social-feed](https://smarter.poker/features/poker-reels-social-feed)
- [features/preflop-charts-matrix](https://smarter.poker/features/preflop-charts-matrix)
- [features/poker-equity-calculators](https://smarter.poker/features/poker-equity-calculators)
- [research](https://smarter.poker/research)
- [research/us-live-poker-room-rake-and-jackpot-benchmark](https://smarter.poker/research/us-live-poker-room-rake-and-jackpot-benchmark)
- [research/daily-poker-tournament-buy-in-and-guarantee-index](https://smarter.poker/research/daily-poker-tournament-buy-in-and-guarantee-index)
- [research/gto-vs-population-preflop-and-postflop-leak-study](https://smarter.poker/research/gto-vs-population-preflop-and-postflop-leak-study)
- [research/private-poker-club-software-and-platform-economics](https://smarter.poker/research/private-poker-club-software-and-platform-economics)
- [research/poker-dealer-toke-and-hourly-rate-benchmark](https://smarter.poker/research/poker-dealer-toke-and-hourly-rate-benchmark)
- [research/tournament-icm-bubble-factor-and-risk-premium-study](https://smarter.poker/research/tournament-icm-bubble-factor-and-risk-premium-study)
- [research/pot-limit-omaha-plo4-plo5-plo6-equity-and-variance-study](https://smarter.poker/research/pot-limit-omaha-plo4-plo5-plo6-equity-and-variance-study)
- [research/us-poker-player-tax-w2g-reporting-and-session-accounting-benchmark](https://smarter.poker/research/us-poker-player-tax-w2g-reporting-and-session-accounting-benchmark)
- [research/cardroom-waitlist-turnover-and-table-utilization-benchmark](https://smarter.poker/research/cardroom-waitlist-turnover-and-table-utilization-benchmark)
- [research/private-online-poker-club-rake-and-union-settlement-study](https://smarter.poker/research/private-online-poker-club-rake-and-union-settlement-study)
- [research/mystery-bounty-vs-pko-ev-and-bounty-power-factor-study](https://smarter.poker/research/mystery-bounty-vs-pko-ev-and-bounty-power-factor-study)
- [research/short-deck-6-plus-holdem-equity-and-ante-math-benchmark](https://smarter.poker/research/short-deck-6-plus-holdem-equity-and-ante-math-benchmark)
- [research/double-board-plo-bomb-pot-equity-and-split-pot-variance-study](https://smarter.poker/research/double-board-plo-bomb-pot-equity-and-split-pot-variance-study)
- [research/live-low-stakes-1-2-and-2-5-nlh-population-tendencies-report](https://smarter.poker/research/live-low-stakes-1-2-and-2-5-nlh-population-tendencies-report)
- [research/satellite-tournament-milestone-and-bubble-survival-math-study](https://smarter.poker/research/satellite-tournament-milestone-and-bubble-survival-math-study)
- [rules](https://smarter.poker/rules)
- [rules/showdown-order-who-shows-first](https://smarter.poker/rules/showdown-order-who-shows-first)
- [rules/verbal-declarations-binding-action](https://smarter.poker/rules/verbal-declarations-binding-action)
- [rules/string-bets-and-oversized-chip-rule](https://smarter.poker/rules/string-bets-and-oversized-chip-rule)
- [rules/odd-chip-rule-split-pots](https://smarter.poker/rules/odd-chip-rule-split-pots)
- [rules/side-pot-and-all-in-protection-rules](https://smarter.poker/rules/side-pot-and-all-in-protection-rules)
- [rules/misdeals-and-exposed-card-rules](https://smarter.poker/rules/misdeals-and-exposed-card-rules)
- [rules/dead-hands-and-fouled-decks](https://smarter.poker/rules/dead-hands-and-fouled-decks)
- [rules/minimum-raise-and-incomplete-all-in-reopen](https://smarter.poker/rules/minimum-raise-and-incomplete-all-in-reopen)
- [rules/straddle-rules-utg-button-mississippi](https://smarter.poker/rules/straddle-rules-utg-button-mississippi)
- [rules/big-blind-ante-vs-traditional-ante-rules](https://smarter.poker/rules/big-blind-ante-vs-traditional-ante-rules)
- [rules/one-player-to-a-hand-and-collusion-rules](https://smarter.poker/rules/one-player-to-a-hand-and-collusion-rules)
- [rules/first-card-off-the-deck-and-substantial-action](https://smarter.poker/rules/first-card-off-the-deck-and-substantial-action)
- [rules/color-up-and-chip-race-rules](https://smarter.poker/rules/color-up-and-chip-race-rules)
- [rules/table-balancing-and-breaking-order](https://smarter.poker/rules/table-balancing-and-breaking-order)
- [rules/hand-for-hand-bubble-play-rules](https://smarter.poker/rules/hand-for-hand-bubble-play-rules)
- [rules/shot-clock-and-time-bank-rules](https://smarter.poker/rules/shot-clock-and-time-bank-rules)
- [rules/missed-blinds-posting-and-buying-the-button](https://smarter.poker/rules/missed-blinds-posting-and-buying-the-button)
- [rules/run-it-twice-and-all-in-insurance-rules](https://smarter.poker/rules/run-it-twice-and-all-in-insurance-rules)
- [rules/bomb-pots-and-double-board-rules](https://smarter.poker/rules/bomb-pots-and-double-board-rules)
- [rules/kill-pots-and-half-kill-rules](https://smarter.poker/rules/kill-pots-and-half-kill-rules)
- [rules/rabbit-hunting-and-dealing-unused-cards](https://smarter.poker/rules/rabbit-hunting-and-dealing-unused-cards)
- [rules/check-raising-and-out-of-turn-action](https://smarter.poker/rules/check-raising-and-out-of-turn-action)
- [rules/chip-visibility-and-table-stakes-rules](https://smarter.poker/rules/chip-visibility-and-table-stakes-rules)
- [rules/final-table-redraw-and-icm-chop-rules](https://smarter.poker/rules/final-table-redraw-and-icm-chop-rules)
- [rules/late-registration-and-re-entry-rules](https://smarter.poker/rules/late-registration-and-re-entry-rules)
- [rules/bounty-and-mystery-bounty-token-rules](https://smarter.poker/rules/bounty-and-mystery-bounty-token-rules)
- [rules/pot-limit-maximum-bet-calculation-rules](https://smarter.poker/rules/pot-limit-maximum-bet-calculation-rules)
- [rules/hi-lo-eight-or-better-qualifier-rules](https://smarter.poker/rules/hi-lo-eight-or-better-qualifier-rules)
- [rules/short-deck-six-plus-holdem-rules](https://smarter.poker/rules/short-deck-six-plus-holdem-rules)
- [rules/disputed-pots-and-surveillance-review-rules](https://smarter.poker/rules/disputed-pots-and-surveillance-review-rules)
- [games](https://smarter.poker/games)
- [games/texas-holdem](https://smarter.poker/games/texas-holdem)
- [games/pot-limit-omaha-plo4](https://smarter.poker/games/pot-limit-omaha-plo4)
- [games/five-card-omaha-plo5](https://smarter.poker/games/five-card-omaha-plo5)
- [games/six-card-omaha-plo6](https://smarter.poker/games/six-card-omaha-plo6)
- [games/omaha-hi-lo-o8](https://smarter.poker/games/omaha-hi-lo-o8)
- [games/short-deck-six-plus](https://smarter.poker/games/short-deck-six-plus)
- [games/double-board-bomb-pot-plo](https://smarter.poker/games/double-board-bomb-pot-plo)
- [games/seven-card-stud](https://smarter.poker/games/seven-card-stud)
- [games/seven-card-stud-hi-lo](https://smarter.poker/games/seven-card-stud-hi-lo)
- [games/razz-seven-card-lowball](https://smarter.poker/games/razz-seven-card-lowball)
- [games/deuce-to-seven-triple-draw](https://smarter.poker/games/deuce-to-seven-triple-draw)
- [games/no-limit-deuce-to-seven-single-draw](https://smarter.poker/games/no-limit-deuce-to-seven-single-draw)
- [games/badugi-four-card-lowball](https://smarter.poker/games/badugi-four-card-lowball)
- [games/horse-and-eight-game-mix](https://smarter.poker/games/horse-and-eight-game-mix)
- [games/pineapple-and-crazy-pineapple](https://smarter.poker/games/pineapple-and-crazy-pineapple)
- [poker-rooms/guides](https://smarter.poker/poker-rooms/guides)
- [poker-rooms/first-time-guide](https://smarter.poker/poker-rooms/first-time-guide)
- [poker-rooms/guides/las-vegas-nevada](https://smarter.poker/poker-rooms/guides/las-vegas-nevada)
- [poker-rooms/guides/los-angeles-california](https://smarter.poker/poker-rooms/guides/los-angeles-california)
- [poker-rooms/guides/south-florida-miami-hollywood](https://smarter.poker/poker-rooms/guides/south-florida-miami-hollywood)
- [poker-rooms/guides/houston-texas](https://smarter.poker/poker-rooms/guides/houston-texas)
- [poker-rooms/guides/dallas-fort-worth-texas](https://smarter.poker/poker-rooms/guides/dallas-fort-worth-texas)
- [poker-rooms/guides/austin-san-antonio-texas](https://smarter.poker/poker-rooms/guides/austin-san-antonio-texas)
- [poker-rooms/guides/tampa-central-florida](https://smarter.poker/poker-rooms/guides/tampa-central-florida)
- [poker-rooms/guides/atlantic-city-new-jersey](https://smarter.poker/poker-rooms/guides/atlantic-city-new-jersey)
- [poker-rooms/guides/philadelphia-pennsylvania](https://smarter.poker/poker-rooms/guides/philadelphia-pennsylvania)
- [poker-rooms/guides/phoenix-scottsdale-arizona](https://smarter.poker/poker-rooms/guides/phoenix-scottsdale-arizona)
- [poker-rooms/guides/chicagoland-midwest](https://smarter.poker/poker-rooms/guides/chicagoland-midwest)
- [poker-rooms/guides/new-england-connecticut-boston](https://smarter.poker/poker-rooms/guides/new-england-connecticut-boston)
- [poker-series/guides](https://smarter.poker/poker-series/guides)
- [poker-series/guides/wsop-las-vegas](https://smarter.poker/poker-series/guides/wsop-las-vegas)
- [poker-series/guides/wpt-world-championship](https://smarter.poker/poker-series/guides/wpt-world-championship)
- [poker-series/guides/wsop-circuit](https://smarter.poker/poker-series/guides/wsop-circuit)
- [poker-series/guides/mspt-mid-states-poker-tour](https://smarter.poker/poker-series/guides/mspt-mid-states-poker-tour)
- [poker-series/guides/rgps-rungood-poker-series](https://smarter.poker/poker-series/guides/rgps-rungood-poker-series)
- [poker-series/guides/seminole-hard-rock-poker-open](https://smarter.poker/poker-series/guides/seminole-hard-rock-poker-open)
- [poker-series/guides/borgata-poker-open](https://smarter.poker/poker-series/guides/borgata-poker-open)
- [poker-series/guides/wynn-millions-classic](https://smarter.poker/poker-series/guides/wynn-millions-classic)
- [poker-series/guides/venetian-deepstack-championship](https://smarter.poker/poker-series/guides/venetian-deepstack-championship)
- [poker-series/guides/texas-card-house-lodge-championship](https://smarter.poker/poker-series/guides/texas-card-house-lodge-championship)
- [hub/tours/WSOP](https://smarter.poker/hub/tours/WSOP)
- [hub/tours/WPT](https://smarter.poker/hub/tours/WPT)
- [hub/tours/WSOPC](https://smarter.poker/hub/tours/WSOPC)
- [hub/tours/MSPT](https://smarter.poker/hub/tours/MSPT)
- [hub/tours/RGPS](https://smarter.poker/hub/tours/RGPS)
- [hub/tours/PGT](https://smarter.poker/hub/tours/PGT)
- [hub/tours/ROUGHRIDER](https://smarter.poker/hub/tours/ROUGHRIDER)
- [hub/tours/FPN](https://smarter.poker/hub/tours/FPN)
- [hub/tours/LIPS](https://smarter.poker/hub/tours/LIPS)
- [hub/tours/NAPT](https://smarter.poker/hub/tours/NAPT)
- [hub/tours/PAT](https://smarter.poker/hub/tours/PAT)
- [hub/tours/GCPT](https://smarter.poker/hub/tours/GCPT)
- [hub/tours/CPPT](https://smarter.poker/hub/tours/CPPT)
- [hub/tours/AUPT](https://smarter.poker/hub/tours/AUPT)
- [hub/tours/BORGATA](https://smarter.poker/hub/tours/BORGATA)
- [hub/tours/BPO](https://smarter.poker/hub/tours/BPO)
- [hub/tours/CLUBWPTG](https://smarter.poker/hub/tours/CLUBWPTG)
- [hub/tours/EASTERNPT](https://smarter.poker/hub/tours/EASTERNPT)
- [hub/tours/LODGE](https://smarter.poker/hub/tours/LODGE)
- [hub/tours/MONEYMAKER](https://smarter.poker/hub/tours/MONEYMAKER)
- [hub/tours/PSOPEN](https://smarter.poker/hub/tours/PSOPEN)
- [hub/tours/SEMINOLE](https://smarter.poker/hub/tours/SEMINOLE)
- [hub/tours/TCH](https://smarter.poker/hub/tours/TCH)
- [hub/tours/TPO](https://smarter.poker/hub/tours/TPO)
- [hub/tours/VENETIAN](https://smarter.poker/hub/tours/VENETIAN)
- [hub/tours/WPTPRIME](https://smarter.poker/hub/tours/WPTPRIME)
- [hub/tours/WTP](https://smarter.poker/hub/tours/WTP)
- [hub/tours/WYNN](https://smarter.poker/hub/tours/WYNN)
- [hub/training](https://smarter.poker/hub/training)
- [hub/training/icm-calculator](https://smarter.poker/hub/training/icm-calculator)
- [hub/training/equity-calculator](https://smarter.poker/hub/training/equity-calculator)
- [hub/training/challenges](https://smarter.poker/hub/training/challenges)
- [hub/training/leaderboard](https://smarter.poker/hub/training/leaderboard)
- [hub/training/tournaments](https://smarter.poker/hub/training/tournaments)
- [hub/training/hand-history-upload](https://smarter.poker/hub/training/hand-history-upload)
- [hub/training/jarvis](https://smarter.poker/hub/training/jarvis)
- [hub/training/solutions](https://smarter.poker/hub/training/solutions)
- [hub/training/autopilot](https://smarter.poker/hub/training/autopilot)
- [hub/training/coach-mode](https://smarter.poker/hub/training/coach-mode)
- [hub/training/community-leaderboard](https://smarter.poker/hub/training/community-leaderboard)
- [hub/training/custom-rake](https://smarter.poker/hub/training/custom-rake)
- [hub/training/custom-solve](https://smarter.poker/hub/training/custom-solve)
- [hub/training/daily-challenge](https://smarter.poker/hub/training/daily-challenge)
- [hub/training/drill-builder](https://smarter.poker/hub/training/drill-builder)
- [hub/training/famous-finals](https://smarter.poker/hub/training/famous-finals)
- [hub/training/final-table-sim](https://smarter.poker/hub/training/final-table-sim)
- [hub/training/flashcards](https://smarter.poker/hub/training/flashcards)
- [hub/training/focus-timer](https://smarter.poker/hub/training/focus-timer)
- [hub/training/gto-news](https://smarter.poker/hub/training/gto-news)
- [hub/training/gto-preloader](https://smarter.poker/hub/training/gto-preloader)
- [hub/training/hand-comparison](https://smarter.poker/hub/training/hand-comparison)
- [hub/training/hand-lab](https://smarter.poker/hub/training/hand-lab)
- [hub/training/icm-simulator](https://smarter.poker/hub/training/icm-simulator)
- [hub/training/multi-table](https://smarter.poker/hub/training/multi-table)
- [hub/training/multiway-preflop](https://smarter.poker/hub/training/multiway-preflop)
- [hub/training/position-mastery](https://smarter.poker/hub/training/position-mastery)
- [hub/training/preflop-charts](https://smarter.poker/hub/training/preflop-charts)
- [hub/training/qre-explorer](https://smarter.poker/hub/training/qre-explorer)
- [hub/training/quick-warmup](https://smarter.poker/hub/training/quick-warmup)
- [hub/training/quiz-builder](https://smarter.poker/hub/training/quiz-builder)
- [hub/training/rake-solutions](https://smarter.poker/hub/training/rake-solutions)
- [hub/training/range-builder](https://smarter.poker/hub/training/range-builder)
- [hub/training/risk-analyzer](https://smarter.poker/hub/training/risk-analyzer)
- [hub/training/scenario-demo](https://smarter.poker/hub/training/scenario-demo)
- [hub/training/session-warmup](https://smarter.poker/hub/training/session-warmup)
- [hub/training/short-deck-trainer](https://smarter.poker/hub/training/short-deck-trainer)
- [hub/training/skill-tree](https://smarter.poker/hub/training/skill-tree)
- [hub/training/spot-trainer](https://smarter.poker/hub/training/spot-trainer)
- [hub/training/study-group-finder](https://smarter.poker/hub/training/study-group-finder)
- [hub/training/tilt-guard](https://smarter.poker/hub/training/tilt-guard)
- [hub/training/tournament-prep](https://smarter.poker/hub/training/tournament-prep)
- [hub/training/training-feed](https://smarter.poker/hub/training/training-feed)
- [hub/training/weakness-scanner](https://smarter.poker/hub/training/weakness-scanner)
- [hub/video-library](https://smarter.poker/hub/video-library)
- [hub/video-library/channels](https://smarter.poker/hub/video-library/channels)
- [hub/video-library/players](https://smarter.poker/hub/video-library/players)
- [hub/video-library/players/andrew-neeme](https://smarter.poker/hub/video-library/players/andrew-neeme)
- [hub/video-library/players/brad-owen](https://smarter.poker/hub/video-library/players/brad-owen)
- [hub/video-library/players/chance-kornuth](https://smarter.poker/hub/video-library/players/chance-kornuth)
- [hub/video-library/players/daniel-negreanu](https://smarter.poker/hub/video-library/players/daniel-negreanu)
- [hub/video-library/players/doug-polk](https://smarter.poker/hub/video-library/players/doug-polk)
- [hub/video-library/players/garrett-adelstein](https://smarter.poker/hub/video-library/players/garrett-adelstein)
- [hub/video-library/players/jason-koon](https://smarter.poker/hub/video-library/players/jason-koon)
- [hub/video-library/players/lex-veldhuis](https://smarter.poker/hub/video-library/players/lex-veldhuis)
- [hub/video-library/players/phil-hellmuth](https://smarter.poker/hub/video-library/players/phil-hellmuth)
- [hub/video-library/players/phil-ivey](https://smarter.poker/hub/video-library/players/phil-ivey)
- [hub/video-library/players/tom-dwan](https://smarter.poker/hub/video-library/players/tom-dwan)
- [hub/commander](https://smarter.poker/hub/commander)
- [hub/commander/venues](https://smarter.poker/hub/commander/venues)
- [hub/commander/tournaments](https://smarter.poker/hub/commander/tournaments)
- [hub/commander/home-games](https://smarter.poker/hub/commander/home-games)
- [hub/commander/leagues](https://smarter.poker/hub/commander/leagues)
- [hub/commander/faq](https://smarter.poker/hub/commander/faq)
- [hub/commander/responsible-gaming](https://smarter.poker/hub/commander/responsible-gaming)
- [hub/home-games](https://smarter.poker/hub/home-games)
- [hub/home-games/in](https://smarter.poker/hub/home-games/in)
- [hub/home-games/near-me](https://smarter.poker/hub/home-games/near-me)
- [hub/home-games/the-midway-club](https://smarter.poker/hub/home-games/the-midway-club)
- [hub/home-games/in/il](https://smarter.poker/hub/home-games/in/il)
- [hub/home-games/in/il/oak-lawn](https://smarter.poker/hub/home-games/in/il/oak-lawn)
- [hub/home-games/saturday-night-poker-club](https://smarter.poker/hub/home-games/saturday-night-poker-club)
- [hub/home-games/in/nv](https://smarter.poker/hub/home-games/in/nv)
- [hub/home-games/in/nv/las-vegas](https://smarter.poker/hub/home-games/in/nv/las-vegas)
- [hub/trivia](https://smarter.poker/hub/trivia)
- [hub/trivia/endless](https://smarter.poker/hub/trivia/endless)
- [hub/trivia/survival-game](https://smarter.poker/hub/trivia/survival-game)
- [hub/trivia/time-attack](https://smarter.poker/hub/trivia/time-attack)
- [hub/trivia/mixed](https://smarter.poker/hub/trivia/mixed)
- [hub/trivia/leaderboard](https://smarter.poker/hub/trivia/leaderboard)
- [hub/personal-assistant](https://smarter.poker/hub/personal-assistant)
- [hub/personal-assistant/leaks](https://smarter.poker/hub/personal-assistant/leaks)
- [hub/personal-assistant/sandbox](https://smarter.poker/hub/personal-assistant/sandbox)
- [hub/preflop-charts](https://smarter.poker/hub/preflop-charts)
- [hub/preflop-charts/leaderboard](https://smarter.poker/hub/preflop-charts/leaderboard)
- [hub/preflop-charts/tutorial](https://smarter.poker/hub/preflop-charts/tutorial)
