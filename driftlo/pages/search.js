import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PLATFORM_COLORS = { airbnb: '#FF5A5F', vrbo: '#1B6FEE', booking: '#003580', hipcamp: '#2E7D32', vacasa: '#7B2FBE' };
const PLATFORM_NAMES = { airbnb: 'Airbnb', vrbo: 'VRBO', booking: 'Booking.com', hipcamp: 'Hipcamp', vacasa: 'Vacasa' };

const LISTINGS = [
  { id: 1, title: 'Cliffside Villa with Infinity Pool', location: 'Santorini, Greece', type: 'Villa', beds: 4, guests: 8, img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80', prices: { airbnb: 420, vrbo: 395, booking: 410 }, rating: 4.97, reviews: 312 },
  { id: 2, title: 'Mossy Treehouse in the Redwoods', location: 'Humboldt, California', type: 'Treehouse', beds: 1, guests: 2, img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&q=80', prices: { airbnb: 195, hipcamp: 165, vrbo: 185 }, rating: 4.93, reviews: 187 },
  { id: 3, title: 'Desert Adobe Compound', location: 'Taos, New Mexico', type: 'House', beds: 3, guests: 6, img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80', prices: { airbnb: 310, vrbo: 290, vacasa: 305, booking: 315 }, rating: 4.99, reviews: 95 },
  { id: 4, title: 'Floating Cabin on the Fjord', location: 'Flåm, Norway', type: 'Houseboat', beds: 2, guests: 4, img: 'https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?w=700&q=80', prices: { airbnb: 275, booking: 258, vrbo: 270 }, rating: 4.91, reviews: 143 },
  { id: 5, title: 'Converted Lighthouse Suite', location: 'Cape Cod, Massachusetts', type: 'Unique', beds: 2, guests: 4, img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&q=80', prices: { airbnb: 385, vrbo: 360, vacasa: 370 }, rating: 4.88, reviews: 221 },
  { id: 6, title: 'Jungle Canopy Bungalow', location: 'Ubud, Bali', type: 'Bungalow', beds: 1, guests: 2, img: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=700&q=80', prices: { airbnb: 145, booking: 130, vrbo: 140 }, rating: 4.96, reviews: 408 },
];

const minPrice = l => Math.min(...Object.values(l.prices));
const bestPlatform = l => Object.entries(l.prices).reduce((a, b) => b[1] < a[1] ? b : a)[0];
const savings = l => Math.max(...Object.values(l.prices)) - minPrice(l);

export default function Search() {
  const [search, setSearch] = useState('');
  const [maxPrice, setMaxPrice] = useState(500);
  const [saved, setSaved] = useState(new Set());
  const [selected, setSelected] = useState(null);

  const filtered = LISTINGS.filter(l =>
    (search === '' || l.title.toLowerCase().includes(search.toLowerCase()) || l.location.toLowerCase().includes(search.toLowerCase())) &&
    minPrice(l) <= maxPrice
  );

  const toggleSave = id => setSaved(s => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; });

  return (
    <>
      <Head>
        <title>Search Rentals — Driftlo</title>
        <meta name="description" content="Search and compare short-term rentals across Airbnb, VRBO, Booking.com and more. Find the best price instantly." />
      </Head>
      <Navbar />

      {/* Search Header */}
      <div style={{ background: '#0a0f1e', padding: '32px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: '28px', fontWeight: '800', color: 'white', marginBottom: '16px' }}>
            Find your perfect stay
          </h1>
          <div style={{
            display: 'flex', background: 'white', borderRadius: '12px',
            padding: '6px 6px 6px 16px', boxShadow: '0 8px 32px rgba(0,0,0,.3)',
          }}>
            <input
              value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search destinations, property types..."
              style={{ flex: 1, border: 'none', outline: 'none', fontSize: '15px', color: '#0f172a', background: 'transparent', padding: '6px 0' }}
            />
            <button style={{ background: '#6366f1', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 24px', fontSize: '14px', fontWeight: '700' }}>
              Search
            </button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px', display: 'grid', gridTemplateColumns: '260px 1fr', gap: '32px' }}>
        {/* Filters */}
        <aside>
          <div style={{ background: 'white', borderRadius: '16px', padding: '24px', border: '1px solid #e5e7eb', position: 'sticky', top: '88px' }}>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: '16px', fontWeight: '700', color: '#0a0f1e', marginBottom: '20px' }}>Filters</h3>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ fontSize: '12px', fontWeight: '700', color: '#64748b', letterSpacing: '.05em', display: 'block', marginBottom: '10px' }}>MAX PRICE / NIGHT</label>
              <input type="range" min="50" max="500" step="10" value={maxPrice}
                onChange={e => setMaxPrice(+e.target.value)}
                style={{ width: '100%', accentColor: '#6366f1' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#64748b', marginTop: '6px' }}>
                <span>$50</span><span style={{ fontWeight: '700', color: '#6366f1' }}>${maxPrice}</span><span>$500</span>
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ fontSize: '12px', fontWeight: '700', color: '#64748b', letterSpacing: '.05em', display: 'block', marginBottom: '10px' }}>PLATFORMS</label>
              {Object.entries(PLATFORM_NAMES).map(([k, v]) => (
                <label key={k} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', cursor: 'pointer' }}>
                  <input type="checkbox" defaultChecked style={{ accentColor: PLATFORM_COLORS[k] }} />
                  <span style={{ fontSize: '14px', color: '#334155' }}>{v}</span>
                </label>
              ))}
            </div>

            <div>
              <label style={{ fontSize: '12px', fontWeight: '700', color: '#64748b', letterSpacing: '.05em', display: 'block', marginBottom: '10px' }}>PROPERTY TYPE</label>
              {['Any', 'Villa', 'Cabin', 'Treehouse', 'Houseboat', 'Bungalow'].map(t => (
                <label key={t} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', cursor: 'pointer' }}>
                  <input type="radio" name="type" defaultChecked={t === 'Any'} style={{ accentColor: '#6366f1' }} />
                  <span style={{ fontSize: '14px', color: '#334155' }}>{t}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Results */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <p style={{ color: '#64748b', fontSize: '15px' }}><strong style={{ color: '#0f172a' }}>{filtered.length} stays</strong> found</p>
            <select style={{ padding: '8px 14px', border: '1.5px solid #e5e7eb', borderRadius: '8px', fontSize: '13px', color: '#475569', outline: 'none' }}>
              <option>Sort: Biggest Savings</option>
              <option>Sort: Price Low to High</option>
              <option>Sort: Top Rated</option>
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            {filtered.map(l => {
              const best = bestPlatform(l);
              const save = savings(l);
              const isSaved = saved.has(l.id);
              return (
                <div key={l.id} onClick={() => setSelected(l)} style={{
                  background: 'white', borderRadius: '16px', overflow: 'hidden',
                  border: '1px solid #e5e7eb', cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0,0,0,.05)', transition: 'all .2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(99,102,241,.15)'; e.currentTarget.style.borderColor = '#a5b4fc'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,.05)'; e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.transform = 'none'; }}
                >
                  <div style={{ position: 'relative', height: '180px' }}>
                    <img src={l.img} alt={l.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    {save > 0 && <div style={{ position: 'absolute', top: '10px', left: '10px', background: '#10b981', color: 'white', fontSize: '11px', fontWeight: '700', padding: '3px 10px', borderRadius: '20px' }}>Save ${save}</div>}
                    <button onClick={e => { e.stopPropagation(); toggleSave(l.id); }} style={{
                      position: 'absolute', top: '10px', right: '10px',
                      background: 'rgba(255,255,255,.9)', border: 'none', borderRadius: '50%',
                      width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px',
                    }}>{isSaved ? '❤️' : '🤍'}</button>
                  </div>
                  <div style={{ padding: '16px' }}>
                    <div style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', marginBottom: '2px', lineHeight: 1.2 }}>{l.title}</div>
                    <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '10px' }}>{l.location} · {l.beds} beds · {l.guests} guests</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                      <div>
                        <div style={{ fontSize: '11px', color: '#94a3b8' }}>from</div>
                        <div style={{ fontSize: '22px', fontWeight: '800', color: '#6366f1', lineHeight: 1 }}>${minPrice(l)}</div>
                        <div style={{ fontSize: '11px', color: '#94a3b8' }}>/night on {PLATFORM_NAMES[best]}</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px' }}>
                        <span style={{ color: '#f59e0b' }}>★</span>
                        <strong>{l.rating}</strong>
                        <span style={{ color: '#94a3b8' }}>({l.reviews})</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Listing Modal */}
      {selected && (
        <div onClick={() => setSelected(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200, padding: '20px', backdropFilter: 'blur(4px)' }}>
          <div onClick={e => e.stopPropagation()} style={{ background: 'white', borderRadius: '20px', width: '100%', maxWidth: '720px', maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 40px 80px rgba(0,0,0,.3)' }}>
            <div style={{ position: 'relative', height: '280px', borderRadius: '20px 20px 0 0', overflow: 'hidden' }}>
              <img src={selected.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <button onClick={() => setSelected(null)} style={{ position: 'absolute', top: '14px', left: '14px', background: 'rgba(255,255,255,.9)', border: 'none', borderRadius: '50%', width: '34px', height: '34px', fontSize: '18px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
            </div>
            <div style={{ padding: '24px' }}>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '22px', fontWeight: '800', color: '#0a0f1e', marginBottom: '4px' }}>{selected.title}</h2>
              <p style={{ color: '#64748b', marginBottom: '20px' }}>{selected.location} · {selected.type} · {selected.beds} beds · {selected.guests} guests</p>
              <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#0a0f1e', marginBottom: '12px' }}>Compare prices across platforms</h3>
              {Object.entries(selected.prices).sort((a, b) => a[1] - b[1]).map(([platform, price]) => {
                const isBest = platform === bestPlatform(selected);
                const p = PLATFORM_COLORS[platform];
                return (
                  <div key={platform} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '12px 16px', borderRadius: '10px', marginBottom: '8px',
                    background: isBest ? '#eef2ff' : '#f8fafc',
                    border: `1.5px solid ${isBest ? '#a5b4fc' : '#e5e7eb'}`,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: p }} />
                      <span style={{ fontSize: '14px', fontWeight: isBest ? '700' : '500', color: isBest ? '#4f46e5' : '#334155' }}>
                        {PLATFORM_NAMES[platform]} {isBest && '✓ Best Price'}
                      </span>
                    </div>
                    <div>
                      <span style={{ fontSize: '20px', fontWeight: '800', color: isBest ? '#4f46e5' : '#0f172a' }}>${price}</span>
                      <span style={{ fontSize: '12px', color: '#94a3b8' }}>/night</span>
                    </div>
                  </div>
                );
              })}
              <a href="https://booking.com" target="_blank" rel="noopener noreferrer" style={{
                display: 'block', width: '100%', background: '#6366f1', color: 'white',
                padding: '14px', borderRadius: '12px', textAlign: 'center',
                fontSize: '15px', fontWeight: '700', marginTop: '16px',
                boxShadow: '0 4px 16px rgba(99,102,241,.3)',
              }}>
                Book on {PLATFORM_NAMES[bestPlatform(selected)]} →
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
