/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    webpackBuildWorker: true,
  },
  webpack(config, { dev }) {
    if (dev) {
      // Avoid Watchpack lstat errors on Windows system files by ignoring them
      // Use a single RegExp to match multiple Windows system paths and node_modules.
      config.watchOptions = {
        ignored: /(?:C:\\DumpStack\.log\.tmp|C:\\System Volume Information(?:\\.*)?|C:\\pagefile\.sys|node_modules)/,
      };
    }
    return config;
  },
};

export default nextConfig;
