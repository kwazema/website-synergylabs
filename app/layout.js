import './globals.css'

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
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2563EB" />
      </head>
      <body>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
} 