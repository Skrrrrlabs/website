import LegalPage from '../components/LegalPage';

export default function Terms() {
  return <LegalPage eyebrow="Terms" title="Terms of Use" intro="By using this website, you agree to use its research and links for lawful informational purposes." sections={[
    { heading: 'Research publication', body: 'Content is provided as-is for research and education. SkrrrrLabs does not provide investment, legal, tax, or financial advice and does not manage client capital.' },
    { heading: 'Availability and ownership', body: 'Content, links, and services may change or become unavailable without notice. The website’s original text and design belong to SkrrrrLabs unless otherwise noted.' },
  ]} />;
}
