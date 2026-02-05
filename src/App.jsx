import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import AnnouncementBar from './components/AnnouncementBar'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductShowcase from './components/ProductShowcase'
import EditorialCollage from './components/EditorialCollage'
import WhatsIncluded from './components/WhatsIncluded'
import BookSection from './components/BookSection'
import Platform from './components/Platform'
import ThemeFeatures from './components/ThemeFeatures'
import Mission from './components/Mission'
import Authority from './components/Authority'
import Vision from './components/Vision'
import Testimonials from './components/Testimonials'
import CTABlock from './components/CTABlock'
import About from './components/About'
import FeaturedBrands from './components/FeaturedBrands'
import FeaturedWork from './components/FeaturedWork'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Success from './components/Success'
import PolaroidIntro from './components/PolaroidIntro'

const INTRO_STORAGE_KEY = 'mrsblackowned_intro_seen'

function HomePage() {
  const [showIntro, setShowIntro] = useState(false)
  const [introComplete, setIntroComplete] = useState(true)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      localStorage.setItem(INTRO_STORAGE_KEY, 'true')
      return
    }

    const hasSeenIntro = localStorage.getItem(INTRO_STORAGE_KEY)

    if (!hasSeenIntro) {
      setShowIntro(true)
      setIntroComplete(false)
      document.body.style.overflow = 'hidden'
    }
  }, [])

  const handleIntroComplete = () => {
    document.body.style.overflow = ''
    localStorage.setItem(INTRO_STORAGE_KEY, 'true')
    setIntroComplete(true)
    setTimeout(() => {
      setShowIntro(false)
    }, 100)
  }

  return (
    <>
      {showIntro && (
        <PolaroidIntro onComplete={handleIntroComplete} />
      )}

      <div style={{ opacity: introComplete ? 1 : 0, transition: 'opacity 0.5s ease' }}>
        <AnnouncementBar />
        <Header />
        <Hero />
        <ProductShowcase />
        <EditorialCollage />
        <WhatsIncluded />
        <BookSection />
        <ThemeFeatures />
        <Platform />
        <Mission />
        <Testimonials />
        <CTABlock />
        <About />
        <FeaturedBrands />
        <Authority />
        <Vision />
        <FeaturedWork />
        <Newsletter />
        <Footer />
      </div>
    </>
  )
}

function App() {
  return (
    <div className="font-body bg-white text-primary">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  )
}

export default App
