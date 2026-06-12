import { mediaKit } from '../../../data/mediaKit'

const ProofBlock = () => {
  const { proof } = mediaKit

  return (
    <div className="bg-mk-ink text-mk-cream px-6 pb-20 md:pb-28">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 md:gap-x-12">
        {proof.map((stat) => (
          <div key={stat.label} className="text-center md:text-left">
            <div className="h-px w-full bg-mk-gold mb-4 md:mb-6" />
            <p className="font-lora text-4xl md:text-6xl font-medium leading-none mb-3">
              {stat.value}
            </p>
            <p className="font-poppins text-[10px] md:text-xs uppercase tracking-[0.2em] text-mk-muted leading-relaxed">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProofBlock
