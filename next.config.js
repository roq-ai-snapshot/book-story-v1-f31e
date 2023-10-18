/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:auth*',
        destination: '/api/:auth*',
      },
      {
        source: '/api/:path*',
        destination: process.env.NEXT_PUBLIC_ROQ_API_URL + '/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
