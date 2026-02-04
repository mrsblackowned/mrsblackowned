const FeaturedBrands = () => (
  <section className="py-24 px-6 bg-white text-primary text-center">
    <h2 className="text-4xl font-semibold mb-12">Featured Brands</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
      <img src="/brand1.svg" alt="Brand 1" className="mx-auto" />
      <img src="/brand2.svg" alt="Brand 2" className="mx-auto" />
      <img src="/brand3.svg" alt="Brand 3" className="mx-auto" />
      <img src="/brand4.svg" alt="Brand 4" className="mx-auto" />
    </div>
  </section>
)

export default FeaturedBrands
