/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure for static export only in production
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    distDir: 'out',
  }),
  
  // Development settings
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Development-specific configuration
  ...(process.env.NODE_ENV === 'development' && {
    reactStrictMode: true,
    // Enable webpack polling for better file watching
    webpack: (config, { dev, isServer }) => {
      if (dev && !isServer) {
        config.watchOptions = {
          poll: 500,
          aggregateTimeout: 300,
        }
      }
      return config
    },
    // Improve page reloading
    onDemandEntries: {
      // period (in ms) where the server will keep pages in the buffer
      maxInactiveAge: 120 * 1000,
      // number of pages that should be kept simultaneously without being disposed
      pagesBufferLength: 5,
    }
  })
}

export default nextConfig 