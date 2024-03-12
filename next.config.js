/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'timesinternet.in',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
