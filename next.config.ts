import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export', // Enables static exports
  // Optional: Add other TypeScript-typed config options here
  images: {
    unoptimized: true, // Recommended for static exports
  },
  // Other configuration options...
}

export default nextConfig