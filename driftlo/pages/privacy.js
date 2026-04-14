import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Section = ({ title, children }) => (
  <div style={{ marginBottom: '40px' }}>
    <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: '700', color: '#0a0f1e', marginBottom: '12px' }}>{title}</h2>
    <div style={{ fontSize: '15px', color: '#475569', lineHeight: 1.8 }}>{children}</div>
  </div>
);

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Driftlo</title>
        <meta name="description" content="Driftlo Privacy Policy. Learn how we collect, use and protect your personal information." />
      </Head>
      <Navbar />
      <main style={{ maxWidth: '760px', margin: '0 auto', padding: '64px 24px' }}>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: '40px', fontWeight: '800', color: '#0a0f1e', marginBottom: '8px' }}>Privacy Policy</h1>
        <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '48px' }}>Last updated: April 13, 2026</p>

        <Section title="1. Introduction">
          <p>Welcome to Driftlo ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website driftlo.com and use our services.</p>
        </Section>

        <Section title="2. Information We Collect">
          <p style={{ marginBottom: '12px' }}>We may collect information about you in a variety of ways including:</p>
          <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><strong>Personal Data:</strong> Name, email address, and contact preferences you voluntarily provide.</li>
            <li><strong>Usage Data:</strong> Pages visited, search queries, time spent on pages, and links clicked.</li>
            <li><strong>Device Data:</strong> IP address, browser type, operating system, and device identifiers.</li>
            <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to improve your experience.</li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Information">
          <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>To provide, operate, and improve our platform and services</li>
            <li>To personalize your experience and deliver relevant search results</li>
            <li>To send you price alerts and updates you have opted into</li>
            <li>To analyze usage patterns and improve our platform</li>
            <li>To comply with legal obligations and enforce our terms</li>
            <li>To facilitate affiliate referrals to partner booking platforms</li>
          </ul>
        </Section>

        <Section title="4. Affiliate Partnerships">
          <p>Driftlo participates in affiliate programs with third-party booking platforms including Booking.com, Expedia/VRBO, and others. When you click a link to a partner platform and make a booking, we may receive a referral commission. These partners have their own privacy policies governing the data you provide when completing a booking on their platforms.</p>
        </Section>

        <Section title="5. Sharing Your Information">
          <p style={{ marginBottom: '12px' }}>We do not sell your personal information. We may share information with:</p>
          <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our platform.</li>
            <li><strong>Analytics Partners:</strong> To help us understand usage patterns (e.g. Google Analytics).</li>
            <li><strong>Legal Authorities:</strong> When required by law or to protect our rights.</li>
          </ul>
        </Section>

        <Section title="6. Cookies and Tracking">
          <p>We use cookies to enhance your experience. You can control cookies through your browser settings. Disabling cookies may affect some platform functionality. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device).</p>
        </Section>

        <Section title="7. Data Retention">
          <p>We retain personal data only as long as necessary to provide our services and comply with legal obligations. Search query data is anonymized after 90 days. You may request deletion of your personal data at any time.</p>
        </Section>

        <Section title="8. Your Rights">
          <p style={{ marginBottom: '12px' }}>Depending on your location, you may have the right to:</p>
          <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your personal data</li>
            <li>Object to or restrict processing of your data</li>
            <li>Data portability (receive your data in a structured format)</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </Section>

        <Section title="9. Children's Privacy">
          <p>Driftlo is not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected data from a minor, please contact us immediately.</p>
        </Section>

        <Section title="10. Contact Us">
          <p>If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at: <strong>privacy@driftlo.com</strong></p>
        </Section>
      </main>
      <Footer />
    </>
  );
}
