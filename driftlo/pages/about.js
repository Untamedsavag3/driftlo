import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>About Driftlo — Our Mission</title>
        <meta name="description" content="Driftlo is a short-term rental aggregator that compares prices across Airbnb, VRBO, Booking.com and more. Our mission is to help travelers find the best deals." />
      </Head>
      <Navbar />
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: '48px', fontWeight: '800', color: '#0a0f1e', marginBottom: '16px' }}>
            About Driftlo
          </h1>
          <p style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.7 }}>
            We believe everyone deserves to find the best price on their next stay — without spending hours comparing tabs.
          </p>
        </div>

        {[
          { title: 'Our Mission', text: 'Driftlo was built out of frustration. After discovering the same Airbnb property listed at wildly different prices across platforms, we knew there had to be a better way. Our mission is simple: show travelers every platform price in one place, instantly.' },
          { title: 'How It Works', text: 'We aggregate listings from Airbnb, VRBO, Booking.com, Hipcamp, and Vacasa. When you search for a property, we fetch real-time prices from all platforms and rank them from cheapest to most expensive. You click, we redirect you directly to the platform to book.' },
          { title: 'For Partners', text: 'We partner with rental platforms through official affiliate programs. When a user clicks through to a partner platform and books, we earn a referral commission. This keeps Driftlo free for travelers while rewarding our platform partners with qualified bookings.' },
        ].map(s => (
          <div key={s.title} style={{ marginBottom: '48px' }}>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '24px', fontWeight: '700', color: '#0a0f1e', marginBottom: '12px' }}>{s.title}</h2>
            <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.8 }}>{s.text}</p>
          </div>
        ))}

        <div style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', borderRadius: '20px', padding: '40px', textAlign: 'center', color: 'white' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '800', marginBottom: '12px' }}>Ready to save on your next trip?</h2>
          <p style={{ opacity: .85, marginBottom: '24px' }}>Join thousands of travelers already using Driftlo.</p>
          <Link href="/search" style={{ display: 'inline-block', background: 'white', color: '#6366f1', padding: '14px 32px', borderRadius: '12px', fontSize: '15px', fontWeight: '800' }}>
            Search Stays →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
