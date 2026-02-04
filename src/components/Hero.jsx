export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary/50">
        Beauty &middot; Editorial &middot; Culture
      </p>
      <h1 className="mt-4 text-5xl font-bold tracking-tight text-primary md:text-6xl">
        MrsBlackOwned
      </h1>
      <p className="mt-4 max-w-md text-lg text-primary/70">
        Kay Martin — author &amp; beauty editorial writer celebrating Black
        beauty, culture, and ownership.
      </p>
      <a
        href="#about"
        className="mt-10 inline-block border-2 border-primary bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-white hover:text-primary"
      >
        Explore
      </a>
    </section>
  );
}
