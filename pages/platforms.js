import Head from 'next/head';
import Header from '../components/Header';
import { PartnerExchanges, PlatformList, SectionHeader } from '../components/Sections';
import { copy, partnerExchanges } from '../content/siteContent';
import styles from '../styles/Home.module.css';

// 거래소 제휴는 정문(AI 스튜디오)에서 떨어진 이 방에만 둔다. 영문 전용 (2026-11-26).
export default function Platforms() {
  const t = copy.en;
  return (
    <div className={styles.site} lang="en">
      <Head>
        <title>Partner Platforms — SkrrrrLabs</title>
        <meta name="description" content="Trading platforms SkrrrrLabs uses for its market-structure research. Affiliate links with full disclosure." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://skrrrrlabs.com/platforms" />
        <link rel="icon" href="/skrrr_labs_favicon.ico" />
        <meta name="robots" content="noindex" />
      </Head>
      <Header lang="en" setLang={() => {}} links={[{ href: '/', label: 'Studio' }, { href: '/market', label: 'Market Research' }, { href: '/research', label: 'Archive' }]} />
      <main>
        <section className={`${styles.section} ${styles.platformsSection}`} id="platforms" aria-labelledby="platforms-title" style={{ paddingTop: 130, borderTop: 0 }}>
          <div className={styles.platformTop}>
            <div className={styles.platformTopCopy}>
              <SectionHeader index="—" label={t.platformsLabel} />
              <h2 id="platforms-title">{t.platformsTitle}</h2>
              <p>{t.platformsIntro}</p>
            </div>
            <div className={styles.platformTopBanner}><PartnerExchanges data={partnerExchanges} /></div>
          </div>
          <PlatformList items={t.platforms} buttonLabel={t.openPlatform} />
          <p className={styles.affiliateDisclosure}>{t.affiliateDisclosure}</p>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerTop}><a className={styles.wordmark} href="/">SkrrrrLabs</a><p>Agentic Studio</p></div>
        <div className={styles.footerLinks}><a href="/">Studio</a><a href="/market">Market Research</a><a href="/risk-disclosure">Risk Disclosure</a><a href="/affiliate-disclosure">Affiliate Disclosure</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div>
        <div className={styles.footerBottom}><span>© {new Date().getFullYear()} SkrrrrLabs</span><span>{t.contactEmail}</span></div>
      </footer>
    </div>
  );
}
