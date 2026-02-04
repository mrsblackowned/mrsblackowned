const works = [
  {
    title: "The Politics of Black Beauty",
    category: "Editorial",
    description:
      "A deep dive into how beauty standards have shifted — and who gets to define them.",
  },
  {
    title: "Ownership as Identity",
    category: "Essay",
    description:
      "What it means to own your story, your brand, and your place in the culture.",
  },
  {
    title: "Skin Deep, Soul Wide",
    category: "Feature",
    description:
      "Exploring the intersection of skincare rituals and self-care as resistance.",
  },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Featured Work
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {works.map((work) => (
            <article
              key={work.title}
              className="group border border-primary/10 bg-white p-8 transition hover:bg-secondary"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-primary/50">
                {work.category}
              </p>
              <h3 className="mt-3 text-xl font-bold text-primary">
                {work.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-primary/70">
                {work.description}
              </p>
              <span className="mt-6 inline-block text-sm font-semibold text-primary underline underline-offset-4">
                Read more
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
