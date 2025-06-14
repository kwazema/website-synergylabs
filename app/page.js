// Layout Components
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'

// Section Components
import Hero from './components/Hero/Hero'
import Problems from './components/Problems/Problems'
import Process from './components/Process/Process'
import Services from './components/Services/Services'
import Team from './components/Team/Team'
import Contact from './components/Contact/Contact'

export default function HomePage() {
  return (
    <>
      <Header />
      
      <main>
        <Hero />
        <Problems />
        <Services />
        <Process />
        <Team />
        <Contact />
      </main>
      
      <Footer />
    </>
  )
} 