import { mediaKit } from '../../../data/mediaKit'
import { Section, Eyebrow } from '../ui'

const AudienceColumn = ({ heading, items, note }) => (
  <div>
    <h3 className="font-lora text-2xl md:text-3xl font-medium mb-6">{heading}</h3>
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 font-poppins text-sm text-mk-muted leading-relaxed">
          <span className="mt-2 h-px w-3 shrink-0 bg-mk-gold" />
          {item}
        </li>
      ))}
    </ul>
    {note && (
      <p className="font-lora italic text-sm text-mk-muted/70 mt-6">{note}</p>
    )}
  </div>
)

const Audience = () => {
  const { audience } = mediaKit

  return (
    <Section>
      <Eyebrow>Our Audience</Eyebrow>
      <div className="grid md:grid-cols-2 gap-12 md:gap-16">
        <AudienceColumn heading={audience.reach.heading} items={audience.reach.items} />
        <div className="md:border-l md:border-mk-gold/15 md:pl-16">
          <AudienceColumn
            heading={audience.represent.heading}
            items={audience.represent.items}
            note={audience.represent.note}
          />
        </div>
      </div>
    </Section>
  )
}

export default Audience
