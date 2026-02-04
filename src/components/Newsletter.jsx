export default function Newsletter() {
  return (
    <section id="newsletter" className="bg-secondary px-6 py-24">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Stay in the Loop
        </h2>
        <p className="mt-4 text-lg text-primary/70">
          New essays, book updates, and editorial drops — straight to your
          inbox.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 border-2 border-primary/20 bg-white px-5 py-3 text-base text-primary placeholder:text-primary/40 focus:border-primary focus:outline-none"
          />
          <button
            type="submit"
            className="border-2 border-primary bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-white hover:text-primary"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
