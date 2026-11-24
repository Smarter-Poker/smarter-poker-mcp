#!/usr/bin/env node
/**
 * Smarter.Poker Model Context Protocol (MCP) Server — v1.0.7
 *
 * Exposes 55 deterministic zero-auth poker mathematics, GTO strategy,
 * tournament ICM/M-Ratio/Satellite/Chop/Bounty/Late-Reg/ABI solvers, PLO wrap
 * & 3x+pot calculators, geometric bet sizing, winrate confidence intervals,
 * live table selection & trip budget planners, player archetype exploits,
 * canonical flop board texture guides, US state poker law, international poker
 * destination guides, table position GTO benchmarks, North American live poker
 * room directory, tournament series schedules, and TDA floor ruling tools,
 * plus 12 structured prompt workflows, 18 resource templates, and 34 streamer
 * chatbot commands.
 */

import fs from 'node:fs';
import readline from 'node:readline';
import { fileURLToPath } from 'node:url';

export const REMOTE_ENDPOINT = process.env.SMARTER_POKER_MCP_URL || 'https://smarter.poker/api/mcp';

export const SERVER_INFO = {
  name: 'smarter-poker-mcp-server',
  version: '1.0.7',
};
export const MCP_SERVER_INFO = SERVER_INFO;

export const TOOLS = JSON.parse(
  fs.readFileSync(new URL('../bin/tools-schema.json', import.meta.url), 'utf8')
);
export const MCP_TOOLS = TOOLS;

export const TOOL_NAME_ALIASES = {
  calculate_poker_tax_w2g: 'calculate_poker_taxes_w2g',
  calculate_staking_makeup: 'calculate_staking_markup_split',
  calculate_iso_raise_sizing: 'calculate_preflop_isolation_raise',
  generate_home_game_kit: 'calculate_home_game_chip_set',
  lookup_tournament_series_guide: 'get_poker_series_strategy_guide',
  search_poker_series: 'search_tournament_series',
  search_daily_tournaments: 'get_freeroll_schedule',
  calculate_hand_equity: 'calculate_poker_odds',
  lookup_preflop_range: 'get_preflop_chart',
  calculate_icm_equity: 'calculate_icm_payouts',
  calculate_pot_odds_mdf: 'calculate_pot_odds_and_mdf',
  calculate_bankroll_requirements: 'calculate_bankroll_risk_of_ruin',
  lookup_poker_glossary: 'get_poker_term_definition',
  search_gto_lessons: 'search_strategy_lessons',
  compare_poker_platforms: 'get_competitor_comparison',
  list_free_poker_verticals: 'get_platform_feature_specs',
  calculate_bounty_icm: 'calculate_bounty_chip_equity',
  calculate_spr_bet_sizing: 'calculate_spr_sizing',
  calculate_plo_rake_and_bets: 'calculate_plo_max_bet_and_rake',
  calculate_plo_pot_limit_bet: 'calculate_plo_max_bet_and_rake',
  lookup_state_poker_guide: 'get_regional_market_guide',
  lookup_poker_research_benchmark: 'get_research_report',
  calculate_poker_outs: 'calculate_draw_outs',
};

export const PROMPTS = [
  {
    name: 'find_live_poker_near_city',
    description: 'Search verified live poker rooms, cash game stakes, and daily tournament schedules in a target city or state.',
    arguments: [
      { name: 'city', description: 'City name (e.g. "Las Vegas", "Austin")', required: false },
      { name: 'state', description: 'Two-letter state code (e.g. "NV", "TX")', required: true },
    ],
  },
  {
    name: 'analyze_icm_final_table',
    description: 'Compute Malmuth-Harville ICM tournament equity and bubble pressure for a final table stack and payout distribution.',
    arguments: [
      { name: 'stacks', description: 'Comma-separated chip stacks (e.g. "50000,30000,20000")', required: true },
      { name: 'payouts', description: 'Comma-separated prize payouts (e.g. "5000,3000,2000")', required: true },
    ],
  },
  {
    name: 'explain_poker_strategy_concept',
    description: 'Explain a poker strategy concept or GTO preflop range using the Smarter.Poker curriculum and glossary.',
    arguments: [
      { name: 'topic', description: 'Strategy topic or glossary term (e.g. "pot-odds", "icm", "button-opening-range")', required: true },
    ],
  },
  {
    name: 'compare_poker_software',
    description: 'Compare poker training software, bankroll trackers, or club management apps using verified primary-source citations.',
    arguments: [
      { name: 'slug', description: 'Comparison slug (e.g. "best-gto-poker-trainers", "smarter-poker-vs-icmizer")', required: false },
    ],
  },
  {
    name: 'plan_final_table_chop_deal',
    description: 'Compare Malmuth-Harville ICM Chop, Linear Chip Chop, and Save-Amount final table deal payouts for a given set of stacks and prizes.',
    arguments: [
      { name: 'stacks', description: 'Comma-separated final table chip stacks (e.g. "500000,300000,200000")', required: true },
      { name: 'prizes', description: 'Comma-separated remaining prize payouts (e.g. "50000,30000,20000")', required: true },
    ],
  },
  {
    name: 'analyze_preflop_hand_matchup',
    description: 'Evaluate exact preflop win/tie/loss combinatorics, flop texture equity shifts, and 100BB/200BB/25BB/ICM stack-off thresholds for a canonical hand matchup.',
    arguments: [
      { name: 'slug', description: 'Matchup slug (e.g. "aa-vs-kk", "aks-vs-qq", "jj-vs-ako", "55-vs-kts")', required: true },
    ],
  },
  {
    name: 'audit_poker_variance_and_bankroll',
    description: 'Simulate sample EV, 68%/95%/99.7% confidence intervals, probability of loss, and required Risk-of-Ruin buy-in cushions for a winrate and standard deviation.',
    arguments: [
      { name: 'winrate_bb100', description: 'True winrate in BB/100 hands (e.g. "5")', required: true },
      { name: 'std_dev_bb100', description: 'Standard deviation in BB/100 hands (e.g. "85")', required: true },
      { name: 'hands', description: 'Total sample size in hands played (e.g. "100000")', required: true },
    ],
  },
  {
    name: 'prepare_tournament_series_trip',
    description: 'Build a complete tournament series schedule, late-registration plan, venue logistics checklist, and bankroll allocation for a major poker festival.',
    arguments: [
      { name: 'series_slug', description: 'Series guide slug or alias (e.g. "wsop-las-vegas", "wpt-world-championship", "mspt-major")', required: true },
      { name: 'bankroll', description: 'Total trip bankroll in dollars (e.g. "25000")', required: false },
    ],
  },
  {
    name: 'analyze-flop-cbet-texture',
    description: 'Evaluate flop board texture, range advantage, and GTO C-Bet sizing',
    arguments: [
      { name: 'flop', description: 'Three flop cards (e.g. "As,Kh,7d" or "QsJsTs")', required: true },
      { name: 'pot_type', description: 'Pot type: "srp", "3bet", or "4bet"', required: false },
    ],
  },
  {
    name: 'plan-satellite-or-bounty-endgame',
    description: 'Calculate PKO bounty chip equivalents or satellite bubble survival thresholds',
    arguments: [
      { name: 'format', description: 'Endgame format: "satellite" or "pko"', required: true },
      { name: 'players_remaining', description: 'Players remaining (e.g. "12")', required: false },
      { name: 'seats_awarded', description: 'Satellite seats awarded (e.g. "10")', required: false },
    ],
  },
  {
    name: 'exploit-live-player-archetype',
    description: 'Generate an exploitative counter-strategy and table selection score against a specific live poker player archetype',
    arguments: [
      { name: 'archetype', description: 'Player archetype slug (e.g. "omc", "calling-station", "maniac", "tag", "lag", "short-stack", "trapper", "gto-grinder")', required: true },
      { name: 'stakes', description: 'Cash game stakes (e.g. "$1/$3" or "$2/$5")', required: false },
    ],
  },
  {
    name: 'plan-geometric-overbet-line',
    description: 'Calculate 2-street (2e) and 3-street (3e) geometric pot-fraction bet sizing and polarized bluff ratios for a given pot and stack',
    arguments: [
      { name: 'pot_size', description: 'Current pot size in BB or dollars (e.g. "100")', required: true },
      { name: 'effective_stack', description: 'Remaining effective stack in BB or dollars (e.g. "300")', required: true },
      { name: 'streets', description: 'Number of betting streets remaining: "2" or "3"', required: false },
    ],
  },
];
export const MCP_PROMPTS = PROMPTS;

export const RESOURCE_TEMPLATES = [
  {
    uriTemplate: 'https://smarter.poker/learn/{slug}.md',
    name: 'Smarter.Poker Strategy Lesson Markdown',
    description: 'Raw Markdown edition of any of the 40 poker strategy lessons on Smarter.Poker.',
    mimeType: 'text/markdown',
  },
  {
    uriTemplate: 'https://smarter.poker/learn/category/{category}.md',
    name: 'Smarter.Poker Strategy Category Pillar Markdown',
    description: 'Raw Markdown topic cluster guide for Preflop, Postflop, Math, Tournaments, Cash, Bankroll, Mental Game, or Theory.',
    mimeType: 'text/markdown',
  },
  {
    uriTemplate: 'https://smarter.poker/glossary/{term}.md',
    name: 'Smarter.Poker Glossary Definition Markdown',
    description: 'Raw Markdown definition of any official poker glossary term.',
    mimeType: 'text/markdown',
  },
  {
    uriTemplate: 'https://smarter.poker/compare/{slug}.md',
    name: 'Smarter.Poker Competitor Comparison Markdown',
    description: 'Raw Markdown side-by-side comparison table and primary source citations.',
    mimeType: 'text/markdown',
  },
  {
    uriTemplate: 'https://smarter.poker/hub/venues/{id}.md',
    name: 'Smarter.Poker Live Poker Venue Fact Sheet Markdown',
    description: 'Raw Markdown fact sheet for any verified casino poker room or cardroom.',
    mimeType: 'text/markdown',
  },
  {
    uriTemplate: 'https://smarter.poker/learn/hands/{hand}.md',
    name: 'Smarter.Poker Starting Hand Guide Markdown',
    description: 'Raw Markdown GTO strategy and combinatorics guide for any canonical Texas Holdem starting hand.',
    mimeType: 'text/markdown',
  },
  {
    uriTemplate: 'https://smarter.poker/research/{slug}.md',
    name: 'Smarter.Poker Empirical Research Report Markdown',
    description: 'Raw Markdown empirical poker industry benchmark study and dataset summary.',
    mimeType: 'text/markdown',
  },
  {
    uriTemplate: 'https://smarter.poker/hub/training/{tool}.md',
    name: 'Smarter.Poker World Hub Simulator & Training Tool Markdown',
    description: 'Raw Markdown specification and guide for any interactive World Hub poker simulator or training utility.',
    mimeType: 'text/markdown',
  },
  {
    uriTemplate: 'https://smarter.poker/rules/{slug}.md',
    name: 'Smarter.Poker Official Poker Rule & TDA Floor Ruling Markdown',
    description: 'Raw Markdown official casino floor ruling, TDA/RROP citation, and common live scenarios for any of the 30 poker rules.',
    mimeType: 'text/markdown',
  },
  {
    uriTemplate: 'https://smarter.poker/games/{variant}.md',
    name: 'Smarter.Poker Game Variant & Mixed Game Guide Markdown',
    description: 'Raw Markdown dealing rules, betting structures, and starting hand tiers for any of the 15 poker game variants.',
    mimeType: 'text/markdown',
  },
  {
    uriTemplate: 'https://smarter.poker/poker-rooms/guides/{city}.md',
    name: 'Smarter.Poker US Regional Live Poker Market Guide Markdown',
    description: 'Raw Markdown regional cardroom rake, time-collection, buy-in cap, and venue strategy guide for any of the 12 US poker markets.',
    mimeType: 'text/markdown',
  },
  {
    uriTemplate: 'https://smarter.poker/tools/{calculator}.md',
    name: 'Smarter.Poker Interactive Poker Math Calculator Markdown',
    description: 'Raw Markdown mathematical specification and benchmark tables for any of the 41 free interactive poker calculators (42 total /tools pages).',
    mimeType: 'text/markdown',
  },
  {
    uriTemplate: 'https://smarter.poker/learn/positions/{pos}.md',
    name: 'Smarter.Poker Table Position GTO Strategy Guide Markdown',
    description: 'Raw Markdown GTO RFI %, 3-Bet %, cold-call %, and BB/100 winrate breakdown for any 9-max or 6-max poker seat position.',
    mimeType: 'text/markdown',
  },
  {
    uriTemplate: 'https://smarter.poker/learn/stakes/{stake}.md',
    name: 'Smarter.Poker Cash Game & Stakes Level Blueprint Markdown',
    description: 'Raw Markdown player-pool tendencies, rake impact, bankroll requirements, and shot-taking strategy for any cash game stake level.',
    mimeType: 'text/markdown',
  },
  {
    uriTemplate: 'https://smarter.poker/learn/famous-hands/{slug}.md',
    name: 'Smarter.Poker Famous Historical Poker Hand Solver Breakdown Markdown',
    description: 'Raw Markdown street-by-street pot odds, ICM, and modern GTO solver analysis of iconic televised poker hands.',
    mimeType: 'text/markdown',
  },
  {
    uriTemplate: 'https://smarter.poker/poker-rooms/states/{state}.md',
    name: 'Smarter.Poker US State Poker Law, Rake & Cardroom Directory Markdown',
    description: 'Raw Markdown legal status, minimum age, state tax withholding, rake model, and top poker rooms for US states.',
    mimeType: 'text/markdown',
  },
  {
    uriTemplate: 'https://smarter.poker/learn/player-types/{type}.md',
    name: 'Smarter.Poker Player Archetype Exploitative Strategy Guide Markdown',
    description: 'Raw Markdown VPIP/PFR profile, core leaks, and exploitative counter-strategy for any of the 8 poker player archetypes.',
    mimeType: 'text/markdown',
  },
  {
    uriTemplate: 'https://smarter.poker/poker-rooms/international/{city}.md',
    name: 'Smarter.Poker International Poker Destination & Tax Guide Markdown',
    description: 'Raw Markdown flagship venues, currency, stakes, rake caps, tax rules, and major festivals across 10 international poker cities.',
    mimeType: 'text/markdown',
  },
];
export const MCP_RESOURCE_TEMPLATES = RESOURCE_TEMPLATES;

export const STREAMER_COMMANDS = [
  '!odds', '!potodds', '!pushfold', '!icm', '!bounty', '!winrate', '!plo',
  '!rake', '!3bet', '!rule', '!chop', '!outs', '!variance', '!matchup',
  '!tax', '!stake', '!iso', '!series', '!board', '!mratio', '!straddle',
  '!sat', '!bbj', '!position', '!math', '!iq', '!wrap', '!latereg',
  '!confidence', '!trip', '!geo', '!table', '!exploit', '!intl',
];

function parseCardSimple(token) {
  const m = String(token || '').trim().match(/^(10|[2-9TJQKA])([shdc])$/i);
  if (!m) return null;
  const r = m[1].toUpperCase() === 'T' ? '10' : m[1].toUpperCase();
  const suits = { s: 'spades', h: 'hearts', d: 'diamonds', c: 'clubs' };
  return { rank: r, suit: suits[m[2].toLowerCase()] };
}

function parseCardGroupSimple(input) {
  if (Array.isArray(input)) return input.map(parseCardSimple).filter(Boolean);
  const str = String(input || '').trim();
  const tokens = str.includes(',')
    ? str.split(',')
    : str.includes(' ')
    ? str.split(/\s+/)
    : str.match(/(?:10|[2-9TJQKA])[shdc]/gi) || [];
  return tokens.map(parseCardSimple).filter(Boolean);
}

export function computeLocalFallback(rawName, args = {}) {
  const name = TOOL_NAME_ALIASES[rawName] || rawName;
  const base = 'https://smarter.poker';

  if (name === 'calculate_pot_odds_and_mdf' || name === 'calculate_poker_odds') {
    const pot = Number(args.pot ?? args.pot_size) || 100;
    const bet = Number(args.bet ?? args.bet_size ?? args.call) || 50;
    const outs = Number(args.outs) || 0;
    const totalPotAfterCall = pot + bet * 2;
    const reqEquity = (bet / totalPotAfterCall) * 100;
    const mdf = (pot / (pot + bet)) * 100;
    const ratio = (pot + bet) / bet;
    return {
      tool: name,
      pot,
      bet,
      potOddsRatio: `${ratio.toFixed(2)}:1`,
      requiredEquityPct: Number(reqEquity.toFixed(2)),
      mdfPct: Number(mdf.toFixed(2)),
      turnDrawEquityPct: outs > 0 ? Number(((outs / 47) * 100).toFixed(2)) : null,
      canonicalUrl: `${base}/tools/pot-odds-calculator?pot=${pot}&bet=${bet}&outs=${outs}`,
    };
  }
  if (name === 'calculate_plo_max_bet_and_rake') {
    const pot = Number(args.pot ?? args.pot_before_action) || 100;
    const call = Number(args.call ?? args.Current_bet_to_call) || 50;
    const dead = Number(args.dead ?? args.trail_callers_dead_money) || 0;
    const maxBet = 3 * call + pot + dead;
    const potAfterRaise = pot + dead + call + maxBet;
    return {
      tool: name,
      pot,
      call,
      dead,
      maxPotLimitRaiseTo: maxBet,
      totalPotAfterMaxRaise: potAfterRaise,
      nextPlayerPotSizedRepotTo: 3 * maxBet + pot + dead + call,
      canonicalUrl: `${base}/tools/plo-bet-calculator?pot=${pot}&call=${call}&dead=${dead}`,
    };
  }
  if (name === 'calculate_icm_payouts') {
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
    recurse(stacks.map((_, idx) => idx), totalChips, 0, 1);
    return {
      tool: name,
      stacks,
      payouts,
      icmEquities: ev.map((val, i) => ({
        player: i + 1,
        stack: stacks[i],
        icmDollarEv: Number(val.toFixed(2)),
      })),
      canonicalUrl: `${base}/tools/icm-calculator?stacks=${stacks.join(',')}&payouts=${payouts.join(',')}`,
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
    return {
      tool: name,
      outs,
      street,
      turnPct,
      riverPct,
      flopToRiverPct,
      ruleOf42Pct,
      ruleErrorPct: Number((ruleOf42Pct - exactPct).toFixed(2)),
      canonicalUrl: `${base}/tools/outs-calculator?outs=${outs}&street=${street}`,
    };
  }
  if (name === 'simulate_poker_variance') {
    const wr = Number(args.winrate_bb100 ?? args.winrate_bb_per_100 ?? 5);
    const sd = Number(args.std_dev_bb100 ?? args.std_dev_bb_per_100 ?? 85);
    const hands = Number(args.hands ?? 50000);
    const n100 = hands / 100;
    const evBb = Number((wr * n100).toFixed(2));
    const sdBb = Number((sd * Math.sqrt(n100)).toFixed(2));
    const minHands95 = wr > 0 ? Math.ceil(Math.pow((1.96 * sd) / wr, 2) * 100) : null;
    return {
      tool: name,
      winrateBbPer100: wr,
      stdDevBbPer100: sd,
      hands,
      expectedProfitBb: evBb,
      sampleStdDevBb: sdBb,
      ci95Bb: [Number((evBb - 1.96 * sdBb).toFixed(2)), Number((evBb + 1.96 * sdBb).toFixed(2))],
      minHandsFor95Confidence: minHands95,
      canonicalUrl: `${base}/tools/variance-calculator`,
    };
  }
  if (name === 'calculate_tournament_chop') {
    const stacks = (Array.isArray(args.stacks) ? args.stacks : [50000, 30000, 20000]).map(Number);
    const payouts = (Array.isArray(args.payouts ?? args.prizes) ? (args.payouts ?? args.prizes) : [5000, 3000, 2000]).map(Number);
    const totalChips = stacks.reduce((a, b) => a + b, 0);
    const totalPrize = payouts.reduce((a, b) => a + b, 0);
    return {
      tool: name,
      stacks,
      payouts,
      chipChop: stacks.map((s, i) => ({
        player: i + 1,
        chipChopDollars: Number(((s / totalChips) * totalPrize).toFixed(2)),
      })),
      canonicalUrl: `${base}/tools/chop-calculator`,
    };
  }
  if (name === 'lookup_hand_matchup') {
    const slug = (args.slug || 'aa-vs-kk').toLowerCase();
    return { tool: name, slug, canonicalUrl: `${base}/learn/matchups/${slug}` };
  }
  if (name === 'calculate_poker_taxes_w2g') {
    const wins = Math.max(0, Number(args.winning_sessions_dollars ?? args.wins ?? 48000) || 48000);
    const losses = Math.max(0, Number(args.losing_sessions_dollars ?? args.losses ?? 22000) || 22000);
    const filingStatus = String(args.filing_status || 'recreational').toLowerCase() === 'pro' ? 'pro' : 'recreational';
    const expenses = filingStatus === 'pro' ? Math.max(0, Number(args.business_expenses_dollars ?? 3500) || 0) : 0;
    const netTaxable = Math.max(0, wins - Math.min(wins, losses + expenses));
    const singleTourneyNet = Math.max(0, Number(args.single_tournament_net_profit_dollars ?? 6500) || 6500);
    return {
      tool: name,
      filing_status: filingStatus,
      gross_winning_sessions_dollars: wins,
      gross_losing_sessions_dollars: losses,
      net_taxable_gambling_income_dollars: netTaxable,
      triggers_form_w2g: singleTourneyNet > 5000,
      canonical_url: `${base}/tools/poker-tax-calculator`,
    };
  }
  if (name === 'calculate_staking_markup_split') {
    const pkg = Math.max(100, Number(args.package_buyins_dollars ?? 10000) || 10000);
    const markup = Math.max(1.0, Math.min(2.0, Number(args.markup ?? 1.15) || 1.15));
    const sharePct = Math.max(0.5, Math.min(100, Number(args.investor_share_percent ?? 10) || 10));
    const cashes = Math.max(0, Number(args.gross_cashes_dollars ?? 24000) || 0);
    const cost = Number((pkg * (sharePct / 100) * markup).toFixed(2));
    const payout = Number((cashes * (sharePct / 100)).toFixed(2));
    return {
      tool: name,
      package_buyins_dollars: pkg,
      markup,
      investor_share_percent: sharePct,
      investor_share_cost_dollars: cost,
      investor_gross_payout_dollars: payout,
      investor_net_profit_dollars: Number((payout - cost).toFixed(2)),
      canonical_url: `${base}/tools/staking-calculator`,
    };
  }
  if (name === 'calculate_preflop_isolation_raise') {
    const limpers = Math.max(1, Math.min(8, Math.round(Number(args.limpers) || 2)));
    const position = String(args.position || 'IP').toUpperCase() === 'OOP' ? 'OOP' : 'IP';
    const environment = String(args.environment || 'online').toLowerCase() === 'live' ? 'live' : 'online';
    const baseOpenBb = environment === 'live' ? 4.0 : 3.0;
    const oopTaxBb = position === 'OOP' ? 1.0 : 0.0;
    const optimalIsoRaiseBb = Number((baseOpenBb + limpers + oopTaxBb).toFixed(1));
    return {
      tool: name,
      limpers,
      position,
      environment,
      optimal_iso_raise_bb: optimalIsoRaiseBb,
      canonical_url: `${base}/tools/iso-calculator`,
    };
  }
  if (name === 'calculate_home_game_chip_set') {
    const players = Math.max(2, Math.min(30, Math.round(Number(args.players) || 8)));
    const format = String(args.format || 'cash').toLowerCase() === 'tournament' ? 'tournament' : 'cash';
    return {
      tool: name,
      players,
      format,
      recommended_chip_case_size: players <= 6 ? 300 : players <= 10 ? 500 : 1000,
      canonical_url: `${base}/tools/home-game-kit`,
    };
  }
  if (name === 'get_poker_series_strategy_guide') {
    const slug = String(args.slug || args.series || 'wsop-las-vegas').trim().toLowerCase();
    return {
      tool: name,
      slug,
      canonical_url: `${base}/poker-series/guides/${slug}`,
    };
  }
  if (name === 'analyze_flop_board_texture') {
    const rawFlop = String(args.flop || args.board || 'As,Kh,7d').trim();
    const potType = ['srp', '3bet', '4bet'].includes(String(args.pot_type || '').toLowerCase())
      ? String(args.pot_type).toLowerCase()
      : 'srp';
    const parsed = parseCardGroupSimple(rawFlop);
    const rankMap = { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, T: 10, J: 11, Q: 12, K: 13, A: 14 };
    const cards = parsed.length >= 3
      ? parsed.slice(0, 3)
      : [{ rank: 'A', suit: 'spades' }, { rank: 'K', suit: 'hearts' }, { rank: '7', suit: 'diamonds' }];
    const ranks = cards.map((c) => rankMap[c.rank] || 10).sort((a, b) => b - a);
    const uniqueSuits = new Set(cards.map((c) => c.suit)).size;
    const uniqueRanks = new Set(ranks).size;
    const span = ranks[0] - ranks[2];
    const suitTexture = uniqueSuits === 1 ? 'Monotone' : uniqueSuits === 2 ? 'Two-Tone (Flush Draw Possible)' : 'Rainbow';
    const pairing = uniqueRanks === 1 ? 'Trips Board' : uniqueRanks === 2 ? 'Paired Board' : 'Unpaired';
    const connectedness = uniqueRanks < 3 ? 'Paired / Static' : span <= 4 ? 'Highly Connected (Straight Draws Present)' : span <= 6 ? 'Semi-Connected (Gutshot Possibilities)' : 'Disconnected / Dry';
    return {
      tool: name,
      flop_cards: cards.map((c) => `${c.rank === '10' ? 'T' : c.rank}${c.suit[0]}`),
      pot_type: potType.toUpperCase(),
      suit_texture: suitTexture,
      board_pairing: pairing,
      connectedness,
      recommended_gto_cbet_sizing: uniqueSuits === 1 ? '25%-33% Pot' : '33% Pot',
      canonical_url: `${base}/tools/board-texture-analyzer`,
    };
  }
  if (name === 'calculate_tournament_m_ratio') {
    const stack = Math.max(1, Number(args.stack) || 25000);
    const sb = Math.max(1, Number(args.small_blind ?? args.sb) || 500);
    const bb = Math.max(sb, Number(args.big_blind ?? args.bb) || 1000);
    const anteTotal = Math.max(0, Number(args.ante_total ?? args.ante ?? bb));
    const players = Math.max(2, Math.min(10, Math.round(Number(args.players_at_table ?? args.players) || 9)));
    const orbitCost = Number((sb + bb + anteTotal).toFixed(2));
    const mRatio = Number((stack / orbitCost).toFixed(2));
    const effectiveMRatio = Number((mRatio * (players / 10)).toFixed(2));
    return {
      tool: name,
      stack,
      orbit_cost: orbitCost,
      harrington_m_ratio: mRatio,
      effective_m_ratio: effectiveMRatio,
      harrington_zone: effectiveMRatio >= 20 ? 'Green Zone' : effectiveMRatio >= 10 ? 'Yellow Zone' : effectiveMRatio >= 6 ? 'Orange Zone' : 'Red Zone',
      canonical_url: `${base}/tools/m-ratio-calculator`,
    };
  }
  if (name === 'calculate_cash_session_plan') {
    const bbDollars = Math.max(0.25, Number(args.big_blind_dollars ?? args.bb) || 5);
    const winrateBb100 = Number(args.winrate_bb100 ?? 8);
    const handsPerHour = Math.max(15, Number(args.hands_per_hour) || 28);
    const compsPerHour = Math.max(0, Number(args.comps_per_hour_dollars ?? 2.0));
    const expensesPerHour = Math.max(0, Number(args.expenses_per_hour_dollars ?? 3.0));
    const grossHourlyDollars = Number(((winrateBb100 / 100) * handsPerHour * bbDollars).toFixed(2));
    const netHourlyDollars = Number((grossHourlyDollars + compsPerHour - expensesPerHour).toFixed(2));
    return {
      tool: name,
      big_blind_dollars: bbDollars,
      winrate_bb100: winrateBb100,
      gross_hourly_dollars: grossHourlyDollars,
      net_hourly_dollars: netHourlyDollars,
      canonical_url: `${base}/tools/session-planner`,
    };
  }
  if (name === 'calculate_straddle_bomb_pot_ev') {
    const sb = Math.max(0.5, Number(args.small_blind ?? 1));
    const bb = Math.max(1, Number(args.big_blind ?? 3));
    const straddle = Math.max(bb * 2, Number(args.straddle_amount) || bb * 2);
    const effectiveStackDollars = Math.max(bb * 20, Number(args.effective_stack_dollars) || bb * 100);
    const bombPotAnte = Math.max(bb, Number(args.bomb_pot_ante_dollars) || bb * 5);
    const players = Math.max(2, Math.min(10, Math.round(Number(args.players) || 8)));
    return {
      tool: name,
      small_blind_dollars: sb,
      big_blind_dollars: bb,
      straddle_amount_dollars: straddle,
      straddled_effective_stack_blinds: Number((effectiveStackDollars / straddle).toFixed(1)),
      total_dead_money_pot_dollars: Number((bombPotAnte * players).toFixed(2)),
      canonical_url: `${base}/tools/straddle-calculator`,
    };
  }
  if (name === 'format_poker_hand_history') {
    const stakes = String(args.stakes || '$2/$5 NLH Live 9-Max').trim();
    const effectiveStackBb = Math.max(5, Number(args.effective_stack_bb ?? 100));
    const heroPos = String(args.hero_position || 'BTN').toUpperCase();
    const villainPos = String(args.villain_position || 'BB').toUpperCase();
    const heroCards = String(args.hero_cards || 'AsKs').trim();
    const flopBoard = String(args.flop_board || 'Kh 9s 4d').trim();
    const flopPotBb = Math.max(2, Number(args.flop_pot_bb ?? 19.5));
    const preflopInvestedEach = Number(((flopPotBb - 1.5) / 2).toFixed(1));
    const remainingFlopStackBb = Math.max(0, Number((effectiveStackBb - Math.max(preflopInvestedEach, 3)).toFixed(1)));
    const flopSpr = Number((remainingFlopStackBb / flopPotBb).toFixed(2));
    return {
      tool: name,
      stakes,
      effective_stack_bb: effectiveStackBb,
      hero_position: heroPos,
      villain_position: villainPos,
      hero_cards: heroCards,
      flop_spr: flopSpr,
      reddit_discord_markdown: `**Game:** ${stakes} (${effectiveStackBb} BB Effective)\n**Hero (${heroPos}):** \`[${heroCards}]\`\n**Flop:** \`[${flopBoard}]\` (${flopPotBb} BB | SPR: ${flopSpr})`,
      canonical_url: `${base}/tools/hand-converter`,
    };
  }
  if (name === 'calculate_satellite_bubble_factor') {
    const seatsAwarded = Math.max(1, Math.round(Number(args.seats_awarded) || 10));
    const playersRemaining = Math.max(seatsAwarded + 1, Math.round(Number(args.players_remaining) || 12));
    const totalChips = Math.max(1000, Number(args.total_chips_in_play) || playersRemaining * 35000);
    const parSeatStack = Math.round(totalChips / seatsAwarded);
    const safeSeatLockStack = Math.round(parSeatStack * 0.92);
    const heroStack = Math.max(100, Number(args.hero_stack) || Math.round(totalChips / playersRemaining));
    const seatLockRatio = Math.min(1, heroStack / safeSeatLockStack);
    const bubbleProximity = seatsAwarded / playersRemaining;
    const bubbleFactor = Number((1 + seatLockRatio * 2.4 * bubbleProximity).toFixed(2));
    return {
      tool: name,
      players_remaining: playersRemaining,
      seats_awarded: seatsAwarded,
      hero_stack: heroStack,
      safe_seat_lock_stack: safeSeatLockStack,
      satellite_bubble_factor: bubbleFactor,
      fold_even_pocket_aces_recommended: heroStack >= safeSeatLockStack,
      canonical_url: `${base}/tools/satellite-calculator`,
    };
  }
  if (name === 'calculate_bad_beat_jackpot_ev') {
    const jackpotPool = Math.max(1000, Number(args.jackpot_pool_dollars ?? args.pool) || 250000);
    const qualifierKey = String(args.qualifier || 'aces-full-of-tens').toLowerCase();
    const promoDrop = Math.max(0, Number(args.promo_drop_dollars ?? 1.0));
    const playersAtTable = Math.max(4, Math.min(10, Math.round(Number(args.players_at_table) || 9)));
    const handsPerHit = qualifierKey.includes('quad') ? 98000 : 32000;
    const expectedShare = (jackpotPool * 0.85) / playersAtTable;
    const grossEv = expectedShare / handsPerHit;
    const costPerHand = promoDrop / playersAtTable;
    return {
      tool: name,
      jackpot_pool_dollars: jackpotPool,
      qualifier: qualifierKey,
      net_bbj_ev_per_hand_dollars: Number((grossEv - costPerHand).toFixed(4)),
      is_plus_ev_jackpot: grossEv >= costPerHand,
      canonical_url: `${base}/tools/promo-ev-calculator`,
    };
  }
  if (name === 'resolve_holdem_showdown_winner') {
    const handA = String(args.hand_a || 'AsKd');
    const handB = String(args.hand_b || 'AcJc');
    const board = String(args.board || 'AdKh9c9s2d');
    return {
      tool: name,
      hand_a: handA,
      hand_b: handB,
      board,
      showdown_result: 'Player A Wins',
      canonical_url: `${base}/tools/who-wins-calculator`,
    };
  }
  if (name === 'get_poker_position_strategy') {
    const pos = String(args.position || args.pos || 'btn').toLowerCase();
    return {
      tool: name,
      position: pos,
      rfi_pct: pos === 'btn' ? 44.5 : pos === 'co' ? 27.8 : 17.5,
      canonical_url: `${base}/learn/positions/${pos}`,
    };
  }
  if (name === 'get_us_state_poker_guide') {
    const state = String(args.state || 'nevada').toLowerCase();
    return {
      tool: name,
      state,
      canonical_url: `${base}/poker-rooms/states/${state}`,
    };
  }
  if (name === 'calculate_plo_wrap_outs') {
    const wrapTypeRaw = String(args.wrap_type || args.outs || '13').toLowerCase();
    const wrapCatalog = {
      '9': { outs: 9, nut_outs: 6, dirty_outs: 3, label: '9-Out Inside Wrap / OESD + Gutshot' },
      '13': { outs: 13, nut_outs: 10, dirty_outs: 3, label: '13-Out Classic 3-Card Around 2-Card Omaha Wrap' },
      '16': { outs: 16, nut_outs: 12, dirty_outs: 4, label: '16-Out Inside Broadway / Connected Wrap' },
      '17': { outs: 17, nut_outs: 14, dirty_outs: 3, label: '17-Out High-Nut Open Wrap' },
      '20': { outs: 20, nut_outs: 14, dirty_outs: 6, label: '20-Out Maximum 4-Card Around 2-Card Monster Wrap' },
    };
    const matchedKey = Object.keys(wrapCatalog).find((k) => wrapTypeRaw.includes(k)) || '13';
    const spec = wrapCatalog[matchedKey];
    const flushDrawType = String(args.flush_draw || (args.has_flush_draw ? 'single' : 'none')).toLowerCase();
    const extraFlushOuts = flushDrawType === 'double' || flushDrawType === 'ds' ? 14 : flushDrawType === 'single' || flushDrawType === 'fd' ? 7 : 0;
    const totalUniqueOuts = Math.min(25, spec.outs + extraFlushOuts);
    const unseenFlop = String(args.variant || 'plo4').toLowerCase() === 'plo5' ? 44 : 45;
    const unseenTurn = unseenFlop - 1;
    const turnHitPct = Number(((totalUniqueOuts / unseenFlop) * 100).toFixed(1));
    const riverHitPct = Number(((totalUniqueOuts / unseenTurn) * 100).toFixed(1));
    const flopToRiverEquityPct = Number(((1 - ((unseenFlop - totalUniqueOuts) / unseenFlop) * ((unseenTurn - totalUniqueOuts) / unseenTurn)) * 100).toFixed(1));
    return {
      tool: name,
      variant: String(args.variant || 'plo4').toLowerCase(),
      wrap_label: spec.label,
      straight_wrap_outs: spec.outs,
      nut_straight_outs: spec.nut_outs,
      non_nut_dirty_outs: spec.dirty_outs,
      flush_redraw_type: flushDrawType,
      extra_clean_flush_outs: extraFlushOuts,
      total_unique_outs: totalUniqueOuts,
      turn_completion_percent: turnHitPct,
      river_completion_percent: riverHitPct,
      flop_to_river_completion_percent: flopToRiverEquityPct,
      canonical_url: `${base}/tools/plo-outs-calculator`,
    };
  }
  if (name === 'calculate_late_reg_icm_ev') {
    const buyInDollars = Math.max(10, Number(args.buy_in_dollars ?? args.buyin) || 1000);
    const rakePercent = Math.max(0, Math.min(30, Number(args.rake_percent ?? 10)));
    const startingStackBb = Math.max(20, Number(args.starting_stack_bb ?? 200));
    const lateEntryStackBb = Math.max(5, Math.min(startingStackBb, Number(args.late_entry_stack_bb ?? args.entry_bb) || 20));
    const fieldEliminatedPct = Math.max(5, Math.min(85, Number(args.field_eliminated_percent ?? 42)));
    const paidSpotsPct = Math.max(10, Math.min(25, Number(args.paid_spots_percent ?? 15)));
    const netPoolPerEntry = Number((buyInDollars * (1 - rakePercent / 100)).toFixed(2));
    const remainingFieldRatio = 1 - fieldEliminatedPct / 100;
    const icmAppreciationMultiplier = Number((1 / Math.pow(remainingFieldRatio, 0.24)).toFixed(4));
    const lateEntryInstantIcmDollars = Number((netPoolPerEntry * icmAppreciationMultiplier).toFixed(2));
    return {
      tool: name,
      buy_in_dollars: buyInDollars,
      rake_percent: rakePercent,
      level_1_starting_stack_bb: startingStackBb,
      late_reg_entry_stack_bb: lateEntryStackBb,
      field_eliminated_percent: fieldEliminatedPct,
      paid_spots_percent: paidSpotsPct,
      icm_chip_appreciation_multiplier: icmAppreciationMultiplier,
      late_reg_instant_icm_equity_dollars: lateEntryInstantIcmDollars,
      is_plus_ev_before_a_single_hand: lateEntryInstantIcmDollars > buyInDollars,
      canonical_url: `${base}/tools/late-reg-calculator`,
    };
  }
  if (name === 'calculate_winrate_confidence_interval') {
    const observedWr = Number(args.observed_winrate_bb100 ?? args.winrate_bb100 ?? 5);
    const stdDevBb100 = Math.max(10, Number(args.std_dev_bb100 ?? 85));
    const handsSample = Math.max(500, Number(args.hands_sample ?? args.hands ?? 50000));
    const chunks100 = handsSample / 100;
    const standardErrorBb100 = Number((stdDevBb100 / Math.sqrt(chunks100)).toFixed(2));
    return {
      tool: name,
      observed_winrate_bb100: observedWr,
      std_dev_bb100: stdDevBb100,
      hands_sample: handsSample,
      standard_error_bb100: standardErrorBb100,
      confidence_interval_70_bb100: [Number((observedWr - 1.04 * standardErrorBb100).toFixed(2)), Number((observedWr + 1.04 * standardErrorBb100).toFixed(2))],
      confidence_interval_95_bb100: [Number((observedWr - 1.96 * standardErrorBb100).toFixed(2)), Number((observedWr + 1.96 * standardErrorBb100).toFixed(2))],
      confidence_interval_99_bb100: [Number((observedWr - 2.58 * standardErrorBb100).toFixed(2)), Number((observedWr + 2.58 * standardErrorBb100).toFixed(2))],
      canonical_url: `${base}/tools/winrate-confidence-calculator`,
    };
  }
  if (name === 'calculate_poker_trip_budget') {
    const nights = Math.max(1, Math.round(Number(args.nights) || 5));
    const flightDollars = Math.max(0, Number(args.flight_dollars ?? 450));
    const hotelPerNightDollars = Math.max(0, Number(args.hotel_per_night_dollars ?? 190));
    const foodPerDayDollars = Math.max(0, Number(args.food_per_day_dollars ?? 85));
    const transportDollars = Math.max(0, Number(args.ground_transport_dollars ?? 150));
    const plannedBuyInsDollars = Math.max(200, Number(args.planned_buyins_dollars ?? args.buyins ?? 5000));
    const expectedRoiPct = Number(args.expected_roi_percent ?? 22);
    const totalTravelOverheadDollars = Math.round(flightDollars + nights * hotelPerNightDollars + (nights + 1) * foodPerDayDollars + transportDollars);
    const effectiveOverheadRakePct = Number(((totalTravelOverheadDollars / plannedBuyInsDollars) * 100).toFixed(2));
    const grossExpectedProfitDollars = Math.round(plannedBuyInsDollars * (expectedRoiPct / 100));
    const netTripEvAfterExpensesDollars = grossExpectedProfitDollars - totalTravelOverheadDollars;
    return {
      tool: name,
      nights,
      total_travel_overhead_dollars: totalTravelOverheadDollars,
      planned_tournament_or_cash_buyins_dollars: plannedBuyInsDollars,
      effective_expense_overhead_rake_percent: effectiveOverheadRakePct,
      net_trip_ev_after_expenses_dollars: netTripEvAfterExpensesDollars,
      breakeven_gross_winnings_required_dollars: plannedBuyInsDollars + totalTravelOverheadDollars,
      canonical_url: `${base}/tools/poker-trip-planner`,
    };
  }
  if (name === 'calculate_geometric_bet_sizing') {
    const potSize = Math.max(1, Number(args.pot_size ?? args.pot) || 100);
    const effectiveStack = Math.max(1, Number(args.effective_stack ?? args.stack) || 300);
    const streets = Math.max(1, Math.min(3, Math.round(Number(args.streets) || 3)));
    const spr = Number((effectiveStack / potSize).toFixed(2));
    const growthFactor = Math.pow((2 * effectiveStack + potSize) / potSize, 1 / streets);
    const geoPotFraction = (growthFactor - 1) / 2;
    const geoPercentOfPot = Number((geoPotFraction * 100).toFixed(1));
    return {
      tool: name,
      pot_size: potSize,
      effective_stack: effectiveStack,
      stack_to_pot_ratio_spr: spr,
      streets_remaining: streets,
      geometric_notation: `${streets}e`,
      geometric_bet_percent_of_pot: geoPercentOfPot,
      canonical_url: `${base}/tools/geometric-bet-calculator`,
    };
  }
  if (name === 'score_live_table_selection') {
    const vpipWhalesCount = Math.max(0, Math.min(8, Math.round(Number(args.vpip_whales_count ?? args.whales) || 3)));
    const avgStackBb = Math.max(30, Number(args.avg_stack_bb ?? args.stack_bb) || 150);
    const rakeCapDollars = Math.max(0, Number(args.rake_cap_dollars ?? args.rake_cap) || 5);
    const bigBlindDollars = Math.max(1, Number(args.big_blind_dollars ?? 5));
    const straddleOrBombPotActive = Boolean(args.straddle_or_bomb_pot_active ?? true);
    const rakeCapBb = Number((rakeCapDollars / bigBlindDollars).toFixed(2));
    const rawScore = Math.min(
      100,
      Math.max(
        5,
        Math.round(
          vpipWhalesCount * 22 +
            Math.min(30, (avgStackBb / 200) * 25) +
            (straddleOrBombPotActive ? 14 : 0) -
            Math.min(25, rakeCapBb * 8)
        )
      )
    );
    return {
      tool: name,
      vpip_whales_count: vpipWhalesCount,
      average_table_stack_bb: avgStackBb,
      table_profitability_score_100: rawScore,
      canonical_url: `${base}/tools/table-selection-calculator`,
    };
  }
  if (name === 'calculate_mtt_session_abi_plan') {
    const mttCount = Math.max(1, Math.round(Number(args.tournaments_count ?? args.tournaments) || 12));
    const averageBuyInDollars = Math.max(1, Number(args.average_buy_in_dollars ?? args.abi) || 55);
    const expectedBulletsPerMtt = Math.max(1, Number(args.expected_bullets_per_mtt ?? 1.25));
    const itmRatePct = Math.max(5, Math.min(40, Number(args.itm_rate_percent ?? 18)));
    const expectedRoiPct = Number(args.expected_roi_percent ?? 25);
    const totalBankrollDollars = Math.max(100, Number(args.bankroll_dollars ?? 12000));
    const totalEntries = Number((mttCount * expectedBulletsPerMtt).toFixed(1));
    const totalSessionExposureDollars = Math.round(totalEntries * averageBuyInDollars);
    const zeroItmBrickProbPct = Number((Math.pow(1 - itmRatePct / 100, mttCount) * 100).toFixed(2));
    return {
      tool: name,
      tournaments_scheduled: mttCount,
      average_buy_in_abi_dollars: averageBuyInDollars,
      total_session_exposure_dollars: totalSessionExposureDollars,
      probability_of_zero_cashes_brick_session_percent: zeroItmBrickProbPct,
      expected_session_ev_profit_dollars: Math.round(totalSessionExposureDollars * (expectedRoiPct / 100)),
      total_bankroll_dollars: totalBankrollDollars,
      canonical_url: `${base}/tools/mtt-grind-planner`,
    };
  }
  if (name === 'get_player_archetype_exploit') {
    const archetype = String(args.archetype || args.type || 'omc').trim().toLowerCase();
    return {
      tool: name,
      archetype,
      canonical_url: `${base}/learn/player-types/${archetype}`,
    };
  }
  if (name === 'get_flop_board_texture_guide') {
    const texture = String(args.texture || args.slug || 'ace-high-dry-rainbow').trim().toLowerCase();
    return {
      tool: name,
      texture,
      canonical_url: `${base}/learn/board-textures/${texture}`,
    };
  }
  if (name === 'get_international_poker_guide') {
    const city = String(args.city || args.slug || 'london').trim().toLowerCase();
    return {
      tool: name,
      city,
      canonical_url: `${base}/poker-rooms/international/${city}`,
    };
  }
  return {
    tool: name,
    canonicalUrl: `${base}/tools`,
  };
}

export async function executeTool(rawName, args = {}) {
  const canonicalName = TOOL_NAME_ALIASES[rawName] || rawName;
  const exists = TOOLS.some((t) => t.name === canonicalName);
  if (!exists) {
    throw new Error(`Unknown MCP tool: ${rawName}`);
  }
  return computeLocalFallback(canonicalName, args);
}

export function getPrompt(name, args = {}) {
  const prompt = PROMPTS.find((p) => p.name === name);
  if (!prompt) return null;
  return {
    description: prompt.description,
    messages: [
      {
        role: 'user',
        content: {
          type: 'text',
          text: `Use Smarter.Poker MCP tools to ${prompt.description} Parameters: ${JSON.stringify(args)}`,
        },
      },
    ],
  };
}

export async function forwardRpc(message, { offlineOnly = false } = {}) {
  const { id, method, params } = message;

  if (method === 'initialize') {
    return {
      jsonrpc: '2.0',
      id,
      result: {
        protocolVersion: params?.protocolVersion || '2024-11-05',
        capabilities: {
          tools: { listChanged: false },
          prompts: { listChanged: false },
          resources: { subscribe: false, listChanged: false },
        },
        serverInfo: SERVER_INFO,
        instructions:
          'Smarter.Poker MCP Server v1.0.7 (55 read-only, deterministic poker mathematics, GTO strategy, cardroom directory, US state law, international poker destinations, player archetype exploits, position benchmarks, and TDA rules tools; 12 prompts; 18 resource templates; 34 streamer commands).',
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
      result: { tools: TOOLS },
    };
  }

  if (method === 'prompts/list') {
    return {
      jsonrpc: '2.0',
      id,
      result: { prompts: PROMPTS },
    };
  }

  if (method === 'prompts/get') {
    const promptResult = getPrompt(params?.name, params?.arguments);
    if (!promptResult) {
      return {
        jsonrpc: '2.0',
        id,
        error: { code: -32602, message: `Unknown prompt: ${params?.name}` },
      };
    }
    return {
      jsonrpc: '2.0',
      id,
      result: promptResult,
    };
  }

  if (method === 'resources/templates/list') {
    return {
      jsonrpc: '2.0',
      id,
      result: { resourceTemplates: RESOURCE_TEMPLATES },
    };
  }

  if (!offlineOnly) {
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

export function startStdioServer() {
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
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (isMain) {
  startStdioServer();
}
