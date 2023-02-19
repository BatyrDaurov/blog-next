/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['avatars.mds.yandex.net'],
  },
};

module.exports = nextConfig;
