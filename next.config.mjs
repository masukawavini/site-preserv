/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: "/site-preserv", // Adicione isto temporariamente para testar no link do GitHub
};

export default nextConfig;
