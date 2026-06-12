import { mediaKit } from '../../../data/mediaKit'
import { Section, Eyebrow } from '../ui'

const About = () => {
  const { about } = mediaKit

  return (
    <Section id="about-mediakit" light narrow>
      <Eyebrow>About Mrs. Black Owned</Eyebrow>

      <p className="font-lora italic text-2xl md:text-3xl leading-relaxed text-mk-ink mb-10">
        &ldquo;{about.short}&rdquo;
      </p>

      <div className="space-y-5">
        {about.long.map((paragraph, i) => (
          <p key={i} className="font-poppins text-sm md:text-base text-mk-ink/70 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-12 border-l-2 border-mk-gold pl-6">
        <p className="font-lora italic text-base md:text-lg text-mk-ink/80 leading-relaxed">
          {about.marketContext}
        </p>
      </div>
    </Section>
  )
}

export default About
