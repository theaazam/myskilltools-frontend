// src/app/layout.jsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>MySkillTools</title>
      </head>
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}