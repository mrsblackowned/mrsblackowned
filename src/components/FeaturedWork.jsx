const FeaturedWork = () => (
  <section className="py-32 px-6 bg-[#DFDCD5] text-black text-center">
    <h2 className="text-4xl md:text-5xl font-body font-semibold mb-16">
      Featured Work & Book
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {/* Book */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
        <img
          src="https://via.placeholder.com/300x400"
          alt="Book Cover"
          className="mb-4 rounded"
        />
        <h3 className="font-body font-semibold text-2xl mb-2">The Black Beauty Experience</h3>
        <p className="font-body text-base text-gray-800">
          Explore the book celebrating Black-owned beauty brands and their stories.
        </p>
      </div>

      {/* Editorial 1 */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
        <img
          src="https://via.placeholder.com/300x400"
          alt="Editorial Feature 1"
          className="mb-4 rounded"
        />
        <h3 className="font-body font-semibold text-2xl mb-2">Editorial Feature</h3>
        <p className="font-body text-base text-gray-800">
          Curated beauty stories and highlights from the industry's top brands.
        </p>
      </div>

      {/* Editorial 2 */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
        <img
          src="https://via.placeholder.com/300x400"
          alt="Editorial Feature 2"
          className="mb-4 rounded"
        />
        <h3 className="font-body font-semibold text-2xl mb-2">Editorial Feature</h3>
        <p className="font-body text-base text-gray-800">
          Spotlighting founders, products, and the stories behind Black-owned brands.
        </p>
      </div>
    </div>
  </section>
)

export default FeaturedWork
