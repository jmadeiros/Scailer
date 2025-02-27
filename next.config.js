/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true
  },
  // Ensure no server-side features are used
  typescript: {
    ignoreBuildErrors: true
  },
  assetPrefix: '',
  basePath: '',
  trailingSlash: true,
  compiler: {
    removeConsole: false,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  }
}

module.exports = nextConfig 