/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Ensure no server-side features are used
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig 