/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://rickandmortyapi.com']
  }
}

module.exports = nextConfig
