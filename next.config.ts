import type { NextConfig } from "next";

// For GitHub Pages deployment
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'simpson-2025-production';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // Comment out for development with API proxy
  // output: 'export',
  images: {
    unoptimized: true,
  },
  // Configure paths for GitHub Pages
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  // Ensure trailing slash for consistent path handling
  trailingSlash: true,
  // Add API proxy configuration
  async rewrites() {
    return [
      {
        source: '/v1/:path*',
        destination: 'http://localhost:3001/v1/:path*',
      },
    ];
  },
};

export default nextConfig;
