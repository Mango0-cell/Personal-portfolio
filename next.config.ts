import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Allow importing images from src/assets via Next.js image optimization
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
