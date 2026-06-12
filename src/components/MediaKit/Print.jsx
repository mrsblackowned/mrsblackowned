import { mediaKit } from '../../data/mediaKit'
import { useMetaTags } from '../../hooks/useMetaTags'

const PageFooter = ({ pageNumber }) => (
  <div className="mt-auto pt-4 border-t border-mk-gold/40 flex items-center justify-between break-inside-avoid">
    <p className="font-poppins text-[8px] uppercase tracking-[0.2em] text-mk-gold">
      {mediaKit.brand.name} · {mediaKit.brand.site} · {mediaKit.contact.partnerships.email}
    </p>
    <p className="font-poppins text-[8px] text-mk-ink/30">{pageNumber}</p>
  </div>
)

const Page = ({ children, pageNumber }) => (
  <div className="mk-print-page bg-mk-cream text-mk-ink font-poppins">
    <div className="flex-1 flex flex-col">{children}</div>
    <PageFooter pageNumber={pageNumber} />
  </div>
)

const Hairline = () => <div className="h-px w-full bg-mk-gold mb-3" />

const MediaKitPrint = () => {
  const { hero, proof, about, audience, offerings, foundingPartners, founder, contact, brand } = mediaKit

  useMetaTags({ title: `${mediaKit.seo.title} — Print` })

  return (
    <div className="media-kit font-poppins bg-mk-muted/20 py-10">
      {/* Page 1 — Cover: Hero + Proof Block */}
      <Page pageNumber="01 / 05">
        <div className="flex-1 flex flex-col justify-center text-center break-inside-avoid">
          <p className="font-poppins text-[10px] uppercase tracking-[0.4em] text-mk-gold mb-6">
            {hero.eyebrow}
          </p>
          <h1 className="font-lora text-5xl md:text-6xl font-medium leading-[1.05] tracking-tight mb-6">
            {hero.headline}
          </h1>
          <p className="font-poppins text-sm text-mk-ink/60 leading-relaxed max-w-md mx-auto">
            {hero.subhead}
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6 mt-12 break-inside-avoid">
          {proof.map((stat) => (
            <div key={stat.label}>
              <Hairline />
              <p className="font-lora text-3xl font-medium leading-none mb-2">{stat.value}</p>
              <p className="font-poppins text-[8px] uppercase tracking-[0.15em] text-mk-ink/50 leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Page>

      {/* Page 2 — About + Market Context */}
      <Page pageNumber="02 / 05">
        <p className="font-poppins text-[10px] uppercase tracking-[0.4em] text-mk-gold mb-6">About</p>
        <h2 className="font-lora text-3xl font-medium tracking-tight mb-8 break-inside-avoid">
          {brand.name}
        </h2>

        <p className="font-lora italic text-xl leading-relaxed mb-8 break-inside-avoid">
          &ldquo;{about.short}&rdquo;
        </p>

        <div className="space-y-4 mb-8">
          {about.long.map((paragraph, i) => (
            <p key={i} className="font-poppins text-xs text-mk-ink/70 leading-relaxed break-inside-avoid">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="border-l-2 border-mk-gold pl-5 break-inside-avoid">
          <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-mk-ink/40 mb-2">
            Market Context
          </p>
          <p className="font-lora italic text-sm text-mk-ink/80 leading-relaxed">{about.marketContext}</p>
        </div>
      </Page>

      {/* Page 3 — Audience + Opportunities */}
      <Page pageNumber="03 / 05">
        <p className="font-poppins text-[10px] uppercase tracking-[0.4em] text-mk-gold mb-6">Our Audience</p>

        <div className="grid grid-cols-2 gap-10 mb-10 break-inside-avoid">
          <div>
            <h3 className="font-lora text-xl font-medium mb-3">{audience.reach.heading}</h3>
            <ul className="space-y-1.5">
              {audience.reach.items.map((item) => (
                <li key={item} className="font-poppins text-[10px] text-mk-ink/70 leading-relaxed flex gap-2">
                  <span className="text-mk-gold">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-lora text-xl font-medium mb-3">{audience.represent.heading}</h3>
            <ul className="space-y-1.5">
              {audience.represent.items.map((item) => (
                <li key={item} className="font-poppins text-[10px] text-mk-ink/70 leading-relaxed flex gap-2">
                  <span className="text-mk-gold">—</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-lora italic text-[10px] text-mk-ink/40 mt-3">{audience.represent.note}</p>
          </div>
        </div>

        <div className="border-t border-mk-gold/30 pt-6">
          <p className="font-poppins text-[10px] uppercase tracking-[0.4em] text-mk-gold mb-2">
            Partner With Us
          </p>
          <h3 className="font-lora text-xl font-medium mb-5">Partnership Opportunities</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {offerings.map((offer, i) => (
              <div key={offer.title} className="break-inside-avoid">
                <p className="font-poppins text-[10px] font-semibold uppercase tracking-[0.1em] mb-1">
                  <span className="text-mk-gold">{String(i + 1).padStart(2, '0')}</span> {offer.title}
                </p>
                <p className="font-poppins text-[9px] text-mk-ink/60 leading-relaxed">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Page>

      {/* Page 4 — Founding Partner Program */}
      <Page pageNumber="04 / 05">
        <p className="font-poppins text-[10px] uppercase tracking-[0.4em] text-mk-gold mb-6">
          Limited Availability
        </p>
        <h2 className="font-lora text-3xl font-medium tracking-tight mb-6 break-inside-avoid">
          {foundingPartners.headline}
        </h2>
        <p className="font-poppins text-xs text-mk-ink/60 leading-relaxed mb-8 break-inside-avoid">
          {foundingPartners.intro}
        </p>

        <ul className="space-y-3 mb-10">
          {foundingPartners.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3 font-poppins text-xs text-mk-ink/80 leading-relaxed break-inside-avoid">
              <span className="text-mk-gold mt-0.5">✓</span>
              {benefit}
            </li>
          ))}
        </ul>

        <div className="border-t border-mk-gold/30 pt-6 mt-auto break-inside-avoid">
          <p className="font-lora italic text-base text-mk-ink/80 leading-relaxed">
            {foundingPartners.ctaLine}
          </p>
        </div>
      </Page>

      {/* Page 5 — Founder + Contact */}
      <Page pageNumber="05 / 05">
        <p className="font-poppins text-[10px] uppercase tracking-[0.4em] text-mk-gold mb-6">Press &amp; Media</p>

        <div className="grid grid-cols-[160px_1fr] gap-8 mb-12 break-inside-avoid">
          <div className="aspect-[3/4] w-full border border-mk-gold/30 overflow-hidden">
            <img src={founder.headshot} alt={founder.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-lora text-2xl font-medium mb-1">{founder.name}</h3>
            <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-mk-gold mb-4">
              {founder.title}
            </p>
            <p className="font-poppins text-xs text-mk-ink/70 leading-relaxed">{founder.shortBio}</p>
            {founder.longBio && (
              <p className="font-poppins text-xs text-mk-ink/70 leading-relaxed mt-3">{founder.longBio}</p>
            )}
          </div>
        </div>

        <div className="border-t border-mk-gold/30 pt-8 mt-auto break-inside-avoid">
          <p className="font-poppins text-[10px] uppercase tracking-[0.4em] text-mk-gold mb-6">Contact</p>
          <div className="grid grid-cols-2 gap-8">
            {Object.values(contact).map((entry) => (
              <div key={entry.email}>
                <p className="font-poppins text-[9px] uppercase tracking-[0.3em] text-mk-ink/40 mb-1">
                  {entry.label}
                </p>
                <p className="font-lora text-base">{entry.email}</p>
              </div>
            ))}
          </div>
        </div>
      </Page>
    </div>
  )
}

export default MediaKitPrint
