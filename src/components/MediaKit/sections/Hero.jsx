import { mediaKit } from '../../../data/mediaKit'
import { Eyebrow } from '../ui'

const Hero = () => {
  const { hero } = mediaKit

  return (
    <section className="bg-mk-ink text-mk-cream px-6 pt-32 md:pt-40 pb-16 md:pb-20 text-center">
      <div className="max-w-3xl mx-auto">
        <Eyebrow className="justify-center flex">{hero.eyebrow}</Eyebrow>
        <h1 className="font-lora text-4xl sm:text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight mb-6">
          {hero.headline}
        </h1>
        <p className="font-poppins text-sm md:text-base text-mk-muted leading-relaxed max-w-2xl mx-auto mb-10">
          {hero.subhead}
        </p>
        <a
          href={hero.pdfPath}
          download
          className="inline-block bg-mk-gold text-mk-ink font-poppins text-xs uppercase tracking-[0.25em] px-10 py-4 hover:bg-mk-cream transition-colors duration-300"
        >
          {hero.downloadLabel}
        </a>
      </div>
    </section>
  )
}

export default Hero
