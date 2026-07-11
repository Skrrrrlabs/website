import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Header({ lang, setLang, labels }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const links = [
    ['#research', labels.research], ['#markets', labels.markets], ['#framework', labels.framework],
    ['#systems', labels.systems], ['#principles', labels.principles], ['#partners', labels.partners], ['#contact', labels.contact],
  ];

  return (
    <header className={styles.header}>
      <a className={styles.wordmark} href="#top" aria-label="SkrrrrLabs home">SkrrrrLabs</a>
      <div className={styles.headerControls}>
        <button className={styles.langButton} onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')} aria-label={lang === 'ko' ? 'Switch to English' : '한국어로 전환'}>{lang === 'ko' ? 'EN' : 'KR'}</button>
        <button className={styles.menuButton} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-nav"><span>{open ? 'Close' : 'Menu'}</span></button>
      </div>
      <nav id="primary-nav" className={`${styles.nav} ${open ? styles.navOpen : ''}`} aria-label="Primary navigation">
        {links.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <button className={styles.desktopLang} onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')} aria-label={lang === 'ko' ? 'Switch to English' : '한국어로 전환'}>{lang === 'ko' ? 'EN' : 'KR'}</button>
      </nav>
    </header>
  );
}
