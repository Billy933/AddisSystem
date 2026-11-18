import type { NextConfig } from 'next';
const config: NextConfig = {
  poweredByHeader: false,
  async redirects() { return [
    { source: '/erp', destination: '/products/hex-erp', permanent: true },
    { source: '/Shelf', destination: '/products/shelf', permanent: true },
    { source: '/products/erp', destination: '/products/hex-erp', permanent: true },
    { source: '/insights', destination: '/blog', permanent: true },
    { source: '/solutions', destination: '/products', permanent: true },
    { source: '/electronic', destination: '/products/e-invoice', permanent: true },
  ]; },
};
export default config;
