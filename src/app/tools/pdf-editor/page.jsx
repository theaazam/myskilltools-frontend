'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function PDFEditor() {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfUrl, setPdfUrl] = useState('');
  const [isPremium, setIsPremium] = useState(false);
  const [editsLeft, setEditsLeft] = useState(1);

  // Load PDF.js and pdf-lib from CDN
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.min.js';
    script2.async = true;
    document.body.appendChild(script2);

    script2.onload = () => {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
    };

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
      const url = URL.createObjectURL(file);
      setPdfUrl(url);
    }
  };

  const insertText = async () => {
    if (!window.PDFLib || !pdfFile || (!isPremium && editsLeft <= 0)) {
      alert('Wait for PDF library to load or upgrade to Premium!');
      return;
    }

    try {
      const arrayBuffer = await pdfFile.arrayBuffer();
      const pdfDoc = await window.PDFLib.PDFDocument.load(arrayBuffer);
      const page = pdfDoc.getPage(0);

      const helvetica = await pdfDoc.embedFont('Helvetica');
      page.drawText('MySkillTools.in', {
        x: 50,
        y: 700,
        size: 24,
        font: helvetica,
        color: window.PDFLib.rgb(1, 0, 0),
      });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);

      if (!isPremium) setEditsLeft(editsLeft - 1);
    } catch (err) {
      console.error(err);
      alert('Error editing PDF. Try again!');
    }
  };

  const downloadPDF = () => {
    if (pdfUrl) {
      const a = document.createElement('a');
      a.href = pdfUrl;
      a.download = `edited-${pdfFile?.name || 'document.pdf'}`;
      a.click();
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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

      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>PDF Editor</h1>
        <p>Free Trial: {editsLeft} edit left | Premium: ₹99/month</p>

        <input
          type="file"
          accept=".pdf"
          onChange={handleFile}
          style={{
            padding: '12px',
            background: 'rgba(255,255,255,0.2)',
            color: 'white',
            borderRadius: '12px',
            marginBottom: '20px'
          }}
        />

        {pdfUrl && (
          <>
            <iframe
              src={pdfUrl}
              style={{ width: '100%', height: '600px', borderRadius: '12px', marginBottom: '20px' }}
              title="PDF Preview"
            />

            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={insertText} style={btnStyle('#fff', '#000')}>
                Insert Text
              </button>
              <button disabled style={btnStyle('#555')}>Insert Image (Premium)</button>
              <button disabled style={btnStyle('#555')}>Highlight (Premium)</button>
              <button disabled style={btnStyle('#555')}>Signature (Premium)</button>
              <button onClick={downloadPDF} style={btnStyle('#25D366', '#fff')}>
                Download PDF
              </button>
            </div>
          </>
        )}

        <Link href="/tools" style={{
          display: 'block', marginTop: '40px', color: '#fff', fontWeight: 'bold', textDecoration: 'none'
        }}>
          Back to Tools
        </Link>
      </div>
    </div>
  );
}

const btnStyle = (bg, color) => ({
  padding: '12px 25px',
  background: bg,
  color: color,
  border: 'none',
  borderRadius: '50px',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize: '1rem',
  opacity: bg === '#555' ? 0.5 : 1
});