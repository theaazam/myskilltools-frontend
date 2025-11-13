'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function QRGenerator() {
  const [text, setText] = useState('');
  const [qrUrl, setQrUrl] = useState('');

  const generateQR = () => {
    if (text.trim()) {
      setQrUrl(`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(text)}`);
    }
  };

  const downloadQR = () => {
    if (!qrUrl) return;

    // PNG डाउनलोड करो
    fetch(qrUrl)
      .then(res => res.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `qr-code-${Date.now()}.png`;
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(() => alert('Download failed!'));
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)',
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
        <Link href="/tools" style={{ color: '#fff', textDecoration: 'none' }}>Tools</Link>
      </nav>

      <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '30px' }}>QR Code Generator</h1>

        {/* Input + Generate */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Enter text or URL"
            style={{
              flex: 1,
              padding: '15px',
              borderRadius: '12px',
              border: 'none',
              fontSize: '1.1rem',
              background: 'rgba(255,255,255,0.2)',
              color: 'white'
            }}
          />
          <button
            onClick={generateQR}
            style={{
              padding: '15px 25px',
              background: '#fff',
              color: '#000',
              border: 'none',
              borderRadius: '12px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Generate
          </button>
        </div>

        {/* QR Code + Buttons */}
        {qrUrl && (
          <div>
            <img 
              src={qrUrl} 
              alt="QR Code" 
              style={{ 
                borderRadius: '12px', 
                maxWidth: '100%', 
                marginBottom: '20px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
              }} 
            />
            
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
              {/* डाउनलोड बटन – Link नहीं! */}
              <button
                onClick={downloadQR}
                style={{
                  padding: '12px 30px',
                  background: '#38ef7d',
                  color: '#000',
                  border: 'none',
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  boxShadow: '0 6px 20px rgba(56,239,125,0.4)'
                }}
              >
                Download QR
              </button>

              {/* कॉपी टेक्स्ट */}
              <button
                onClick={() => navigator.clipboard.writeText(text)}
                style={{
                  padding: '12px 30px',
                  background: '#764ba2',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                Copy Text
              </button>
            </div>
          </div>
        )}

        {/* Back to Tools */}
        <Link href="/tools" style={{
          display: 'block',
          marginTop: '40px',
          color: '#fff',
          fontWeight: 'bold',
          textDecoration: 'none',
          fontSize: '1.1rem'
        }}>
          Back to Tools
        </Link>
      </div>
    </div>
  );
}