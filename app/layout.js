import './globals.css'
import HydrationSuppress from './components/DevTools/HydrationSuppress'

export const metadata = {
  title: 'Synergy Labs - Automatizaciones con IA para PYMEs',
  description: 'Transformamos tu PYME con automatizaciones inteligentes. Especialistas en IA para empresas de 2-15 trabajadores.',
  keywords: 'automatización, IA, PYMEs, inteligencia artificial, procesos empresariales',
  authors: [
    { name: 'Diana Martín', role: 'Marketing' },
    { name: 'Andreu Kwazema', role: 'Programador' }
  ],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  themeColor: '#2563EB',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Synergy Labs - Automatizaciones con IA para PYMEs',
    description: 'Transformamos tu PYME con automatizaciones inteligentes',
    type: 'website',
    locale: 'es_ES',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <HydrationSuppress />
        {children}
      </body>
    </html>
  )
} 