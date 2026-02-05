import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import About from './components/About'
import BookSection from './components/BookSection'
import FeaturedWork from './components/FeaturedWork'
import FeaturedBrands from './components/FeaturedBrands'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Success from './components/Success'
import PolaroidIntro from './components/PolaroidIntro'

const INTRO_STORAGE_KEY = 'mrsblackowned_intro_seen'

function HomePage() {
  const [showIntro, setShowIntro] = useState(false)
  const [introComplete, setIntroComplete] = useState(true)

  useEffect(() => {
    // Check if user has seen the intro before
    const hasSeenIntro = localStorage.getItem(INTRO_STORAGE_KEY)

    if (!hasSeenIntro) {
      setShowIntro(true)
      setIntroComplete(false)
    }
  }, [])

  const handleIntroComplete = () => {
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
        <About />
        <BookSection />
        <FeaturedWork />
        <FeaturedBrands />
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
