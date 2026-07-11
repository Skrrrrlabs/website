import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import { SectionHeading, MarketList, FrameworkList, TopicList, PartnerList } from '../components/Sections';
import { copy } from '../content/siteContent';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [lang, setLang] = useState('en');
  const t = copy[lang];

  return (
    <div className={styles.site} lang={lang}>
      <Head>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://skrrrrlabs.com/" />
        <link rel="icon" href="/skrrr_labs_favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SkrrrrLabs" />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDescription} />
        <meta property="og:url" content="https://skrrrrlabs.com/" />
        <meta property="og:image" content="https://skrrrrlabs.com/og-research.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.metaTitle} />
        <meta name="twitter:description" content={t.metaDescription} />
        <meta name="twitter:image" content="https://skrrrrlabs.com/og-research.png" />
      </Head>

      <Header lang={lang} setLang={setLang} labels={t.nav} />

      <main>
        <section className={styles.hero} id="top" aria-labelledby="hero-title">
          <div className={styles.heroIndex}><span>{t.heroEyebrow}</span><span>Digital Assets · Global Derivatives</span></div>
          <div className={styles.heroBody}>
            <h1 id="hero-title">{t.heroTitle}</h1>
            <p className={styles.heroDescription}>{t.heroDescription.map((line) => <span key={line}>{line}<br /></span>)}</p>
          </div>
          <div className={styles.heroActions}>
            <a className={styles.primaryAction} href="#framework">{t.explore}<span aria-hidden="true">↓</span></a>
            <a className={styles.secondaryAction} href="#partners">{t.partnerCta}<span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <section className={styles.section} id="research" aria-labelledby="philosophy-title">
          <SectionHeading index="01" label={t.nav.research} />
          <div className={styles.philosophyGrid}>
            <h2 id="philosophy-title">{t.philosophyTitle}</h2>
            <div>{t.philosophyBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<p className={styles.highlight}>{t.philosophyHighlight}</p></div>
          </div>
        </section>

        <section className={styles.section} id="markets" aria-labelledby="markets-title">
          <SectionHeading index="02" label={t.nav.markets} />
          <div className={styles.titleRow}><h2 id="markets-title">{t.marketsTitle}</h2><p>{t.marketsIntro}</p></div>
          <MarketList items={t.markets} />
        </section>

        <section className={`${styles.section} ${styles.lightSection}`} id="framework" aria-labelledby="framework-title">
          <SectionHeading index="03" label={t.frameworkLabel} />
          <div className={styles.titleRow}><h2 id="framework-title">{t.frameworkTitle}</h2><p>{t.frameworkIntro}</p></div>
          <FrameworkList items={t.framework} />
        </section>

        <section className={styles.section} id="systems" aria-labelledby="systems-title">
          <SectionHeading index="04" label={t.nav.systems} />
          <div className={styles.titleRow}><h2 id="systems-title">{t.systemsTitle}</h2><p>{t.systemsIntro}</p></div>
          <TopicList items={t.systems} />
          <p className={styles.systemsNote}>{t.systemsNote}</p>
        </section>

        <section className={styles.section} id="principles" aria-labelledby="principles-title">
          <SectionHeading index="05" label={t.nav.principles} />
          <div className={styles.titleRow}><h2 id="principles-title">{t.principlesTitle}</h2><p>{t.principlesIntro}</p></div>
          <TopicList items={t.principles} />
        </section>

        <section className={styles.partners} id="partners" aria-labelledby="partners-title">
          <SectionHeading index="06" label={t.nav.partners} />
          <div className={styles.titleRow}><h2 id="partners-title">{t.partnersTitle}</h2><p>{t.partnersIntro}</p></div>
          <PartnerList items={t.partners} buttonLabel={t.viewDetails} />
          <p className={styles.disclosure}>{t.disclosure}</p>
        </section>
      </main>

      <footer className={styles.footer} id="contact">
        <div><a className={styles.wordmark} href="#top">SkrrrrLabs</a><p>{t.footerDescriptor}</p></div>
        <div className={styles.footerLinks}>
          <a href={`mailto:${t.contactEmail}`}>{t.contactEmail}</a>
          <a href="https://skrrrrlabs.com">skrrrrlabs.com</a>
          <a href="https://t.me/skrrrrlabs" target="_blank" rel="noreferrer">Telegram ↗</a>
          <a href="/event">Event ↗</a>
          <a href="/refchange">Referral Change ↗</a>
          <span>{t.contactHandle}</span>
        </div>
        <div className={styles.footerBase}><span>© {new Date().getFullYear()} SkrrrrLabs</span><span>{t.footerTagline}</span></div>
      </footer>
    </div>
  );
}
