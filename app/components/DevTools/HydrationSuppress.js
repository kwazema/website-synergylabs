'use client'

import { useEffect } from 'react'

export default function HydrationSuppress() {
  useEffect(() => {
    // Solo en modo desarrollo
    if (process.env.NODE_ENV !== 'development') return

    // Interceptar console.error para filtrar warnings de extensiones
    const originalConsoleError = console.error
    
    console.error = (...args) => {
      const message = args[0]
      
      // Filtrar warnings específicos de hidratación por extensiones
      if (
        typeof message === 'string' && 
        (
          message.includes('A tree hydrated but some attributes') ||
          message.includes('bis_register') ||
          message.includes('__processed_') ||
          message.includes('data-bitwarden-watching') ||
          message.includes('data-lastpass-watching') ||
          message.includes('data-dashlane-watching') ||
          message.includes('data-1password-watching')
        )
      ) {
        // Mostrar un warning menos molesto
        console.warn('🔧 [Dev] Hydration warning suprimido - causado por extensión del navegador')
        return
      }
      
      // Llamar al console.error original para otros errores
      originalConsoleError.apply(console, args)
    }

    // Cleanup function
    return () => {
      console.error = originalConsoleError
    }
  }, [])

  // Este componente no renderiza nada
  return null
} 