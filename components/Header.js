import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Header({ lang, setLang, links }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <header className={styles.header}>
      <a className={styles.wordmark} href="#top" aria-label="SkrrrrLabs home">SkrrrrLabs</a>
      <nav id="primary-nav" className={`${styles.nav} ${open ? styles.navOpen : ''}`} aria-label="Primary navigation">
        {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
      </nav>
      <div className={styles.headerActions}>
        <button className={styles.menuButton} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-nav"><span className={styles.menuIcon} aria-hidden="true">{open ? '×' : '☰'}</span><span className={styles.srOnly}>{open ? 'Close menu' : 'Open menu'}</span></button>
      </div>
    </header>
  );
}
