/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  async rewrites() {
    return [{
      source: '/api/:path*',
      destination: `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/:path*`
    }]
  }
}

module.exports = nextConfig
