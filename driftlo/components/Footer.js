import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      background: '#0a0f1e', color: 'rgba(255,255,255,0.5)',
      padding: '48px 24px 32px',
      marginTop: '80px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '40px', marginBottom: '48px',
        }}>
          <div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '22px', fontWeight: '800', color: 'white', marginBottom: '12px' }}>
              <span style={{ color: '#6366f1' }}>Drift</span>lo
            </div>
            <p style={{ fontSize: '14px', lineHeight: 1.7, maxWidth: '260px' }}>
              The smartest way to search short-term rentals. Compare prices across Airbnb, VRBO, Booking.com, and more in one place.
            </p>
          </div>
          {[
            { title: 'Product', links: [['Search Stays', '/search'], ['How it Works', '/about'], ['Pricing', '/about']] },
            { title: 'Company', links: [['About Us', '/about'], ['Contact', '/contact'], ['Blog', '/about']] },
            { title: 'Legal', links: [['Privacy Policy', '/privacy'], ['Terms of Service', '/terms'], ['Cookie Policy', '/privacy']] },
          ].map(col => (
            <div key={col.title}>
              <div style={{ fontSize: '12px', fontWeight: '700', color: 'rgba(255,255,255,.3)', letterSpacing: '.08em', marginBottom: '14px' }}>{col.title.toUpperCase()}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {col.links.map(([label, href]) => (
                  <Link key={label} href={href} style={{ fontSize: '14px', color: 'rgba(255,255,255,.5)', transition: 'color .15s' }}
                    onMouseEnter={e => e.target.style.color = 'white'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,.5)'}
                  >{label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px' }}>
          <span>© 2026 Driftlo Inc. All rights reserved.</span>
          <span style={{ color: '#6366f1', fontWeight: '600' }}>Find anywhere. Pay less.</span>
        </div>
      </div>
    </footer>
  );
}
