// src/app/page.jsx
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '3.5rem', marginBottom: '10px' }}>MySkillTools</h1>
      <p style={{ fontSize: '1.3rem', marginBottom: '40px' }}>Your all-in-one learning platform</p>
      
      <Link href="/skillvault" style={{
        padding: '16px 40px',
        background: '#38ef7d',
        color: '#000',
        borderRadius: '50px',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        boxShadow: '0 8px 25px rgba(56, 239, 125, 0.3)'
      }}>
        Go to SkillVault
      </Link>
    </div>
  );
}