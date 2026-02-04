export default function Book() {
  return (
    <section id="book" className="bg-primary px-6 py-24 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-white/50">
          Now Available
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          The Book
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-white/80">
          Kay Martin&rsquo;s debut book is a bold, unapologetic exploration of
          Black beauty, ownership, and self-definition. Part memoir, part
          manifesto — it&rsquo;s the book the beauty industry didn&rsquo;t know
          it needed.
        </p>
        <a
          href="#newsletter"
          className="mt-10 inline-block border-2 border-white bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wider text-primary transition hover:bg-transparent hover:text-white"
        >
          Get Notified
        </a>
      </div>
    </section>
  );
}
