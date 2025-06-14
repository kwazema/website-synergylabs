/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para Next.js 15
  reactStrictMode: true,
  
  // Suprimir warnings de hidratación causados por extensiones del navegador
  onDemandEntries: {
    // Periodo de espera para mantener páginas en memoria
    maxInactiveAge: 25 * 1000,
    // Número de páginas que se mantienen en memoria
    pagesBufferLength: 2,
  },
  
  // Configuración de webpack para desarrollo
  webpack: (config, { dev }) => {
    // En desarrollo, suprimir warnings específicos de extensiones
    if (dev) {
      config.infrastructureLogging = {
        level: 'error',
      };
    }
    return config;
  },
  
  // Optimizaciones de imagen
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Configuración de CSS Modules
  sassOptions: {
    includePaths: ['./app/styles'],
  },
  
  // Optimizaciones de compilación
  compiler: {
    // Remover console.log en producción
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Configuración de headers de seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig 