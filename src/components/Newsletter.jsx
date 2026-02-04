const Newsletter = () => (
  <section className="py-24 px-6 bg-secondary text-primary text-center">
    <h2 className="text-4xl font-semibold mb-6">Join the Newsletter</h2>
    <p className="mb-6 max-w-xl mx-auto">
      Stay updated with Kay Martin's latest editorial content and beauty features.
    </p>
    <form className="flex flex-col md:flex-row justify-center items-center gap-4">
      <input
        type="email"
        placeholder="Enter your email"
        className="p-3 rounded w-full md:w-auto"
      />
      <button className="bg-primary text-white font-semibold px-6 py-3 rounded hover:opacity-90 transition">
        Subscribe
      </button>
    </form>
  </section>
)

export default Newsletter
