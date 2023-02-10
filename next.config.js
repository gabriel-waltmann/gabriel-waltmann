/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphassets.com'],
  },
  sassOptions: {
        includePaths: [path.join(__dirname, './src/styles')],
        prependData: `@import "./src/styles/global.scss";`,
    },

}

module.exports = nextConfig
