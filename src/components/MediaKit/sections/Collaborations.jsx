import { mediaKit } from '../../../data/mediaKit'
import { Section, Eyebrow, SectionHeading } from '../ui'

const Collaborations = () => {
  const { collaborations, toggles } = mediaKit

  if (!toggles.showBrandCollaborations || collaborations.logos.length < 3) return null

  return (
    <Section id="collaborations">
      <Eyebrow>Past Collaborations</Eyebrow>
      <SectionHeading>{collaborations.heading}</SectionHeading>
      <p className="font-poppins text-sm md:text-base text-mk-muted leading-relaxed max-w-2xl mb-12">
        {collaborations.intro}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {collaborations.logos.map((logo) => (
          <div
            key={logo.alt}
            className="aspect-square border border-mk-gold/15 flex items-center justify-center p-8"
          >
            <img src={logo.src} alt={logo.alt} className="max-h-12 w-auto opacity-80" loading="lazy" />
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Collaborations
