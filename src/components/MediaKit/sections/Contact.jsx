import { mediaKit } from '../../../data/mediaKit'
import { Section, Eyebrow, SectionHeading } from '../ui'

const Contact = () => {
  const { contact } = mediaKit
  const entries = Object.values(contact)

  return (
    <Section id="media-kit-contact" narrow className="text-center">
      <Eyebrow className="justify-center flex">Get In Touch</Eyebrow>
      <SectionHeading>Let&rsquo;s Work Together</SectionHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 max-w-xl mx-auto">
        {entries.map((entry) => (
          <div key={entry.email}>
            <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-mk-muted mb-2">
              {entry.label}
            </p>
            <a
              href={`mailto:${entry.email}`}
              className="font-lora text-lg md:text-xl text-mk-gold hover:text-mk-cream transition-colors duration-300 break-all"
            >
              {entry.email}
            </a>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Contact
