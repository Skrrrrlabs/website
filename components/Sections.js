import styles from '../styles/Home.module.css';
import { MarketChart } from './MarketVisual';

export function SectionHeader({ index, label }) {
  return <div className={styles.sectionHeader}><span>{index}</span><span>{label}</span></div>;
}

export function Pipeline({ steps, details = [] }) {
  return <div className={styles.pipeline} aria-label="Research pipeline">{steps.map((step, index) => <div className={styles.pipelineStep} key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong>{details[index] ? <em className={styles.pipelineDetail}>{details[index]}</em> : null}</div>)}</div>;
}

export function MetricStrip({ metrics }) {
  return <div className={styles.metricStrip}>{metrics.map((metric) => <div className={styles.metric} key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>;
}

const monthIndex = (value) => { const [year, month, day] = value.split('-').map(Number); return year * 12 + month - 1 + (day ? (day - 1) / new Date(Date.UTC(year, month, 0)).getUTCDate() : 0); };

export function CoverageTimeline({ data, copy }) {
  const first = monthIndex(data.start);
  const span = monthIndex(data.end) + 1 - first;
  const pos = (value) => ((monthIndex(value) - first) / span) * 100;
  const boundary = pos(data.boundary);
  const years = [];
  for (let year = Number(data.start.slice(0, 4)); year <= Number(data.end.slice(0, 4)); year += 1) years.push(year);
  return (
    <figure className={styles.coverage} aria-label={`${copy.title}: ${copy.summary}`}>
      <figcaption><span>{copy.title}</span><span>{copy.source}</span></figcaption>
      <div className={styles.coverageRows} style={{ '--boundary': `${boundary}%` }}>
        <div className={styles.coverageAxis} aria-hidden="true"><span /><span className={styles.coverageCount}>{copy.instruments}</span><span /></div>
        {data.rows.map((row, index) => {
          const left = pos(row.from);
          const width = pos(row.to) + 100 / span - left;
          const split = Math.min(100, Math.max(0, ((boundary - left) / width) * 100));
          return (
            <div className={styles.coverageRow} key={row.key}>
              <span className={styles.coverageLabel}>{copy.rows[row.key]}</span>
              <span className={styles.coverageCount}>{row.approx ? '≈' : ''}{row.instruments}</span>
              <span className={styles.coverageTrack}><i style={{ left: `${left}%`, width: `${width}%`, '--split': `${split}%`, '--bar': index }} /></span>
            </div>
          );
        })}
        <div className={styles.coverageAxis} aria-hidden="true">
          <span />
          <span />
          <span className={styles.coverageTrack}>{years.map((year) => <b key={year} style={{ left: `${pos(`${year}-01`)}%` }}>{year}</b>)}<em>{copy.boundary}</em></span>
        </div>
      </div>
      <div className={styles.coverageLegend}><span data-kind="legacy">{copy.legacy}</span><span data-kind="active">{copy.active}</span></div>
    </figure>
  );
}

export function StatusTable({ rows }) {
  return <div className={styles.statusTable}>{rows.map(([label, state]) => <div className={styles.statusRow} key={label}><span>{label}</span><span data-state={state.toLowerCase().replaceAll(' ', '-')}>{state}</span></div>)}</div>;
}

export function ProcessList({ items }) {
  return <ol className={styles.processList}>{items.map(([title, description], index) => <li key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol>;
}

export function MarketScope({ items }) {
  return <div className={styles.marketScope}>{items.map((item, index) => <article className={item.primary ? styles.primaryMarket : ''} key={item.title}><span>{String(index + 1).padStart(2, '0')}</span>{item.chart ? <MarketChart market={item.chart} /> : null}<h3>{item.title}</h3><p>{item.description}</p></article>)}</div>;
}

export function ValidationList({ items }) {
  return <ul className={styles.validationList}>{items.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</li>)}</ul>;
}

export function PrinciplesList({ items }) {
  return <div className={styles.principlesList}>{items.map((item, index) => <p key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong></p>)}</div>;
}

export function PlatformList({ items, buttonLabel }) {
  return <div className={styles.platformList}>{items.map((item, index) => <article key={item.name}><span>{String(index + 1).padStart(2, '0')}</span><div className={styles.platformBrand}>{item.logo ? <img className={styles.platformLogo} src={item.logo} alt="" aria-hidden="true" loading="lazy" decoding="async" /> : null}<h3 className={item.logo ? styles.visuallyHidden : undefined}>{item.name}</h3></div><p>{item.detail}</p><a href={item.href} target="_blank" rel="noreferrer sponsored" aria-label={`${buttonLabel}: ${item.name}`}>{buttonLabel}<span aria-hidden="true">↗</span></a></article>)}</div>;
}
