// Binance USDⓈ-M futures archive coverage, from the archive's download records.
// Months are inclusive, written as 'YYYY-MM'; the boundary may be a full date. Sizes are left out until exact
// on-disk totals per dataset are shown in the status copy instead.
export const coverage = {
  start: '2020-01',
  end: '2026-10',
  // Regime split used by regime_file_sets (POST_ETH_SPOT_ETF_TRADING_V1):
  // spot ETH ETFs began trading 2024-07-23 13:30 UTC.
  boundary: '2024-07-23',
  rows: [
    { key: 'candles', instruments: 537, from: '2020-01', to: '2026-10' },
    { key: 'aggTrades', instruments: 530, approx: true, from: '2021-02', to: '2026-07' },
    { key: 'markIndex', instruments: 532, from: '2020-01', to: '2026-10' },
    { key: 'funding', instruments: 536, from: '2020-01', to: '2026-09' },
    { key: 'higherCandles', instruments: 537, from: '2026-06', to: '2026-10' },
  ],
};

export const coverageCopy = {
  en: {
    title: 'Archive coverage',
    source: 'Binance USDⓈ-M futures',
    instruments: 'instruments',
    boundary: 'ETH spot ETF trading starts · 2024-07-23',
    legacy: 'Context only',
    active: 'Current validation',
    rows: {
      candles: '1m · 5m · 15m · 30m · 1h candles',
      aggTrades: 'Tick-level aggregated trades',
      markIndex: 'Mark · index · premium (1h)',
      funding: 'Funding rates',
      higherCandles: '2h · 4h · 1d candles',
    },
    summary: '537 instruments. 1-minute candles since January 2020 and tick-level aggregated trades since February 2021, archived independently. Current validation uses only data recorded after spot Ethereum ETFs began trading.',
  },
  ko: {
    title: '아카이브 수집 범위',
    source: '바이낸스 USDⓈ-M 선물',
    instruments: '종목',
    boundary: '이더리움 현물 ETF 거래 시작 · 2024-07-23',
    legacy: '맥락 참고용',
    active: '현재 검증 구간',
    rows: {
      candles: '1분 · 5분 · 15분 · 30분 · 1시간봉',
      aggTrades: '틱 단위 체결 데이터',
      markIndex: '마크 · 인덱스 · 프리미엄 (1시간)',
      funding: '펀딩비',
      higherCandles: '2시간 · 4시간 · 1일봉',
    },
    summary: '537개 종목. 2020년 1월부터의 1분봉과 2021년 2월부터의 틱 단위 체결 데이터를 독립적으로 보관합니다. 현재 검증에는 이더리움 현물 ETF 거래 시작 이후 데이터만 사용합니다.',
  },
};
