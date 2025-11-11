// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // obliga a exportar como estático
  images: {
    unoptimized: true, // necesario si usas next/image con URLs externas
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      }
    ],
  },
};

//module.exports = nextConfig;

export default nextConfig;
