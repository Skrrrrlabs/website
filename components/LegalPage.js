import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Legal.module.css';

export default function LegalPage({ title, eyebrow, intro, sections }) {
  return (
    <>
      <Head>
        <title>{title} — SkrrrrLabs</title>
        <meta name="description" content={intro} />
      </Head>
      <main className={styles.page}>
        <header className={styles.header}>
          <Link href="/" className={styles.wordmark}>SkrrrrLabs</Link>
          <Link href="/" className={styles.back}>Back to research</Link>
        </header>
        <article className={styles.article}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1>{title}</h1>
          <p className={styles.intro}>{intro}</p>
          {sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </article>
        <footer className={styles.footer}>© {new Date().getFullYear()} SkrrrrLabs</footer>
      </main>
    </>
  );
}
