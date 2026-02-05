import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import BookSection from './components/BookSection'
import Platform from './components/Platform'
import Mission from './components/Mission'
import Authority from './components/Authority'
import Vision from './components/Vision'
import About from './components/About'
import Footer from './components/Footer'
import Success from './components/Success'
import PolaroidIntro from './components/PolaroidIntro'

const INTRO_STORAGE_KEY = 'mrsblackowned_intro_seen'

function HomePage() {
  const [showIntro, setShowIntro] = useState(false)
  const [introComplete, setIntroComplete] = useState(true)

  useEffect(() => {
    // Respect reduced motion preference - skip intro entirely
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      localStorage.setItem(INTRO_STORAGE_KEY, 'true')
      return
    }

    // Check if user has seen the intro before
    const hasSeenIntro = localStorage.getItem(INTRO_STORAGE_KEY)

    if (!hasSeenIntro) {
      setShowIntro(true)
      setIntroComplete(false)
      // Lock scroll during intro
      document.body.style.overflow = 'hidden'
    }
  }, [])

  const handleIntroComplete = () => {
    // Restore scroll
    document.body.style.overflow = ''

    // Mark intro as seen
    localStorage.setItem(INTRO_STORAGE_KEY, 'true')
    setIntroComplete(true)

    // Small delay before hiding intro layer
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
        <Hero />
        <BookSection />
        <Platform />
        <Mission />
        <Authority />
        <Vision />
        <About />
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
