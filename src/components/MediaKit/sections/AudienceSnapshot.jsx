import { mediaKit } from '../../../data/mediaKit'
import { Section, Eyebrow, SectionHeading } from '../ui'

const AudienceSnapshot = () => {
  const { audienceSnapshot, toggles } = mediaKit

  if (!toggles.showMetrics) return null

  return (
    <Section id="audience-snapshot" light>
      <Eyebrow>By The Numbers</Eyebrow>
      <SectionHeading>{audienceSnapshot.heading}</SectionHeading>
      <p className="font-poppins text-sm md:text-base text-mk-ink/60 leading-relaxed max-w-2xl mb-12">
        {audienceSnapshot.intro}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 mb-16">
        {audienceSnapshot.stats.map((stat) => (
          <div key={stat.label}>
            <div className="h-px w-full bg-mk-gold mb-4" />
            <p className="font-lora text-3xl md:text-4xl font-medium leading-none mb-2">{stat.value}</p>
            <p className="font-poppins text-[10px] md:text-xs uppercase tracking-[0.2em] text-mk-ink/50 leading-relaxed">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {audienceSnapshot.breakdown.map((group) => (
          <div key={group.category}>
            <h3 className="font-lora text-lg mb-4">{group.category}</h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between font-poppins text-sm text-mk-ink/70 border-b border-mk-ink/10 pb-2"
                >
                  <span>{item.label}</span>
                  <span className="font-medium text-mk-ink">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default AudienceSnapshot
