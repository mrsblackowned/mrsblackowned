import { mediaKit } from '../../../data/mediaKit'
import { Section, Eyebrow, SectionHeading } from '../ui'

const Opportunities = () => {
  const { offerings } = mediaKit

  return (
    <Section id="opportunities">
      <Eyebrow>Partner With Us</Eyebrow>
      <SectionHeading>Partnership Opportunities</SectionHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mt-12">
        {offerings.map((offer, i) => (
          <div key={offer.title} className="border-t border-mk-gold/30 pt-5">
            <p className="font-lora text-mk-gold text-sm mb-3">{String(i + 1).padStart(2, '0')}</p>
            <h3 className="font-poppins text-xs uppercase tracking-[0.15em] font-semibold mb-3">
              {offer.title}
            </h3>
            <p className="font-poppins text-sm text-mk-muted leading-relaxed">{offer.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Opportunities
