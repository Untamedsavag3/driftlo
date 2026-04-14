import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #e5e7eb',
      boxShadow: '0 1px 12px rgba(0,0,0,0.06)',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '0 24px', height: '68px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Link href="/" style={{ fontFamily: "'Syne', sans-serif", fontSize: '22px', fontWeight: '800', letterSpacing: '-.02em' }}>
          <span style={{ color: '#6366f1' }}>Drift</span>
          <span style={{ color: '#0f172a' }}>lo</span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Link href="/search" style={{
            padding: '9px 18px', borderRadius: '10px', fontSize: '14px',
            fontWeight: '600', color: '#475569', transition: 'color .15s',
          }}>Search</Link>
          <Link href="/about" style={{
            padding: '9px 18px', borderRadius: '10px', fontSize: '14px',
            fontWeight: '600', color: '#475569',
          }}>About</Link>
          <Link href="/search" style={{
            padding: '9px 20px', background: '#6366f1', color: 'white',
            borderRadius: '10px', fontSize: '14px', fontWeight: '700',
            boxShadow: '0 4px 12px rgba(99,102,241,.3)',
          }}>Find Stays</Link>
        </div>
      </div>
    </nav>
  );
}
