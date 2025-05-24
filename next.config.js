/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    '@react-aria/grid',
    '@react-aria/interactions',
    '@react-aria/table',
    '@nextui-org/react'
  ]
}

module.exports = nextConfig
