'use client';

import Link from 'next/link';

const TESTS = [
  { id: 1, title: 'Maths Mock Test #1', time: '10 min', questions: 10, href: '/skillvault/test/1' },
  { id: 2, title: 'Science Quiz', time: '15 min', questions: 15, href: '/skillvault/test/2' },
  { id: 3, title: 'GK Challenge', time: '8 min', questions: 8, href: '/skillvault/test/3' },
  { id: 4, title: 'Miscellaneous Tools', time: '', questions: '', href: '/miscellaneous', isTool: true }
];

export default function SkillVault() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f2027 0%, #203a43 100%)',
      color: 'white',
      padding: '100px 20px 60px',
      fontFamily: '"Segoe UI", Arial, sans-serif'
    }}>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        background: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(10px)',
        padding: '15px', display: 'flex', justifyContent: 'center', gap: '30px',
        fontSize: '1.1rem', zIndex: 1000
      }}>
        <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        <Link href="/tools" style={{ color: '#fff', textDecoration: 'none' }}>Tools</Link>
      </nav>

      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>SkillVault</h1>
        <p style={{ fontSize: '1.3rem', marginBottom: '40px', opacity: 0.9 }}>
          Practice with real mock tests
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>
          {TESTS.map(test => (
            <Link key={test.id} href={`/skillvault/test/${test.id}`} style={{ textDecoration: 'none' }}>
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '25px',
                borderRadius: '16px',
                textAlign: 'center',
                boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                transition: 'all 0.3s',
                backdropFilter: 'blur(5px)'
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <h3 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>{test.title}</h3>
                <p>{test.questions} Questions • {test.time}</p>
                <button style={{
                  marginTop: '15px',
                  padding: '10px 25px',
                  background: '#38ef7d',
                  color: '#000',
                  border: 'none',
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}>
                  Start Test
                </button>
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