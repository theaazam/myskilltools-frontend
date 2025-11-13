'use client';

import Link from 'next/link';

// सभी टूल्स की लिस्ट – यहाँ नया टूल ऐड करो!
const TOOLS = [
  { name: 'Calculator', path: '/tools/calculator', icon: 'Calculator', color: '#4ecdc4' },
  { name: 'QR Generator', path: '/tools/qr-generator', icon: 'QR', color: '#ff6b6b' },
  { name: 'PDF Editor', path: '/tools/pdf-editor', icon: 'PDF', color: '#667eea' },
  { name: 'PDF Compressor', path: '/tools/pdf-compress', icon: 'Compress', color: '#feb47b' },
  { name: 'Auth QR', path: '/tools/auth-qr', icon: 'Lock', color: '#38ef7d' }
];

export default function ToolsHub() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f2027 0%, #203a43 100%)',
      color: 'white',
      padding: '100px 20px 60px',
      fontFamily: '"Segoe UI", Arial, sans-serif'
    }}>
      {/* Navbar */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        background: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(10px)',
        padding: '15px', display: 'flex', justifyContent: 'center', gap: '30px',
        fontSize: '1.1rem', zIndex: 1000
      }}>
        <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        <Link href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About Us</Link>
        <Link href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact Us</Link>
      </nav>

      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.8rem', marginBottom: '20px' }}>Tools Hub</h1>
        <p style={{ fontSize: '1.4rem', marginBottom: '40px', opacity: 0.9 }}>
          Choose a tool to get started
        </p>

        {/* Tools Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '25px'
        }}>
          {TOOLS.map(tool => (
            <Link key={tool.path} href={tool.path} style={{ textDecoration: 'none' }}>
              <div style={{
                background: `linear-gradient(135deg, ${tool.color}, ${tool.color}dd)`,
                padding: '30px 20px',
                borderRadius: '20px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'translateY(-12px)'}
              onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '2rem', marginBottom: '15px' }}>{tool.icon}</div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#fff' }}>{tool.name}</h3>
              </div>
            </Link>
          ))}
        </div>

        <Link href="/" style={{
          display: 'inline-block', marginTop: '40px',
          color: '#38ef7d', fontWeight: 'bold', textDecoration: 'none'
        }}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}