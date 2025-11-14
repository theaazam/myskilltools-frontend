'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Top Navbar */}
      <nav style={{
        background: 'rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        padding: '15px 20px',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        fontFamily: 'Arial, sans-serif',
        fontWeight: '600',
        fontSize: '1.1rem',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
      }}>
        <Link href="/" style={{ color: '#fff', textDecoration: 'none', transition: '0.3s' }}
          onMouseOver={e => e.currentTarget.style.color = '#38ef7d'}
          onMouseOut={e => e.currentTarget.style.color = '#fff'}>
          Home
        </Link>
        <Link href="/about" style={{ color: '#fff', textDecoration: 'none', transition: '0.3s' }}
          onMouseOver={e => e.currentTarget.style.color = '#feb47b'}
          onMouseOut={e => e.currentTarget.style.color = '#fff'}>
          About Us
        </Link>
        <Link href="/contact" style={{ color: '#fff', textDecoration: 'none', transition: '0.3s' }}
          onMouseOver={e => e.currentTarget.style.color = '#764ba2'}
          onMouseOut={e => e.currentTarget.style.color = '#fff'}>
          Contact Us
        </Link>
      </nav>

      {/* Main Content */}
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontFamily: '"Segoe UI", Arial, sans-serif',
        padding: '100px 20px 60px',
        textAlign: 'center'
      }}>

        {/* Title */}
        <h1 style={{
          fontSize: '4.5rem',
          fontWeight: '900',
          margin: '0 0 16px',
          background: 'linear-gradient(45deg, #38ef7d, #11998e)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 6px 20px rgba(0,0,0,0.3)'
        }}>
          MySkillTools
        </h1>
        <p style={{
          fontSize: '1.5rem',
          margin: '0 0 70px',
          opacity: 0.9,
          fontWeight: '300'
        }}>
          Your All-in-One Skill Hub for Exams & Tools
        </p>

        {/* Feature Buttons - 2 Buttons (Center) */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          width: '100%',
          maxWidth: '450px'
        }}>

          {/* SkillVault Button */}
          <Link href="/skillvault" style={{ textDecoration: 'none' }}>
            <div style={{
              background: 'linear-gradient(45deg, #ff6b6b, #ee5a52)',
              color: 'white',
              padding: '45px 25px',
              borderRadius: '20px',
              fontSize: '2rem',
              fontWeight: 'bold',
              textAlign: 'center',
              boxShadow: '0 15px 40px rgba(255,107,107,0.5)',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              border: '3px solid rgba(255,255,255,0.15)'
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 25px 60px rgba(255,107,107,0.7)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(255,107,107,0.5)';
            }}
            >
              <div style={{ fontSize: '4.5rem', marginBottom: '10px' }}>SkillVault</div>
              <div style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                Mock Tests • Challenges • Leaderboard
              </div>
            </div>
          </Link>

          {/* Tools Button */}
          <Link href="/tools" style={{ textDecoration: 'none' }}>
            <div style={{
              background: 'linear-gradient(45deg, #4ecdc4, #44a49d)',
              color: 'white',
              padding: '45px 25px',
              borderRadius: '20px',
              fontSize: '2rem',
              fontWeight: 'bold',
              textAlign: 'center',
              boxShadow: '0 15px 40px rgba(78,205,196,0.5)',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              border: '3px solid rgba(255,255,255,0.15)'
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 25px 60px rgba(78,205,196,0.7)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(78,205,196,0.5)';
            }}
            >
              <div style={{ fontSize: '4.5rem', marginBottom: '10px' }}>Tools</div>
              <div style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                Calculator • QR • Converter • More
              </div>
            </div>
          </Link>

        </div>

        {/* Footer */}
        <footer style={{
          marginTop: '90px',
          fontSize: '1rem',
          opacity: 0.7,
          fontWeight: '300'
        }}>
          © 2025 MySkillTools.in • Made with ❤️ for Students
        </footer>
      </div>
    </>
  );
}