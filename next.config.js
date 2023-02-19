/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['avatars.mds.yandex.net', 'wonder-day.com'],
  },
};

module.exports = nextConfig;
