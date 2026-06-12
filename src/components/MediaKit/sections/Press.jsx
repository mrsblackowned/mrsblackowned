import { mediaKit } from '../../../data/mediaKit'
import { Section, Eyebrow, SectionHeading } from '../ui'

const Press = () => {
  const { founder } = mediaKit

  return (
    <Section id="press">
      <Eyebrow>Press &amp; Media</Eyebrow>
      <SectionHeading>The Founder</SectionHeading>

      <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-8 md:gap-12 items-start mt-10">
        <div className="aspect-[3/4] w-full max-w-[200px] bg-mk-cream/5 border border-mk-gold/20 overflow-hidden">
          <img
            src={founder.headshot}
            alt={founder.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div>
          <h3 className="font-lora text-2xl md:text-3xl font-medium mb-1">{founder.name}</h3>
          <p className="font-poppins text-[10px] md:text-xs uppercase tracking-[0.3em] text-mk-gold mb-6">
            {founder.title}
          </p>
          <p className="font-poppins text-sm md:text-base text-mk-muted leading-relaxed">
            {founder.shortBio}
          </p>
          {founder.longBio && (
            <p className="font-poppins text-sm text-mk-muted leading-relaxed mt-4">{founder.longBio}</p>
          )}
        </div>
      </div>
    </Section>
  )
}

export default Press
