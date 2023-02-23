/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'avatars.mds.yandex.net',
      'wonder-day.com',
      'localhost',
      'localhost:4444',
    ],
  },
};

module.exports = nextConfig;
