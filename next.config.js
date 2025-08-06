/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    domains: [],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/:path*`,
      },  
      {
        source: "/working-timer-api/:path*",
        destination: `${process.env.NEXT_PUBLIC_WORKING_TIME_API_BASE_URL}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
