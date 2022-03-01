/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.pexels.com", "res.cloudinary.com"],
  },
  experimental: {
    esmExternals: false,
  },
}

module.exports = nextConfig
