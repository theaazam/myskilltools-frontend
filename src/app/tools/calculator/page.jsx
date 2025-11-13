'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Calculator() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('0');
  const scrollRef = useRef(null);

  // Calculate real-time
  const calculate = () => {
    if (!expression) {
      setResult('0');
      return;
    }
    try {
      const safe = expression.replace(/×/g, '*').replace(/÷/g, '/');
      const res = Function('"use strict"; return (' + safe + ')')();
      setResult(String(res));
    } catch {
      setResult('Error');
    }
  };

  useEffect(() => {
    calculate();
    // Auto-scroll to end
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, [expression]);

  const append = (char) => {
    setExpression(prev => prev + char);
  };

  const clear = () => {
    setExpression('');
  };

  const backspace = () => {
    setExpression(prev => prev.slice(0, -1));
  };

  const download = (format) => {
    if (format === 'txt') {
      const text = `Calculation:\n${expression}\n\nResult: ${result}\n\nGenerated: ${new Date().toLocaleString()}`;
      const blob = new Blob([text], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `calculation-${Date.now()}.txt`;
      a.click();
      URL.revokeObjectURL(url);
    } else if (format === 'png') {
      import('html2canvas').then(html2canvas => {
        html2canvas.default(document.getElementById('calc-history')).then(canvas => {
          canvas.toBlob(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `calculation-${Date.now()}.png`;
            a.click();
            URL.revokeObjectURL(url);
          });
        });
      });
    }
  };

  // Keyboard
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key >= '0' && e.key <= '9') append(e.key);
      else if (e.key === '.') append('.');
      else if (e.key === '+') append(' + ');
      else if (e.key === '-') append(' - ');
      else if (e.key === '*') append(' × ');
      else if (e.key === '/') { e.preventDefault(); append(' ÷ '); }
      else if (e.key === 'Enter') append(' = ');
      else if (e.key === 'Backspace') backspace();
      else if (e.key === 'Escape') clear();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #4ecdc4 0%, #1fab9f 100%)',
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
        <h1 style={{ fontSize: '3rem', marginBottom: '30px' }}>Advanced Calculator</h1>

        {/* History + Result */}
        <div id="calc-history" style={{
          background: '#1a1a1a',
          borderRadius: '18px',
          padding: '20px',
          marginBottom: '20px',
          boxShadow: 'inset 0 4px 12px rgba(0,0,0,0.4)',
          maxWidth: '100%'
        }}>
          {/* Horizontal Scroll Expression */}
          <div
            ref={scrollRef}
            style={{
              overflowX: 'auto',
              whiteSpace: 'nowrap',
              padding: '10px 0',
              scrollbarWidth: 'thin',
              fontFamily: 'monospace',
              fontSize: '1.6rem',
              color: '#ddd'
            }}
          >
            {expression || '0'}
          </div>

          {/* Result */}
          <div style={{
            textAlign: 'right',
            fontSize: '2.6rem',
            fontWeight: 'bold',
            color: '#fff',
            minHeight: '60px',
            fontFamily: 'monospace'
          }}>
            = {result}
          </div>
        </div>

        {/* Buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', marginBottom: '20px' }}>
          {[
            { l: 'C', a: clear, c: '#ff6b6b' },
            { l: '←', a: backspace, c: '#a0a0a0' },
            { l: '%', a: () => append('%'), c: '#a0a0a0' },
            { l: '÷', a: () => append(' ÷ '), c: '#ff9f1a' },
            { l: 'TXT', a: () => download('txt'), c: '#764ba2' },
            { l: '7', a: () => append('7') },
            { l: '8', a: () => append('8') },
            { l: '9', a: () => append('9') },
            { l: '×', a: () => append(' × '), c: '#ff9f1a' },
            { l: 'PNG', a: () => download('png'), c: '#25D366' },
            { l: '4', a: () => append('4') },
            { l: '5', a: () => append('5') },
            { l: '6', a: () => append('6') },
            { l: '-', a: () => append(' - '), c: '#ff9f1a' },
            { l: '00', a: () => append('00') },
            { l: '1', a: () => append('1') },
            { l: '2', a: () => append('2') },
            { l: '3', a: () => append('3') },
            { l: '+', a: () => append(' + '), c: '#ff9f1a' },
            { l: '=', a: () => append(' = '), c: '#38ef7d', s: 2 },
            { l: '0', a: () => append('0'), s: 2 },
            { l: '.', a: () => append('.') }
          ].map((b, i) => (
            <button
              key={i}
              onClick={b.a}
              style={{
                gridColumn: b.s ? `span ${b.s}` : 'auto',
                padding: '18px',
                fontSize: '1.3rem',
                fontWeight: 'bold',
                borderRadius: '16px',
                border: 'none',
                background: b.c || '#333',
                color: 'white',
                cursor: 'pointer'
              }}
            >
              {b.l}
            </button>
          ))}
        </div>

        <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
          You can download your calculations as TXT or PNG files using the respective buttons.
        </p>

        <Link href="/tools" style={{
          display: 'block', marginTop: '30px', color: '#fff', fontWeight: 'bold', textDecoration: 'none'
        }}>
          ← Back to Tools
        </Link>
      </div>
    </div>
  );
}