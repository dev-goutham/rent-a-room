/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.pexels.com"],
  },
  experimental: {
    esmExternals: false,
  },
}

module.exports = nextConfig
