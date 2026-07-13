import LegalPage from '../components/LegalPage';

export default function RiskDisclosure() {
  return <LegalPage eyebrow="Risk disclosure" title="Risk Disclosure" intro="SkrrrrLabs publishes independent market-structure research for informational and educational purposes only." sections={[
    { heading: 'No investment advice', body: 'Nothing on this website is a recommendation, solicitation, or offer to buy or sell any asset. Research is not a substitute for your own analysis or professional advice.' },
    { heading: 'Risk and responsibility', body: 'Digital assets and derivatives can be volatile and may result in the loss of capital. There is no guarantee of accuracy, timing, or performance. Every decision remains the responsibility of the user.' },
  ]} />;
}
