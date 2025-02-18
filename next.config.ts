import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'media2.dev.to', port: '' },
      { protocol: 'https', hostname: 'picsum.photos', port: '' },
      { protocol: 'https', hostname: 'cdn.magicui.design', port: '' },
      { protocol: 'https', hostname: 'api.microlink.io', port: '' },
    ],
  },
};

export default withNextIntl(nextConfig);
