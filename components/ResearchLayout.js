import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Research.module.css';

export default function ResearchLayout({ title, description, canonical, children }) {
  const [navOpen, setNavOpen] = useState(false);

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
        <nav
          id="research-navigation"
          className={navOpen ? styles.navOpen : ''}
          aria-label="Research navigation"
        >
          <Link href="/" onClick={() => setNavOpen(false)}>Home</Link>
          <Link href="/research" onClick={() => setNavOpen(false)}>Research</Link>
          <Link href="/research/methodology" onClick={() => setNavOpen(false)}>Methodology</Link>
          <a href="mailto:alpha@skrrrrlabs.com" onClick={() => setNavOpen(false)}>Contact</a>
        </nav>
        <button
          type="button"
          className={styles.menuButton}
          aria-label={navOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={navOpen}
          aria-controls="research-navigation"
          onClick={() => setNavOpen((open) => !open)}
        >
          <span aria-hidden="true">{navOpen ? '×' : '☰'}</span>
        </button>
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
