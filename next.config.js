/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para Next.js 15
  reactStrictMode: true,
  
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