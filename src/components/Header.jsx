const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black py-5 md:py-6">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Social Icons — subtle, secondary */}
        <div className="flex items-center gap-4">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1GGCCZb8sG/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white/50 hover:text-white transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/beautybymrsblackowned?igsh=cjV5bXMzeXUwYzM0&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/50 hover:text-white transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          {/* Substack */}
          <a
            href="https://substack.com/@beautybymrsblackowned?r=5p14u6&utm_medium=ios&utm_source=profile&shareImageVariant=blur"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Substack"
            className="text-white/50 hover:text-white transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.54 6.42H1.46V4.2h21.08v2.22zM1.46 9.37h21.08V7.15H1.46v2.22zM22.54 12.11H1.46v9.67l10.54-5.93 10.54 5.93v-9.67z" />
            </svg>
          </a>
          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@beautybymrsblackowned?_r=1&_t=ZP-93hRBUSI5kt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-white/50 hover:text-white transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.7a8.18 8.18 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.13z" />
            </svg>
          </a>
        </div>

        {/* Center: Logo — large and prominent */}
        <a href="/" className="absolute left-1/2 -translate-x-1/2">
          <img
            src="/Logos/BBMainLogoTransparent.png"
            alt="Beauty By Mrs. Black Owned"
            className="h-28 md:h-36 w-auto"
          />
        </a>

        {/* Right: Buy the Book CTA */}
        <a
          href="#choose-edition"
          className="font-body text-[10px] md:text-xs uppercase tracking-[0.2em] text-black bg-accent hover:bg-accent-dark px-4 py-2 md:px-6 md:py-2.5 transition-colors duration-300"
        >
          Buy the Book
        </a>
      </div>
    </header>
  )
}

export default Header
