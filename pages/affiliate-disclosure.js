import LegalPage from '../components/LegalPage';

export default function AffiliateDisclosure() {
  return <LegalPage eyebrow="Affiliate disclosure" title="Affiliate Disclosure" intro="Some platform links on SkrrrrLabs may support the research project at no additional cost to users." sections={[
    { heading: 'External platforms', body: 'Outbound links lead to independent third-party platforms. Availability, products, fees, and regulatory conditions vary by region and time. Review each platform’s terms before using it.' },
    { heading: 'No endorsement', body: 'A link does not represent a guarantee, endorsement of performance, or statement that a platform is suitable for every user. Compare conditions and make your own decision.' },
  ]} />;
}
