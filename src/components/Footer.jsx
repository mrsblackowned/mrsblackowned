const Footer = () => (
  <footer className="py-16 px-6 bg-black text-white">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left">
        <p className="font-body text-lg font-semibold tracking-wide">Mrs Black Owned</p>
        <p className="font-body text-sm text-white/50 mt-1">
          &copy; {new Date().getFullYear()} Kay Martin. All rights reserved.
        </p>
      </div>
      <nav className="flex gap-8">
        <a href="#" className="font-body text-sm text-white/70 hover:text-white transition">
          Instagram
        </a>
        <a href="#" className="font-body text-sm text-white/70 hover:text-white transition">
          Twitter
        </a>
        <a href="#" className="font-body text-sm text-white/70 hover:text-white transition">
          LinkedIn
        </a>
      </nav>
    </div>
  </footer>
)

export default Footer
