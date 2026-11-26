import Head from 'next/head';
import { useEffect, useState } from 'react';
import { studio, studioLinks } from '../content/studioContent';
import styles from '../styles/Studio.module.css';

// 옛 첫 화면(시장 리서치)의 # 주소로 들어온 사람을 새 자리로 보낸다.
// 예: 록체인 유튜브 설명란의 skrrrrlabs.com/#platforms → /market (리서치 간판 + 거래소 배너, 코인 시청자용 입구)
const MOVED = { platforms: '/market', process: '/market#process', status: '/market#status', markets: '/market#markets', validation: '/market#validation', about: '/market#about', collaboration: '/market#collaboration', coverage: '/market#coverage', principles: '/market#principles' };

export default function Studio() {
  const [lang, setLang] = useState('ko');
  const [open, setOpen] = useState(false);
  const t = studio[lang];

  useEffect(() => {
    const go = () => {
      const key = window.location.hash.replace('#', '');
      if (MOVED[key]) window.location.replace(MOVED[key]);
    };
    go();
    window.addEventListener('hashchange', go);
    try { const saved = window.localStorage.getItem('skrrrr-lang'); if (saved === 'en' || saved === 'ko') setLang(saved); } catch (e) { /* 저장소 막힘 */ }
    return () => window.removeEventListener('hashchange', go);
  }, []);

  const toggleLang = () => {
    const next = lang === 'ko' ? 'en' : 'ko';
    setLang(next);
    try { window.localStorage.setItem('skrrrr-lang', next); } catch (e) { /* 무시 */ }
  };

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
        <meta property="og:image" content="https://www.skrrrrlabs.com/og-studio.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="SkrrrrLabs — Agentic Studio. Human Judgment, Agent Speed." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@skrrrrlabs" />
        <meta name="twitter:image" content="https://www.skrrrrlabs.com/og-studio.png" />
        <meta name="twitter:title" content={t.metaTitle} />
        <meta name="twitter:description" content={t.metaDescription} />
      </Head>

      <header className={styles.header}>
        <a className={styles.wordmark} href="#top">SkrrrrLabs</a>
        <nav id="studio-nav" className={`${styles.nav} ${open ? styles.navOpen : ''}`} aria-label="Primary navigation">
          {t.nav.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
        </nav>
        <div className={styles.headerActions}>
          <button className={styles.langButton} onClick={toggleLang} aria-label="Change language">{t.lang}</button>
          <button className={styles.menuButton} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="studio-nav"><span aria-hidden="true">{open ? '×' : '☰'}</span><span className={styles.srOnly}>Menu</span></button>
        </div>
      </header>

      <main>
        <section className={styles.hero} id="top" aria-labelledby="hero-title">
          <p className={styles.cardMark} aria-hidden="true">SkrrrrLabs</p>
          <p className={styles.cardLabel}>{t.eyebrow}</p>
          <h1 id="hero-title" className={styles.cardLine}>{t.title[0]} {t.title[1]}</h1>
          <p className={styles.heroBody}>{t.body} {t.bodySecondary}</p>
          <div className={styles.heroActions}>
            <a className={styles.primary} href="#work">{t.ctaWork}<span aria-hidden="true">↘</span></a>
            <a className={styles.secondary} href={`mailto:${studioLinks.email}`}>{t.ctaContact}<span aria-hidden="true">↗</span></a>
          </div>
          <div className={styles.heroBase}><span>SkrrrrLabs / Studio</span><span>Human judgment · Agent speed</span></div>
        </section>

        <section className={styles.section} id="systems" aria-labelledby="systems-title">
          <p className={styles.label}>{t.boardLabel}</p>
          <div className={styles.board}>
            <div className={styles.boardHead}><span id="systems-title">SKRRRRLABS · SYSTEM BOARD</span><span>{lang === 'ko' ? '지금 돌아가는 일' : 'Now running'}</span></div>
            {t.board.map(([name, desc, state]) => (
              <div className={styles.boardRow} key={name}>
                <span className={styles.boardName}>{name}</span>
                <span className={styles.boardDesc}>{desc}</span>
                <span className={`${styles.boardState} ${/진행|progress/i.test(state) ? styles.wip : ''}`}><i aria-hidden="true" />{state}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section} id="work" aria-labelledby="work-title">
          <p className={styles.label}>{t.workLabel}</p>
          <div className={styles.lead}><h2 id="work-title">{t.workTitle}</h2><p>{t.workIntro}</p></div>
          <div className={styles.workGrid}>
            {t.work.map((w) => (
              <article className={styles.workCard} key={w.title}>
                <span className={styles.workTag}>{w.tag}</span>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
                <div className={styles.chips}>{w.stack.map((s) => <span key={s}>{s}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="method" aria-labelledby="method-title">
          <p className={styles.label}>{t.methodLabel}</p>
          <div className={styles.lead}><h2 id="method-title">{t.methodTitle}</h2><p>{t.methodIntro}</p></div>
          <div className={styles.method}>
            {t.method.map(([h, p], i) => (
              <div className={styles.methodItem} key={h}><span>0{i + 1}</span><h3>{h}</h3><p>{p}</p></div>
            ))}
          </div>
          <div className={styles.stack}><b>{t.stackLabel}</b>{t.stack.map((s) => <span key={s}>{s}</span>)}</div>
        </section>

        <section className={styles.section} id="lab" aria-label={t.labLabel}>
          <div className={styles.split}>
            <div className={styles.splitCard}>
              <p className={styles.label}>{t.labLabel}</p>
              <h2>{t.labTitle}</h2>
              <p>{t.labIntro}</p>
              <a className={styles.arrowLink} href={studioLinks.youtube} target="_blank" rel="noopener noreferrer">{t.labCta}<span aria-hidden="true">↗</span></a>
            </div>
            <div className={styles.splitCard}>
              <p className={styles.label}>{t.researchLabel}</p>
              <h2>{t.researchTitle}</h2>
              <p>{t.researchBody}</p>
              <a className={styles.arrowLink} href="/market">{t.researchCta}<span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>

        <section className={styles.contact} id="contact" aria-labelledby="contact-title">
          <p className={styles.label} style={{ justifyContent: 'center' }}>{t.contactLabel}</p>
          <h2 id="contact-title">{t.contactTitle}</h2>
          <p>{t.contactBody}</p>
          <a className={styles.primary} href={`mailto:${studioLinks.email}`}>{t.contactCta}<span aria-hidden="true">↗</span></a>
          <span className={styles.mail}>{studioLinks.email}</span>
        </section>
      </main>

      <footer className={styles.footer}>
        <div><a className={styles.wordmark} href="#top">SkrrrrLabs</a><p>{t.footerDescriptor}</p></div>
        <div className={styles.footerLinks}>
          <a href="/market">Market Research</a><a href="/research">Archive</a><a href="/platforms">Partner Platforms (EN)</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a>
        </div>
        <span className={styles.copy}>© {new Date().getFullYear()} SkrrrrLabs</span>
      </footer>
    </div>
  );
}
