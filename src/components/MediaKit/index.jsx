import Header from '../Header'
import Footer from '../Footer'
import { mediaKit } from '../../data/mediaKit'
import { useMetaTags } from '../../hooks/useMetaTags'
import Hero from './sections/Hero'
import ProofBlock from './sections/ProofBlock'
import About from './sections/About'
import Audience from './sections/Audience'
import Opportunities from './sections/Opportunities'
import FoundingPartners from './sections/FoundingPartners'
import AudienceSnapshot from './sections/AudienceSnapshot'
import Collaborations from './sections/Collaborations'
import WhyPartner from './sections/WhyPartner'
import Press from './sections/Press'
import Assets from './sections/Assets'
import Contact from './sections/Contact'

const MediaKit = () => {
  useMetaTags({
    title: mediaKit.seo.title,
    description: mediaKit.about.short,
    ogImage: `https://${mediaKit.brand.site}${mediaKit.seo.ogImage}`,
    ogUrl: `https://${mediaKit.brand.site}/media-kit`,
  })

  return (
    <div className="media-kit font-poppins">
      <Header />
      <main className="bg-mk-ink">
        <Hero />
        <ProofBlock />
        <About />
        <Audience />
        <Opportunities />
        <FoundingPartners />
        <AudienceSnapshot />
        <Collaborations />
        <WhyPartner />
        <Press />
        <Assets />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default MediaKit
