import type { NextConfig } from "next";

// For GitHub Pages deployment
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'simpson-2025-production';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Configure paths for GitHub Pages
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  // Ensure trailing slash for consistent path handling
  trailingSlash: true,
};

export default nextConfig;
