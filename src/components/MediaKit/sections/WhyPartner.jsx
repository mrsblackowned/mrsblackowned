import { mediaKit } from '../../../data/mediaKit'
import { Section, Eyebrow, SectionHeading } from '../ui'

const WhyPartner = () => {
  const { whyPartner } = mediaKit

  return (
    <Section id="why-partner">
      <Eyebrow>Why Partner With Us</Eyebrow>
      <SectionHeading>The Case For Mrs. Black Owned</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mt-12">
        {whyPartner.map((item) => (
          <div key={item.title}>
            <div className="h-px w-10 bg-mk-gold mb-4" />
            <h3 className="font-lora text-xl md:text-2xl font-medium mb-2">{item.title}</h3>
            <p className="font-poppins text-sm text-mk-muted leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default WhyPartner
