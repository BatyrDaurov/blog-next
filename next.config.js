/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['blog-backend-j5r8.onrender.com'],
  },
};

module.exports = nextConfig;
