'use client';

import Link from 'next/link';

export default function About() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      color: 'white',
      padding: '100px 20px 60px',
      fontFamily: '"Segoe UI", Arial, sans-serif',
      textAlign: 'center'
    }}>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'rgba(0,0,0,0.2)',
        backdropFilter: 'blur(10px)',
        padding: '15px',
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        fontSize: '1.1rem',
        zIndex: 1000
      }}>
        <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        <Link href="/about" style={{ color: '#feb47b', textDecoration: 'none', fontWeight: 'bold' }}>About Us</Link>
        <Link href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact Us</Link>
      </nav>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', color: '#feb47b' }}>
          About MySkillTools
        </h1>
        <p style={{ fontSize: '1.3rem', lineHeight: '1.8', marginBottom: '25px', opacity: 0.9 }}>
          <strong>MySkillTools.in</strong> एक <span style={{ color: '#38ef7d' }}>100% फ्री</span> प्लेटफॉर्म है।
        </p>
        <ul style={{ fontSize: '1.2rem', lineHeight: '2', textAlign: 'left', margin: '0 auto 30px', maxWidth: '600px' }}>
          <li> Real-time Mock Tests</li>
          <li> Free Tools</li>
          <li> Challenges & Leaderboard</li>
        </ul>
        <Link href="/" style={{
          display: 'inline-block',
          marginTop: '30px',
          padding: '12px 30px',
          background: '#38ef7d',
          color: '#000',
          borderRadius: '50px',
          fontWeight: 'bold',
          textDecoration: 'none'
        }}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}