import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Section = ({ title, children }) => (
  <div style={{ marginBottom: '40px' }}>
    <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '20px', fontWeight: '700', color: '#0a0f1e', marginBottom: '12px' }}>{title}</h2>
    <div style={{ fontSize: '15px', color: '#475569', lineHeight: 1.8 }}>{children}</div>
  </div>
);

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service — Driftlo</title>
        <meta name="description" content="Driftlo Terms of Service. Read our terms and conditions for using the Driftlo platform." />
      </Head>
      <Navbar />
      <main style={{ maxWidth: '760px', margin: '0 auto', padding: '64px 24px' }}>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: '40px', fontWeight: '800', color: '#0a0f1e', marginBottom: '8px' }}>Terms of Service</h1>
        <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '48px' }}>Last updated: April 13, 2026</p>

        <Section title="1. Acceptance of Terms">
          <p>By accessing or using Driftlo ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service. Driftlo reserves the right to update these terms at any time, with notice provided on this page.</p>
        </Section>

        <Section title="2. Description of Service">
          <p>Driftlo is a price comparison and aggregation platform for short-term rental accommodations. We display pricing information from third-party booking platforms including but not limited to Airbnb, VRBO, Booking.com, Hipcamp, and Vacasa. Driftlo does not own, operate, or manage any rental properties and does not process bookings directly.</p>
        </Section>

        <Section title="3. Affiliate Disclosure">
          <p>Driftlo participates in affiliate marketing programs. When you click a link to a third-party booking platform and complete a booking, Driftlo may receive a commission from that platform. This does not affect the price you pay. All affiliate relationships are disclosed in accordance with applicable regulations.</p>
        </Section>

        <Section title="4. Accuracy of Information">
          <p>While we strive to display accurate and up-to-date pricing, Driftlo cannot guarantee the accuracy, completeness, or timeliness of any pricing information. Prices shown are sourced from third-party platforms and may change. Always verify the final price on the booking platform before completing a reservation.</p>
        </Section>

        <Section title="5. User Conduct">
          <p style={{ marginBottom: '12px' }}>You agree not to:</p>
          <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>Use the Service for any unlawful purpose or in violation of any regulations</li>
            <li>Scrape, crawl, or use automated tools to access the Service without permission</li>
            <li>Attempt to interfere with the proper functioning of the Service</li>
            <li>Misrepresent your identity or affiliation</li>
            <li>Use the Service to distribute spam or unsolicited communications</li>
          </ul>
        </Section>

        <Section title="6. Third-Party Links and Services">
          <p>Our Service contains links to third-party websites and booking platforms. Driftlo is not responsible for the content, privacy practices, or terms of these external sites. Use of third-party platforms is subject to their own terms and conditions.</p>
        </Section>

        <Section title="7. Intellectual Property">
          <p>All content, branding, logos, and materials on Driftlo are owned by or licensed to Driftlo Inc. and are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.</p>
        </Section>

        <Section title="8. Disclaimer of Warranties">
          <p>The Service is provided "as is" and "as available" without warranties of any kind. Driftlo does not warrant that the Service will be uninterrupted, error-free, or that pricing information will always be accurate. Your use of the Service is at your own risk.</p>
        </Section>

        <Section title="9. Limitation of Liability">
          <p>To the fullest extent permitted by law, Driftlo shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service, including but not limited to pricing discrepancies, failed bookings, or issues with third-party platforms.</p>
        </Section>

        <Section title="10. Governing Law">
          <p>These Terms shall be governed by and construed in accordance with the laws of the applicable jurisdiction, without regard to conflict of law provisions.</p>
        </Section>

        <Section title="11. Contact">
          <p>For any questions regarding these Terms of Service, please contact us at: <strong>legal@driftlo.com</strong></p>
        </Section>
      </main>
      <Footer />
    </>
  );
}
