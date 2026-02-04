const FeaturedWork = () => (
  <section className="py-24 px-6 bg-secondary text-primary text-center">
    <h2 className="text-4xl font-semibold mb-12">Featured Work & Book</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
        <img src="/book-cover.jpg" alt="Book Cover" className="mb-4 rounded" />
        <h3 className="font-semibold text-xl mb-2">The Black Beauty Experience</h3>
        <p>Explore the book celebrating Black-owned beauty brands and their stories.</p>
      </div>
      <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
        <img src="/editorial1.jpg" alt="Editorial 1" className="mb-4 rounded" />
        <h3 className="font-semibold text-xl mb-2">Editorial Feature</h3>
        <p>Curated beauty stories and highlights from the industry's top brands.</p>
      </div>
      <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
        <img src="/editorial2.jpg" alt="Editorial 2" className="mb-4 rounded" />
        <h3 className="font-semibold text-xl mb-2">Editorial Feature</h3>
        <p>Spotlighting founders, products, and the stories behind Black-owned brands.</p>
      </div>
    </div>
  </section>
)

export default FeaturedWork
