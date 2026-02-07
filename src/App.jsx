import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import PolaroidIntro from './components/PolaroidIntro'
import Hero from './components/Hero'
import WhatsIncluded from './components/WhatsIncluded'
import BookSection from './components/BookSection'
import BookFunnel from './components/BookFunnel'
import Platform from './components/Platform'
import Mission from './components/Mission'
import Authority from './components/Authority'
import Vision from './components/Vision'
import Testimonials from './components/Testimonials'
import About from './components/About'
import FeaturedBrands from './components/FeaturedBrands'
import FeaturedWork from './components/FeaturedWork'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Success from './components/Success'
import RefundPolicy from './components/RefundPolicy'

function HomePage() {
  return (
    <>
      <Header />
      <PolaroidIntro />
      <Hero />
      <BookFunnel />
      <WhatsIncluded />
      <BookSection />
      <Platform />
      <Mission />
      <Testimonials />
      <About />
      <FeaturedBrands />
      <Authority />
      <Vision />
      <FeaturedWork />
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
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
    </div>
  )
}

export default App
