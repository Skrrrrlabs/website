import styles from '../styles/Home.module.css';

export function SectionHeading({ index, label }) {
  return <div className={styles.sectionHeading}><span>{index}</span><span>{label}</span></div>;
}

export function MarketList({ items }) {
  return <div className={styles.marketList}>{items.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>;
}

export function FrameworkList({ items }) {
  return <ol className={styles.frameworkList}>{items.map((item, index) => <li key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></li>)}</ol>;
}

export function TopicList({ items }) {
  return <div className={styles.topicList}>{items.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>;
}

export function PartnerList({ items, buttonLabel }) {
  return <div className={styles.partnerList}>{items.map((item, index) => <article key={item.name}><span>0{index + 1}</span><div><h3>{item.name}</h3><p>{item.detail}</p></div><a href={item.href} target="_blank" rel="noreferrer sponsored">{buttonLabel}<span aria-hidden="true">↗</span></a></article>)}</div>;
}
