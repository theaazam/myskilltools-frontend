/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  // Turbopack को हटाओ – Next.js 16 में डिफ़ॉल्ट है!
  // experimental: { turbopack: false } → गलत!

  // N overlay हटाओ
  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;