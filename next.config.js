/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.animatedimages.org"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
