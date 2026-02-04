import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedWork from "./components/FeaturedWork";
import Book from "./components/Book";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-body">
      <Hero />
      <About />
      <FeaturedWork />
      <Book />
      <Newsletter />
      <Footer />
    </div>
  );
}
