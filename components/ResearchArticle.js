import Link from 'next/link';
import ResearchLayout from './ResearchLayout';
import styles from '../styles/Research.module.css';

export default function ResearchArticle({ article }) {
  const canonical = `https://skrrrrlabs.com/research/${article.slug}`;

  return (
    <ResearchLayout title={`${article.title} | SkrrrrLabs`} description={article.metaDescription} canonical={canonical}>
      <main>
        <article>
          <header className={styles.articleHero}>
            <div className={styles.articleMeta}>
              <span>{article.eyebrow}</span>
              <span>{article.status}</span>
              <span>UPDATED {article.updated}</span>
            </div>
            <h1>{article.title}</h1>
            <p>{article.dek}</p>
          </header>

          <section className={styles.factStrip} aria-label="Research facts">
            {article.facts.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </section>

          <div className={styles.articleBody}>
            <aside>
              <p>PUBLIC NOTE</p>
              <span>This document describes research scope and validation state. It does not disclose executable rules or current market candidates.</span>
            </aside>
            <div className={styles.articleSections}>
              {article.sections.map((section, index) => (
                <section key={section.heading}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h2>{section.heading}</h2>
                    <p>{section.body}</p>
                  </div>
                </section>
              ))}
            </div>
          </div>

          <nav className={styles.articleEnd} aria-label="Research archive">
            <Link href="/research">Back to Research Index</Link>
            <Link href="/research/methodology">Read the Methodology</Link>
          </nav>
        </article>
      </main>
    </ResearchLayout>
  );
}

