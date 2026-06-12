import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import PolaroidIntro from './components/PolaroidIntro'
import Hero from './components/Hero'
import WhatsIncluded from './components/WhatsIncluded'
import BookSection from './components/BookSection'
import Platform from './components/Platform'
import Mission from './components/Mission'
import Authority from './components/Authority'
import Vision from './components/Vision'
import Testimonials from './components/Testimonials'
import About from './components/About'
import FeaturedBrands from './components/FeaturedBrands'
import FeaturedWork from './components/FeaturedWork'
import Newsletter from './components/Newsletter'
import Contact from './components/Contact'
import Footer from './components/Footer'

const BookFunnel = lazy(() => import('./components/BookFunnel'))
const Success = lazy(() => import('./components/Success'))
const RefundPolicy = lazy(() => import('./components/RefundPolicy'))
const MediaKit = lazy(() => import('./components/MediaKit'))
const MediaKitPrint = lazy(() => import('./components/MediaKit/Print'))

function HomePage() {
  return (
    <>
      <Header />
      <PolaroidIntro />
      <Hero />
      <Suspense fallback={null}>
        <BookFunnel />
      </Suspense>
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
      <Contact />
      <Footer />
    </>
  )
}

function App() {
  return (
    <div className="font-body bg-white text-primary">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/success" element={<Suspense fallback={null}><Success /></Suspense>} />
        <Route path="/refund-policy" element={<Suspense fallback={null}><RefundPolicy /></Suspense>} />
        <Route path="/media-kit" element={<Suspense fallback={null}><MediaKit /></Suspense>} />
        <Route path="/media-kit/print" element={<Suspense fallback={null}><MediaKitPrint /></Suspense>} />
      </Routes>
    </div>
  )
}

export default App
