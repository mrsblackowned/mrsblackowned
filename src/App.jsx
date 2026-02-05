import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import About from './components/About'
import BookSection from './components/BookSection'
import FeaturedWork from './components/FeaturedWork'
import FeaturedBrands from './components/FeaturedBrands'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Success from './components/Success'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <BookSection />
      <FeaturedWork />
      <FeaturedBrands />
      <Newsletter />
      <Footer />
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
