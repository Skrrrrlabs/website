import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Reveal from '../components/Reveal';
import { SectionHeader, Pipeline, MetricStrip, StatusTable, ProcessList, MarketScope, ValidationList, PrinciplesList, PlatformList } from '../components/Sections';
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
        <meta property="og:image" content="https://skrrrrlabs.com/og-skrrrrlabs-v3.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.metaTitle} />
        <meta name="twitter:description" content={t.metaDescription} />
        <meta name="twitter:image" content="https://skrrrrlabs.com/og-skrrrrlabs-v3.png" />
      </Head>

      <Header lang={lang} setLang={setLang} links={t.nav} />

      <main>
        <section className={styles.hero} id="top" aria-labelledby="hero-title">
          <div className={styles.heroInner}>
            <div className={styles.heroCopyBlock}>
              <p className={styles.eyebrow}>{t.heroEyebrow}</p>
              <h1 id="hero-title">{t.heroTitle}</h1>
              <p className={styles.heroBody}>{t.heroBody}</p>
              <p className={styles.heroBodySecondary}>{t.heroBodySecondary}</p>
              <div className={styles.heroActions}>
                <a className={styles.primaryAction} href="#process">{t.researchCta}<span aria-hidden="true">↘</span></a>
                <a className={styles.secondaryAction} href="#platforms">{t.platformsCta}<span aria-hidden="true">↘</span></a>
                <a className={styles.textAction} href={`mailto:${t.contactEmail}`}>{t.collaborationCta}<span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <Pipeline steps={t.pipeline} />
          </div>
          <div className={styles.heroBase}><span>SKRRRRLABS / 01</span><span>INDEPENDENT RESEARCH PROJECT</span></div>
        </section>

        <Reveal as="section" className={styles.section} id="status" aria-labelledby="status-title">
          <SectionHeader index="01" label={t.statusLabel} />
          <div className={styles.sectionLead}><h2 id="status-title">{t.statusTitle}</h2><p>{t.statusIntro}</p></div>
          <p className={styles.sectionNote}>{t.statusNote}</p>
          <MetricStrip metrics={t.metrics} />
          <StatusTable rows={t.statusRows} />
          <a className={styles.researchArchiveLink} href="/research">Open the Public Research Archive<span aria-hidden="true">&rarr;</span></a>
        </Reveal>

        <Reveal as="section" className={`${styles.section} ${styles.processSection}`} id="process" aria-labelledby="process-title">
          <SectionHeader index="02" label={t.processLabel} />
          <div className={styles.sectionLead}><h2 id="process-title">{t.processTitle}</h2><p>{t.processIntro}</p></div>
          <ProcessList items={t.process} />
        </Reveal>

        <Reveal as="section" className={`${styles.section} ${styles.marketsSection}`} id="markets" aria-labelledby="markets-title">
          <SectionHeader index="03" label={t.marketsLabel} />
          <div className={styles.sectionLead}><h2 id="markets-title">{t.marketsTitle}</h2><p>{t.marketsIntro}</p></div>
          <MarketScope items={t.markets} />
        </Reveal>

        <Reveal as="section" className={`${styles.section} ${styles.validationSection}`} id="validation" aria-labelledby="validation-title">
          <SectionHeader index="04" label={t.validationLabel} />
          <div className={styles.sectionLead}><h2 id="validation-title">{t.validationTitle}</h2><p>{t.validationIntro}</p></div>
          <ValidationList items={t.validation} />
        </Reveal>

        <Reveal as="section" className={`${styles.section} ${styles.principlesSection}`} id="principles" aria-labelledby="principles-title">
          <SectionHeader index="05" label={t.principlesLabel} />
          <div className={styles.principlesIntro}><h2 id="principles-title">{t.principlesTitle}</h2><span>RESEARCH / 05</span></div>
          <PrinciplesList items={t.principles} />
        </Reveal>

        <Reveal as="section" className={`${styles.section} ${styles.aboutSection}`} id="about" aria-labelledby="about-title">
          <SectionHeader index="06" label={t.aboutLabel} />
          <div className={styles.aboutGrid}><h2 id="about-title">{t.aboutTitle}</h2><div>{t.aboutBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div>
        </Reveal>

        <Reveal as="section" className={`${styles.section} ${styles.collaborationSection}`} id="collaboration" aria-labelledby="collaboration-title">
          <SectionHeader index="07" label={t.collaborationLabel} />
          <div className={styles.sectionLead}><h2 id="collaboration-title">{t.collaborationTitle}</h2><div><p>{t.collaborationBody}</p><p>{t.collaborationNote}</p></div></div>
          <div className={styles.collaboratorList}>{t.collaborators.map((item) => <span key={item}>{item}</span>)}</div>
          <a className={styles.primaryAction} href={`mailto:${t.contactEmail}`}>{t.startConversation}<span aria-hidden="true">↗</span></a>
        </Reveal>

        <Reveal as="section" className={`${styles.section} ${styles.platformsSection}`} id="platforms" aria-labelledby="platforms-title">
          <SectionHeader index="08" label={t.platformsLabel} />
          <div className={styles.sectionLead}><h2 id="platforms-title">{t.platformsTitle}</h2><p>{t.platformsIntro}</p></div>
          <PlatformList items={t.platforms} buttonLabel={t.openPlatform} />
          <p className={styles.affiliateDisclosure}>{t.affiliateDisclosure}</p>
        </Reveal>
      </main>

      <footer className={styles.footer} id="contact">
        <div className={styles.footerTop}><a className={styles.wordmark} href="#top">SkrrrrLabs</a><p>{t.footerDescriptor}</p></div>
        <div className={styles.footerLinks}>
          <a href="#process">{t.footerLinks.process}</a><a href="#status">{t.footerLinks.status}</a><a href="#markets">{t.footerLinks.markets}</a><a href="#about">{t.footerLinks.about}</a><a href="#collaboration">{t.footerLinks.collaboration}</a><a href="#platforms">{t.footerLinks.platforms}</a><a href="/risk-disclosure">{t.footerLinks.risk}</a><a href="/affiliate-disclosure">{t.footerLinks.affiliate}</a><a href="/privacy">{t.footerLinks.privacy}</a><a href="/terms">{t.footerLinks.terms}</a><a href={`mailto:${t.contactEmail}`}>{t.footerLinks.contact}</a>
        </div>
        <div className={styles.footerBottom}><span>© {new Date().getFullYear()} SkrrrrLabs</span><span>{t.contactEmail}</span><span>{t.contactHandle}</span><span>{t.footerStatement}</span></div>
      </footer>
    </div>
  );
}
