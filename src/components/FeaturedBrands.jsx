const FeaturedBrands = () => (
  <section className="py-32 px-6 bg-white text-black text-center">
    <h2 className="text-4xl md:text-5xl font-body font-semibold mb-6">
      Featured Brands
    </h2>
    <p className="font-body text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
      Celebrating the Black-owned beauty brands shaping the industry.
    </p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center max-w-4xl mx-auto">
      <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition duration-300 flex items-center justify-center">
        <img src="/brand1.svg" alt="Brand 1" className="mx-auto max-h-16" />
      </div>
      <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition duration-300 flex items-center justify-center">
        <img src="/brand2.svg" alt="Brand 2" className="mx-auto max-h-16" />
      </div>
      <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition duration-300 flex items-center justify-center">
        <img src="/brand3.svg" alt="Brand 3" className="mx-auto max-h-16" />
      </div>
      <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition duration-300 flex items-center justify-center">
        <img src="/brand4.svg" alt="Brand 4" className="mx-auto max-h-16" />
      </div>
    </div>
  </section>
)

export default FeaturedBrands
