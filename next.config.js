/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hamyarpsoriasis.ir",
        pathname: "/api/get_image/**",
      },
    ],
  },
};

module.exports = nextConfig;
