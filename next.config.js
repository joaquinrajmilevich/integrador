/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/integrador",
  assetPrefix: "/integrador",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
