import { mediaKit } from '../../../data/mediaKit'
import { Section, Eyebrow, SectionHeading } from '../ui'

const FoundingPartners = () => {
  const { foundingPartners, toggles, contact } = mediaKit

  if (!toggles.showFoundingPartnerTiers) return null

  return (
    <Section id="founding-partners">
      <Eyebrow>Limited Availability</Eyebrow>
      <SectionHeading>{foundingPartners.headline}</SectionHeading>

      <p className="font-poppins text-sm md:text-base text-mk-muted leading-relaxed max-w-2xl mb-10">
        {foundingPartners.intro}
      </p>

      <ul className="space-y-4 mb-10">
        {foundingPartners.benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-4 font-poppins text-sm text-mk-cream leading-relaxed">
            <svg
              className="mt-0.5 shrink-0 text-mk-gold"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            {benefit}
          </li>
        ))}
      </ul>

      {foundingPartners.tiers.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {foundingPartners.tiers.map((tier) => (
            <div key={tier.name} className="border border-mk-gold/30 p-8">
              <h3 className="font-lora text-xl mb-2">{tier.name}</h3>
              {tier.price && <p className="font-lora text-3xl text-mk-gold mb-4">{tier.price}</p>}
              {tier.includes?.length > 0 && (
                <ul className="space-y-2">
                  {tier.includes.map((line) => (
                    <li key={line} className="font-poppins text-xs text-mk-muted leading-relaxed">
                      {line}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="border-t border-mk-gold/20 pt-8">
        <p className="font-lora italic text-base md:text-lg text-mk-muted leading-relaxed mb-6">
          {foundingPartners.ctaLine}
        </p>
        <a
          href={`mailto:${contact.partnerships.email}`}
          className="inline-block border border-mk-gold text-mk-gold font-poppins text-xs uppercase tracking-[0.25em] px-10 py-4 hover:bg-mk-gold hover:text-mk-ink transition-colors duration-300"
        >
          Inquire About Founding Partnership
        </a>
      </div>
    </Section>
  )
}

export default FoundingPartners
