import { useEffect } from 'react'
import Navbar          from './components/Navbar/Navbar'
import Hero            from './components/Hero/Hero'
import About           from './components/About/About'
import Mission         from './components/Mission/Mission'
import Services        from './components/Services/Services'
import WhyUs           from './components/WhyUs/WhyUs'
import Contact         from './components/Contact/Contact'
import Footer          from './components/Footer/Footer'
import FloatingWhatsApp from './components/UI/FloatingWhatsApp'

export default function App() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.07, rootMargin: '0px 0px -24px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Mission />
        <Services />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
