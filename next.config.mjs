/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dogs.api.origmaid.dev',
      },
    ],
  },
};

export default nextConfig;
