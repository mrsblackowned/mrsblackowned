import Hero from './components/Hero'
import About from './components/About'
import FeaturedWork from './components/FeaturedWork'
import FeaturedBrands from './components/FeaturedBrands'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-body bg-white text-primary">
      <Hero />
      <About />
      <FeaturedWork />
      <FeaturedBrands />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
