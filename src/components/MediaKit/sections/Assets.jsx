import { mediaKit } from '../../../data/mediaKit'
import { Section, Eyebrow, SectionHeading } from '../ui'
import assetAvailability from 'virtual:media-kit-assets'

const Assets = () => {
  const { assets } = mediaKit
  const available = assets.filter((asset) => assetAvailability[asset.path])

  if (available.length === 0) return null

  return (
    <Section id="assets">
      <Eyebrow>Resources</Eyebrow>
      <SectionHeading>Downloadable Assets</SectionHeading>

      <ul className="divide-y divide-mk-gold/15 mt-8">
        {available.map((asset) => (
          <li key={asset.path}>
            <a href={asset.path} download className="flex items-center justify-between gap-6 py-5 group">
              <span>
                <span className="font-lora text-lg md:text-xl block mb-1">{asset.label}</span>
                {asset.description && (
                  <span className="font-poppins text-sm text-mk-muted">{asset.description}</span>
                )}
              </span>
              <span className="font-poppins text-xs uppercase tracking-[0.25em] text-mk-gold shrink-0 group-hover:translate-x-1 transition-transform duration-300">
                Download →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Assets
