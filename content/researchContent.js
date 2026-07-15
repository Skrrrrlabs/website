export const researchSnapshot = {
  asOf: '15 July 2026',
  status: 'COLLECTING',
  description: 'A dated public snapshot of research infrastructure and validation activity. It is not a live trading feed.',
  metrics: [
    { value: '789GB', label: 'Trade-level archive', detail: 'Binance USDT-M Futures aggTrades' },
    { value: '27.8GB', label: 'Kline archive', detail: 'Multi-timeframe futures market history' },
    { value: '14 DAYS', label: 'Minimum observation', detail: 'Forward-validation protocol' },
    { value: '28', label: 'Candidate events', detail: 'Recorded in the current observation set' },
    { value: '16', label: 'Completed observations', detail: 'At the snapshot date' },
    { value: '0', label: 'Processing errors', detail: 'Reported by the validation status record' },
  ],
};

export const researchEntries = [
  {
    slug: 'forward-validation',
    index: '01',
    eyebrow: 'FORWARD OBSERVATION',
    title: 'Testing what survives after the hypothesis.',
    summary: 'A point-in-time observation protocol for separating promising historical behavior from evidence that persists after selection.',
    status: 'COLLECTING',
    updated: '15 July 2026',
  },
  {
    slug: 'microstructure',
    index: '02',
    eyebrow: 'MARKET MICROSTRUCTURE',
    title: 'Trade-level flow as evidence, not instruction.',
    summary: 'Research into whether execution-level market data adds stable information after chronological and regime-aware validation.',
    status: 'RESEARCH NOTE',
    updated: '13 July 2026',
  },
  {
    slug: 'methodology',
    index: '03',
    eyebrow: 'RESEARCH METHODOLOGY',
    title: 'A process designed to reject weak claims.',
    summary: 'The public principles used to separate market regimes, preserve chronology and keep unfinished research out of production.',
    status: 'ACTIVE',
    updated: '15 July 2026',
  },
];

export const researchArticles = {
  'forward-validation': {
    ...researchEntries[0],
    metaDescription: 'A public overview of the SkrrrrLabs point-in-time forward-observation protocol.',
    dek: 'Historical results describe the past. Forward observation asks whether a hypothesis remains coherent after it has been written down and frozen.',
    facts: [
      ['Current state', 'Collecting'],
      ['Minimum window', '14 days'],
      ['Candidate events', '28'],
      ['Completed observations', '16'],
      ['Processing errors', '0'],
    ],
    sections: [
      {
        heading: 'Research question',
        body: 'Can a market observation remain useful when candidates are recorded at the time they appear and evaluated only with information that becomes available afterward?',
      },
      {
        heading: 'Observation design',
        body: 'Candidates are recorded with timestamps and monitored through a fixed forward window. Historical research and forward records remain separate so that later information cannot rewrite the original observation.',
      },
      {
        heading: 'Publication rule',
        body: 'No success rate, performance figure or deployment claim is published before the minimum observation window is complete and the underlying records have been reviewed for errors and duplicated events.',
      },
      {
        heading: 'What remains private',
        body: 'Executable conditions, thresholds, instrument-level candidates, entry logic and internal evaluation tables are intentionally excluded from this public note.',
      },
      {
        heading: 'Current limitation',
        body: 'The observation window is still collecting. The current counts describe data-processing progress only and should not be interpreted as evidence of trading performance.',
      },
    ],
  },
  microstructure: {
    ...researchEntries[1],
    metaDescription: 'A public research note on SkrrrrLabs trade-level market-microstructure validation.',
    dek: 'More granular data is not automatically better evidence. The question is whether trade-level information remains useful outside the period in which it was discovered.',
    facts: [
      ['Source', 'Binance USDT-M Futures'],
      ['Data class', 'Trade-level aggTrades'],
      ['Source archives processed', '1,518'],
      ['Matched events', '1,852'],
      ['Deployment state', 'Not deployed'],
    ],
    sections: [
      {
        heading: 'Research question',
        body: 'Does trade-level execution flow add stable information after market regime, chronology and out-of-sample evaluation are held constant?',
      },
      {
        heading: 'Data boundary',
        body: 'The study uses independently maintained public exchange archives. Events are matched chronologically and divided into development, validation and sealed evaluation periods.',
      },
      {
        heading: 'Current finding',
        body: 'The additional detail improved some development-period descriptions, but the improvement did not persist strongly enough in sealed evaluation to support deployment. The result remains a research note rather than a trading system.',
      },
      {
        heading: 'Why the negative result matters',
        body: 'A larger dataset can make a weak relationship look precise. Rejecting unstable improvements is part of the research process and prevents data volume from being mistaken for evidence.',
      },
      {
        heading: 'What remains private',
        body: 'Feature definitions, thresholds, event labels, instrument-level records and executable decision logic are not published.',
      },
    ],
  },
  methodology: {
    ...researchEntries[2],
    metaDescription: 'The public research and validation principles used by SkrrrrLabs.',
    dek: 'The objective is not to produce more signals. It is to reduce the number of claims that survive without sufficient evidence.',
    facts: [
      ['Primary focus', 'Digital-asset market structure'],
      ['Validation order', 'Train / Validate / Lockbox'],
      ['Forward records', 'Point in time'],
      ['Regime handling', 'Explicit separation'],
      ['Research state', 'Active'],
    ],
    sections: [
      {
        heading: 'Preserve chronology',
        body: 'Research records are organized so that each decision can be evaluated using only information that was available at that time. Later outcomes do not alter the original candidate state.',
      },
      {
        heading: 'Separate market regimes',
        body: 'Structurally different periods are identified before primary evaluation. Older data may support context and causal feature warm-up, but it does not automatically represent the current market regime.',
      },
      {
        heading: 'Keep a sealed evaluation set',
        body: 'Development results are not treated as final evidence. A lockbox period is held apart from repeated tuning and used to test whether an observation survives contact with unseen data.',
      },
      {
        heading: 'Record rejection',
        body: 'Research that fails to remain stable is retained as a negative result. A rejected hypothesis is useful when it prevents the same weak assumption from being rediscovered later.',
      },
      {
        heading: 'Publish boundaries, not execution logic',
        body: 'Public documentation explains the research question, data class, validation state and limitations. Proprietary rules, thresholds, current candidates and system internals remain private.',
      },
    ],
  },
};

