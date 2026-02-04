export default function Footer() {
  return (
    <footer className="bg-primary px-6 py-12 text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm font-semibold uppercase tracking-widest">
          MrsBlackOwned
        </p>
        <nav className="flex gap-6">
          <a
            href="#about"
            className="text-sm text-white/70 transition hover:text-white"
          >
            About
          </a>
          <a
            href="#work"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Work
          </a>
          <a
            href="#book"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Book
          </a>
          <a
            href="#newsletter"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Newsletter
          </a>
        </nav>
        <p className="text-xs text-white/40">
          &copy; {new Date().getFullYear()} Kay Martin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
