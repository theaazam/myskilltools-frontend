'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  // कोई टाइप नहीं → कोई एरर नहीं!
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    setTimeout(() => {
      setStatus('Message sent! We\'ll reply soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '100px 20px 60px',
      fontFamily: '"Segoe UI", Arial, sans-serif'
    }}>
      {/* Navbar */}
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
        <Link href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About Us</Link>
        <Link href="/contact" style={{ color: '#a29bfe', textDecoration: 'none', fontWeight: 'bold' }}>Contact Us</Link>
      </nav>

      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', color: '#a29bfe' }}>
          Get in Touch
        </h1>
        <p style={{ fontSize: '1.3rem', marginBottom: '40px', opacity: 0.9 }}>
          कोई सवाल? फीडबैक? हम 24/7 यहाँ हैं!
        </p>

        <form onSubmit={handleSubmit} style={{
          background: 'rgba(255,255,255,0.1)',
          padding: '30px',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          textAlign: 'left'
        }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '12px',
                border: 'none',
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                fontSize: '1rem',
                outline: 'none'
              }}
              placeholder="Your Name"
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '12px',
                border: 'none',
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                fontSize: '1rem',
                outline: 'none'
              }}
              placeholder="you@example.com"
            />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '12px',
                border: 'none',
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                fontSize: '1rem',
                outline: 'none',
                resize: 'none'
              }}
              placeholder="Your message..."
            />
          </div>

          <button type="submit" style={{
            width: '100%',
            padding: '14px',
            background: '#38ef7d',
            color: '#000',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            borderRadius: '50px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(56,239,125,0.4)',
            transition: '0.3s'
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'}
          onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Send Message
          </button>

          {status && (
            <p style={{
              marginTop: '20px',
              fontSize: '1.1rem',
              color: status.includes('sent') ? '#38ef7d' : '#fff'
            }}>
              {status}
            </p>
          )}
        </form>

        <Link href="/" style={{
          display: 'inline-block',
          marginTop: '30px',
          color: '#feb47b',
          fontWeight: 'bold',
          textDecoration: 'none'
        }}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}