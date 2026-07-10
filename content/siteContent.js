export const exchanges = [
  { name: 'Binance', detail: { en: 'Spot and futures access', ko: '현물 및 선물 거래 환경' }, href: 'https://accounts.binance.com/register?ref=V5EBF1SH' },
  { name: 'Bybit', detail: { en: 'Derivatives market access', ko: '파생상품 거래 환경' }, href: 'https://partner.bybit.com/b/skrrrr' },
  { name: 'OKX', detail: { en: 'Global market access', ko: '글로벌 거래 환경' }, href: 'https://www.okx.com/join/SKRRRR' },
  { name: 'Bitget', detail: { en: 'Digital asset market access', ko: '디지털 자산 거래 환경' }, href: 'https://partner.bitget.com/bg/5krrrr' },
];

const shared = {
  nav: {
    en: { research: 'Research', markets: 'Markets', systems: 'Systems', education: 'Education', partners: 'Partners', contact: 'Contact' },
    ko: { research: '리서치', markets: '마켓', systems: '시스템', education: '교육', partners: '파트너', contact: '문의' },
  },
};

export const copy = {
  en: {
    metaTitle: 'SkrrrrLabs — Market Structure Research',
    metaDescription: 'Independent research into structure, liquidity, and probability across digital assets and global derivatives markets.',
    nav: shared.nav.en,
    heroTitle: 'Structure Before Prediction.',
    heroDescription: 'Independent research into structure, liquidity, and probability across digital assets and global derivatives markets.',
    explore: 'Explore the Framework', partnerCta: 'Partner Exchanges',
    philosophyTitle: 'We Study Structure, Not Prediction.',
    philosophyBody: ['Markets should be interpreted through structure, liquidity, probability, and execution—not treated as objects of prediction.', 'SkrrrrLabs studies the conditions of the market as a whole, rather than relying on a single indicator or short-term signal.'],
    marketsTitle: 'Markets in scope.', marketsIntro: 'A cross-market perspective designed to reveal shared structure without ignoring market-specific behavior.',
    markets: [
      { title: 'Digital Assets', description: 'Cryptocurrency and digital asset markets' },
      { title: 'Global Indices', description: 'NASDAQ and global equity indices' },
      { title: 'Metals', description: 'Gold and precious metals markets' },
      { title: 'Energy', description: 'Oil and global energy markets' },
    ],
    frameworkLabel: 'Research Framework', frameworkTitle: 'Four lenses. One discipline.', frameworkIntro: 'A compact framework for moving from observation to execution without confusing conviction with certainty.',
    framework: [
      { title: 'Structure', description: 'The position of price and waves within the broader market context' },
      { title: 'Liquidity', description: 'Liquidity, liquidation, and participant positioning' },
      { title: 'Probability', description: 'Confluence and probabilistic judgment across multiple forms of evidence' },
      { title: 'Execution', description: 'Invalidation, risk, and explicit execution criteria' },
    ],
    systemsTitle: 'Research. Systems. Execution.', systemsIntro: 'Areas of active research and development—not finished products or promises of performance.',
    systems: [
      { title: 'Market Analytics', description: 'Methods for organizing market context and evidence.' },
      { title: 'Automation', description: 'Research into repeatable data and decision workflows.' },
      { title: 'Trading Tools', description: 'Tools that support observation, testing, and execution.' },
      { title: 'Risk Frameworks', description: 'Structured approaches to invalidation and exposure.' },
    ],
    educationTitle: 'Education & Media', educationIntro: 'Clear frameworks for learning how to observe markets, manage uncertainty, and make independent decisions.',
    education: [
      { title: 'Market Structure', description: 'Reading context before direction.' },
      { title: 'Trading Psychology', description: 'Decision-making under uncertainty.' },
      { title: 'Risk Management', description: 'Defining risk before participation.' },
      { title: 'YouTube Content', description: 'Long-form market education and commentary.' },
    ],
    partnersTitle: 'Partner Exchanges', partnersIntro: 'Compare trading environments and conditions, then select the platform that fits your own requirements.', viewDetails: 'View Details',
    disclosure: 'Disclosure — Partner links may provide SkrrrrLabs with a referral commission. Exchange selection, participation, and risk decisions remain entirely your own.',
  },
  ko: {
    metaTitle: 'SkrrrrLabs — 시장 구조 리서치',
    metaDescription: '디지털 자산과 글로벌 파생시장의 구조, 유동성, 확률을 연구합니다.',
    nav: shared.nav.ko,
    heroTitle: '예측보다 구조.', heroDescription: '디지털 자산과 글로벌 파생시장의 구조, 유동성, 확률을 연구합니다.',
    explore: '리서치 프레임워크', partnerCta: '파트너 거래소',
    philosophyTitle: '예측이 아닌 구조를 연구합니다.',
    philosophyBody: ['시장은 예측의 대상이 아니라 구조, 유동성, 확률, 실행의 관점에서 해석해야 합니다.', 'SkrrrrLabs는 단일 지표나 단기 신호가 아닌 시장 전체의 구조와 조건을 연구합니다.'],
    marketsTitle: '연구 시장.', marketsIntro: '시장별 특성을 존중하면서도 그 아래에 존재하는 공통 구조를 관찰합니다.',
    markets: [
      { title: 'Digital Assets', description: '암호화폐 및 디지털 자산 시장' },
      { title: 'Global Indices', description: 'NASDAQ 및 글로벌 지수' },
      { title: 'Metals', description: 'Gold 및 귀금속 시장' },
      { title: 'Energy', description: 'Oil 및 에너지 시장' },
    ],
    frameworkLabel: '리서치 프레임워크', frameworkTitle: '네 개의 관점. 하나의 원칙.', frameworkIntro: '확신을 확실성으로 착각하지 않고 관찰에서 실행까지 이동하기 위한 프레임워크입니다.',
    framework: [
      { title: 'Structure', description: '가격과 파동의 위치' }, { title: 'Liquidity', description: '유동성, 청산, 포지셔닝' },
      { title: 'Probability', description: '복수 근거와 확률적 판단' }, { title: 'Execution', description: '무효화, 리스크, 실행 기준' },
    ],
    systemsTitle: 'Research. Systems. Execution.', systemsIntro: '완성된 상품이나 성과 약속이 아닌, 현재 연구하고 개발하는 영역을 소개합니다.',
    systems: [
      { title: 'Market Analytics', description: '시장 맥락과 근거를 구조화하는 방법론' }, { title: 'Automation', description: '반복 가능한 데이터 및 의사결정 워크플로 연구' },
      { title: 'Trading Tools', description: '관찰, 검증, 실행을 지원하는 도구' }, { title: 'Risk Frameworks', description: '무효화와 익스포저를 관리하는 구조적 접근' },
    ],
    educationTitle: 'Education & Media', educationIntro: '시장을 관찰하고 불확실성을 관리하며 독립적으로 판단하기 위한 명료한 프레임워크를 공유합니다.',
    education: [
      { title: 'Market Structure', description: '방향보다 맥락을 먼저 읽는 법' }, { title: 'Trading Psychology', description: '불확실성 아래의 의사결정' },
      { title: 'Risk Management', description: '참여 전에 리스크를 정의하는 법' }, { title: 'YouTube Content', description: '장기 형식의 시장 교육과 논평' },
    ],
    partnersTitle: 'Partner Exchanges', partnersIntro: '거래 환경과 조건을 비교한 후 필요한 플랫폼을 직접 선택할 수 있습니다.', viewDetails: '자세히 보기',
    disclosure: '안내 — 파트너 링크를 통해 SkrrrrLabs에 수수료가 제공될 수 있습니다. 거래소 선택과 참여 및 리스크에 대한 판단은 이용자 본인에게 있습니다.',
  },
};

Object.keys(copy).forEach((lang) => {
  copy[lang].partners = exchanges.map((exchange) => ({ ...exchange, detail: exchange.detail[lang] }));
});
