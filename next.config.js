/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export to enable API routes
  // output: 'export',
  images: {
    unoptimized: true
  },
  distDir: '.next',
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
    config.resolve.fallback = { 
      fs: false,
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      path: require.resolve('path-browserify'),
    };
    return config;
  },
  // Explicitly configure environment variables
  serverRuntimeConfig: {
    GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
    GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL,
  },
  publicRuntimeConfig: {
    // Add any public config here if needed
  }
}

module.exports = nextConfig 