/** @type {import('next').NextConfig} */
const path = require('path');

// Debug logging function
const debug = (...args) => {
  console.log('\n[DEBUG]', ...args, '\n');
};

const nextConfig = {
  // Configure for static export only in production
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    distDir: 'out',
  }),
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Disable type checking during build
  typescript: {
    ignoreBuildErrors: true,
    // Don't terminate on error
    tsconfigPath: "tsconfig.json",
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  
  // Disable source maps in production
  productionBrowserSourceMaps: false,
  
  env: {
    GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
    GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL,
  },

  webpack: (config, { isServer, dev }) => {
    // Only log in development when needed
    if (dev) {
      debug('Build mode:', dev ? 'development' : 'production');
      debug('Environment:', isServer ? 'server' : 'client');
      debug('Node version:', process.version);
    }

    // Reduce logging verbosity
    config.infrastructureLogging = {
      level: dev ? 'error' : 'none',
    };

    // Basic alias configuration
    config.resolve.alias = {
      '@': path.join(__dirname, 'src'),
    };

    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        stream: false,
        path: false,
      };
    }
    
    return config;
  },

  // Development-specific configuration
  ...(process.env.NODE_ENV === 'development' && {
    reactStrictMode: false, // Disabling strict mode to prevent double rendering
    swcMinify: false, // Disable minification in development for faster builds
    webpackDevMiddleware: config => {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
      return config
    },
  })
}

module.exports = nextConfig 