/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  output: 'export',  // Enable static export
  images: {
    unoptimized: true,  // Required for static export
  },
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  webpack: (config) => {
    config.resolve.alias = {
      '@': path.join(__dirname, 'src'),
    };
    return config;
  }
}

module.exports = nextConfig 