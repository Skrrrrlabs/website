import Link from 'next/link';
import ResearchLayout from '../../components/ResearchLayout';
import { researchEntries, researchSnapshot } from '../../content/researchContent';
import styles from '../../styles/Research.module.css';

export default function ResearchIndex() {
  return (
    <ResearchLayout
      title="Research | SkrrrrLabs"
      description="Public research documentation from SkrrrrLabs, including current validation status, market-microstructure notes and research methodology."
      canonical="https://skrrrrlabs.com/research"
    >
      <main>
        <section className={styles.indexHero}>
          <div className={styles.kicker}><span>01</span><span>PUBLIC RESEARCH</span></div>
          <h1>Research,<br />without the sales pitch.</h1>
          <div className={styles.indexIntro}>
            <p>SkrrrrLabs studies market structure through independently maintained data, chronological testing and forward observation.</p>
            <p>These public notes document questions, research boundaries and validation state. Executable rules, thresholds and current candidates remain private.</p>
          </div>
        </section>

        <section className={styles.snapshot} aria-labelledby="snapshot-title">
          <div className={styles.sectionLabel}><span>02</span><span>RESEARCH SNAPSHOT</span></div>
          <div className={styles.snapshotHeading}>
            <div>
              <p className={styles.snapshotState}>{researchSnapshot.status}</p>
              <h2 id="snapshot-title">Infrastructure before inference.</h2>
            </div>
            <div>
              <p>{researchSnapshot.description}</p>
              <span>AS OF {researchSnapshot.asOf}</span>
            </div>
          </div>
          <div className={styles.snapshotGrid}>
            {researchSnapshot.metrics.map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
                <p>{metric.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.library} aria-labelledby="library-title">
          <div className={styles.sectionLabel}><span>03</span><span>RESEARCH INDEX</span></div>
          <h2 id="library-title">Selected public notes.</h2>
          <div className={styles.libraryList}>
            {researchEntries.map((entry) => (
              <Link href={`/research/${entry.slug}`} key={entry.slug}>
                <span>{entry.index}</span>
                <div>
                  <p>{entry.eyebrow}</p>
                  <h3>{entry.title}</h3>
                  <span>{entry.summary}</span>
                </div>
                <div className={styles.entryState}>
                  <span>{entry.status}</span>
                  <span>{entry.updated}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.boundary}>
          <p>PUBLICATION BOUNDARY</p>
          <h2>Show the work.<br />Protect the edge.</h2>
          <p>Public documentation covers research questions, data classes, process and limitations. Proprietary datasets, event definitions, system thresholds and executable logic are not published.</p>
        </section>
      </main>
    </ResearchLayout>
  );
}

