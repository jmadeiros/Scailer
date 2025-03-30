/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  images: {
    unoptimized: true,
  },
  
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