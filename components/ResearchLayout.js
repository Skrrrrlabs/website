import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Research.module.css';

export default function ResearchLayout({ title, description, canonical, children }) {
  return (
    <div className={styles.site}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonical} />
        <link rel="icon" href="/skrrr_labs_favicon.ico" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="SkrrrrLabs" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://skrrrrlabs.com/og-research.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        <Link className={styles.wordmark} href="/">SkrrrrLabs</Link>
        <nav aria-label="Research navigation">
          <Link href="/">Home</Link>
          <Link href="/research">Research</Link>
          <Link href="/research/methodology">Methodology</Link>
          <a href="mailto:alpha@skrrrrlabs.com">Contact</a>
        </nav>
      </header>

      {children}

      <footer className={styles.footer}>
        <div>
          <Link className={styles.wordmark} href="/">SkrrrrLabs</Link>
          <p>Independent Market Structure Research</p>
        </div>
        <div className={styles.footerMeta}>
          <span>Public research documentation</span>
          <span>Not investment advice</span>
          <span>&copy; {new Date().getFullYear()} SkrrrrLabs</span>
        </div>
      </footer>
    </div>
  );
}

