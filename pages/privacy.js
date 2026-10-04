import LegalPage from '../components/LegalPage';

export default function Privacy() {
  return <LegalPage eyebrow="Privacy" title="Privacy" intro="SkrrrrLabs is designed as a research publication and does not require an account to read the website." sections={[
    { heading: 'Information you provide', body: 'If you contact us by email, we receive the information you choose to include and use it to respond to your message. We retain correspondence only as reasonably necessary.' },
    { heading: 'Visit statistics', body: 'This website uses Vercel Web Analytics to count visits in aggregate, such as pages viewed, referring sites, country and device type. It does not use cookies and does not identify individual visitors.' },
    { heading: 'Third parties', body: 'External platforms and services linked from this website may collect information under their own policies. Review those policies before visiting or using them.' },
  ]} />;
}
