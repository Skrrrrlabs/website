import { marketWeekly } from '../content/marketWeekly';
import styles from '../styles/Home.module.css';

const W = 600, H = 170, PAD = 6;

function buildPath(closes) {
  const logs = closes.map(Math.log);
  const min = Math.min(...logs), max = Math.max(...logs);
  const pts = logs.map((v, i) => `${((i / (logs.length - 1)) * W).toFixed(1)},${(PAD + (1 - (v - min) / (max - min)) * (H - PAD * 2)).toFixed(1)}`);
  return { line: `M${pts.join('L')}`, area: `M0,${H}L${pts.join('L')}L${W},${H}Z` };
}

const CAPTIONS = {
  btc: ['BTCUSDT · weekly close · log', '2020 — 2026'],
  nas: ['NAS100 · weekly · log', '2020 — 2026'],
  gold: ['Gold · weekly · log', '2020 — 2026'],
};

export function MarketChart({ market }) {
  const series = marketWeekly[market];
  const p = buildPath(series.closes);
  const primary = market === 'btc';
  const bx = primary ? series.boundary * W : null;
  const id = `fill-${market}`;
  return (
    <figure className={`${styles.marketChart} ${primary ? '' : styles.marketChartSecondary}`} aria-label={`${series.label} weekly close on a log scale, ${series.start} to ${series.end}`}>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true">
        {primary ? (
          <>
            <defs>
              <linearGradient id={id} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="var(--accent)" stopOpacity=".16" /><stop offset="1" stopColor="var(--accent)" stopOpacity="0" /></linearGradient>
              <clipPath id="postEtf"><rect x={bx} y="0" width={W - bx} height={H} /></clipPath>
            </defs>
            <path d={p.area} fill={`url(#${id})`} clipPath="url(#postEtf)" />
            <path d={p.line} className={styles.chartLineMuted} vectorEffect="non-scaling-stroke" />
            <path d={p.line} className={styles.chartLine} clipPath="url(#postEtf)" vectorEffect="non-scaling-stroke" />
            <line x1={bx} x2={bx} y1="0" y2={H} className={styles.chartBoundary} vectorEffect="non-scaling-stroke" />
          </>
        ) : (
          <path d={p.line} className={styles.chartLineContext} vectorEffect="non-scaling-stroke" />
        )}
      </svg>
      <figcaption><span>{CAPTIONS[market][0]}</span><span>{CAPTIONS[market][1]}</span></figcaption>
    </figure>
  );
}
