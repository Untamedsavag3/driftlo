import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PLATFORMS = [
  { name: 'Airbnb', color: '#FF5A5F', logo: '🏠' },
  { name: 'VRBO', color: '#1B6FEE', logo: '🏡' },
  { name: 'Booking.com', color: '#003580', logo: '🏨' },
  { name: 'Hipcamp', color: '#2E7D32', logo: '⛺' },
  { name: 'Vacasa', color: '#7B2FBE', logo: '🏖️' },
];

const FEATURES = [
  { icon: '🔍', title: 'One Search, All Sites', desc: 'Search across Airbnb, VRBO, Booking.com, Hipcamp and Vacasa simultaneously. No more switching tabs.' },
  { icon: '💰', title: 'Best Price Guaranteed', desc: 'We show you the cheapest platform for every property. On average, users save $500 per booking.' },
  { icon: '🗺️', title: 'Interactive Map View', desc: 'Browse properties on a live map with price pins. See exactly where you\'ll be staying.' },
  { icon: '❤️', title: 'Save Your Favorites', desc: 'Create wishlists and save properties across platforms. Share with travel partners easily.' },
  { icon: '📊', title: 'Price History', desc: 'See how prices change over time and get alerts when your saved stays drop in price.' },
  { icon: '⚡', title: 'Instant Comparison', desc: 'Side-by-side price breakdown across all platforms with real fees included. No surprises.' },
];

const TESTIMONIALS = [
  { name: 'Sarah K.', location: 'New York', text: 'Found the same villa $340 cheaper on VRBO than Airbnb. Driftlo paid for our flights!', avatar: 'SK' },
  { name: 'Marco R.', location: 'London', text: 'I used to spend hours checking different sites. Now I do it in 30 seconds. Game changer.', avatar: 'MR' },
  { name: 'Amy L.', location: 'Sydney', text: 'The price comparison is incredible. Booked a Bali bungalow and saved $200 instantly.', avatar: 'AL' },
];

const avatarColors = ['#6366f1', '#ec4899', '#f59e0b'];

export default function Home() {
  return (
    <>
      <Head>
        <title>Driftlo — Compare Short-Term Rentals Across All Platforms</title>
        <meta name="description" content="Search Airbnb, VRBO, Booking.com, Hipcamp and more in one place. Find the best price on short-term rentals worldwide. Save hundreds on every booking." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Driftlo — Compare Short-Term Rentals" />
        <meta property="og:description" content="One search. All rental platforms. Best price guaranteed." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        {/* Hero */}
        <section style={{
          background: 'linear-gradient(135deg, #0a0f1e 0%, #1e1b4b 50%, #0a0f1e 100%)',
          padding: '100px 24px 80px',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Background orbs */}
          <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(99,102,241,.2) 0%, transparent 70%)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139,92,246,.15) 0%, transparent 70%)', borderRadius: '50%' }} />

          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: 'rgba(99,102,241,.15)', border: '1px solid rgba(99,102,241,.3)',
              borderRadius: '20px', padding: '6px 16px', marginBottom: '28px',
            }}>
              <span style={{ fontSize: '12px', color: '#a5b4fc', fontWeight: '700', letterSpacing: '.06em' }}>✦ NOW COMPARING 5 PLATFORMS</span>
            </div>

            <h1 style={{
              fontFamily: "'Syne', sans-serif", fontSize: '64px', fontWeight: '800',
              color: 'white', lineHeight: 1.05, letterSpacing: '-.03em', marginBottom: '24px',
            }}>
              Stop overpaying<br/>
              <span style={{ background: 'linear-gradient(135deg, #6366f1, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                for the same rental
              </span>
            </h1>

            <p style={{ fontSize: '20px', color: 'rgba(255,255,255,.65)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 40px' }}>
              Search Airbnb, VRBO, Booking.com and more in one place. We find you the cheapest platform for every property.
            </p>

            {/* Search bar */}
            <div style={{
              display: 'flex', background: 'white', borderRadius: '16px',
              padding: '8px 8px 8px 20px', maxWidth: '640px', margin: '0 auto 16px',
              boxShadow: '0 24px 48px rgba(0,0,0,.3)',
            }}>
              <input
                placeholder="Where do you want to go?"
                style={{
                  flex: 1, border: 'none', outline: 'none', fontSize: '16px',
                  color: '#0f172a', background: 'transparent', padding: '4px 0',
                }}
              />
              <Link href="/search" style={{
                background: '#6366f1', color: 'white', border: 'none',
                borderRadius: '10px', padding: '12px 28px', fontSize: '15px',
                fontWeight: '700', display: 'flex', alignItems: 'center',
                boxShadow: '0 4px 12px rgba(99,102,241,.4)',
              }}>
                Search →
              </Link>
            </div>

            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.4)' }}>
              🔥 Over 2 million properties across 190 countries
            </div>
          </div>
        </section>

        {/* Platform logos */}
        <section style={{ background: 'white', padding: '32px 24px', borderBottom: '1px solid #e5e7eb' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '13px', color: '#94a3b8', fontWeight: '600', marginRight: '8px' }}>Comparing prices from</span>
            {PLATFORMS.map(p => (
              <div key={p.name} style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '8px 16px', borderRadius: '20px',
                background: '#f8fafc', border: '1px solid #e5e7eb',
              }}>
                <span>{p.logo}</span>
                <span style={{ fontSize: '13px', fontWeight: '700', color: p.color }}>{p.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '40px', fontWeight: '800', color: '#0a0f1e', marginBottom: '14px' }}>
              Why travelers love Driftlo
            </h2>
            <p style={{ fontSize: '17px', color: '#64748b', maxWidth: '500px', margin: '0 auto' }}>
              Everything you need to find the perfect stay at the best price.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {FEATURES.map(f => (
              <div key={f.title} style={{
                background: 'white', borderRadius: '20px', padding: '28px',
                border: '1px solid #e5e7eb', boxShadow: '0 2px 12px rgba(0,0,0,.04)',
                transition: 'transform .2s, box-shadow .2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(99,102,241,.12)'; e.currentTarget.style.borderColor = '#a5b4fc'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,.04)'; e.currentTarget.style.borderColor = '#e5e7eb'; }}
              >
                <div style={{ fontSize: '32px', marginBottom: '14px' }}>{f.icon}</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '18px', fontWeight: '700', color: '#0a0f1e', marginBottom: '8px' }}>{f.title}</h3>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Savings CTA */}
        <section style={{
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          padding: '80px 24px', textAlign: 'center',
        }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>💰</div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '40px', fontWeight: '800', color: 'white', marginBottom: '14px' }}>
              Average savings: $500 per booking
            </h2>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,.8)', marginBottom: '32px', lineHeight: 1.6 }}>
              The same property is listed at different prices on every platform. Driftlo finds you the cheapest one instantly.
            </p>
            <Link href="/search" style={{
              display: 'inline-block', background: 'white', color: '#6366f1',
              padding: '16px 40px', borderRadius: '14px', fontSize: '16px',
              fontWeight: '800', boxShadow: '0 8px 32px rgba(0,0,0,.2)',
            }}>
              Start Saving Now →
            </Link>
          </div>
        </section>

        {/* Testimonials */}
        <section style={{ padding: '80px 24px', maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '36px', fontWeight: '800', color: '#0a0f1e', textAlign: 'center', marginBottom: '48px' }}>
            Loved by travelers worldwide
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} style={{
                background: 'white', borderRadius: '20px', padding: '28px',
                border: '1px solid #e5e7eb', boxShadow: '0 2px 12px rgba(0,0,0,.04)',
              }}>
                <div style={{ fontSize: '20px', color: '#f59e0b', marginBottom: '14px' }}>★★★★★</div>
                <p style={{ fontSize: '15px', color: '#334155', lineHeight: 1.6, marginBottom: '20px', fontStyle: 'italic' }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '50%',
                    background: avatarColors[i], display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '13px', fontWeight: '700', color: 'white',
                  }}>{t.avatar}</div>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '14px', color: '#0f172a' }}>{t.name}</div>
                    <div style={{ fontSize: '12px', color: '#94a3b8' }}>{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
