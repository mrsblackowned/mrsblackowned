const Hero = () => (
  <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black">
    {/* Background overlay pattern */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/70 z-0"></div>

    <div className="relative z-10 max-w-3xl">
      <h1 className="font-body text-6xl md:text-7xl text-white font-semibold mb-6">
        Mrs Black Owned
      </h1>
      <p className="font-body text-lg md:text-xl text-[#DFDCD5] mb-10">
        Beauty editorial, curated stories, and the book by Kay Martin
      </p>
      <button className="bg-[#DFDCD5] text-black font-semibold px-10 py-4 rounded hover:opacity-90 transition">
        Explore the Book
      </button>
    </div>

    {/* Optional hero image placeholder */}
    <img
      src="https://via.placeholder.com/1200x600"
      alt="Hero editorial"
      className="absolute bottom-0 w-full h-auto object-cover opacity-20 z-0"
    />
  </section>
)

export default Hero
