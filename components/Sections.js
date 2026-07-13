import styles from '../styles/Home.module.css';

export function SectionHeader({ index, label }) {
  return <div className={styles.sectionHeader}><span>{index}</span><span>{label}</span></div>;
}

export function Pipeline({ steps }) {
  return <div className={styles.pipeline} aria-label="Research pipeline">{steps.map((step, index) => <div className={styles.pipelineStep} key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></div>)}</div>;
}

export function MetricStrip({ metrics }) {
  return <div className={styles.metricStrip}>{metrics.map((metric) => <div className={styles.metric} key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>;
}

export function StatusTable({ rows }) {
  return <div className={styles.statusTable}>{rows.map(([label, state]) => <div className={styles.statusRow} key={label}><span>{label}</span><span data-state={state.toLowerCase().replaceAll(' ', '-')}>{state}</span></div>)}</div>;
}

export function ProcessList({ items }) {
  return <ol className={styles.processList}>{items.map(([title, description], index) => <li key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol>;
}

export function MarketScope({ items }) {
  return <div className={styles.marketScope}>{items.map((item, index) => <article className={item.primary ? styles.primaryMarket : ''} key={item.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>;
}

export function ValidationList({ items }) {
  return <ul className={styles.validationList}>{items.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</li>)}</ul>;
}

export function PrinciplesList({ items }) {
  return <div className={styles.principlesList}>{items.map((item, index) => <p key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong></p>)}</div>;
}

export function PlatformList({ items, buttonLabel }) {
  return <div className={styles.platformList}>{items.map((item, index) => <article key={item.name}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{item.name}</h3><p>{item.detail}</p></div><a href={item.href} target="_blank" rel="noreferrer sponsored" aria-label={`${buttonLabel}: ${item.name}`}>{buttonLabel}<span aria-hidden="true">↗</span></a></article>)}</div>;
}
