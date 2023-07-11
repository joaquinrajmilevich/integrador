/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/proyectogc",
  assetPrefix: "/proyectogc",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
