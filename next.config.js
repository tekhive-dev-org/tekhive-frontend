/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [], // Add any external domains for images here
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  // Ensure JavaScript compilation
  experimental: {
    forceSwcTransforms: true,
  },
}

module.exports = nextConfig