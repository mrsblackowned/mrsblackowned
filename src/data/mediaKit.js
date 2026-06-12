// Single source of truth for the /media-kit route and the generated PDF.
// Never hardcode media-kit copy, metrics, or contact info in components —
// render everything from this file.

export const mediaKit = {
  brand: {
    name: 'Mrs. Black Owned',
    tagline: 'All the Black-Owned, Babee!',
    site: 'mrsblackowned.com',
    logo: '/Logos/BBMainLogoTransparent.webp',
    logoAlt: '/Logos/BBAlternateTransparent.webp',
    icon: '/Logos/BBIconTransparent.webp',
    // Dust-jacket palette — gold on ink.
    colors: {
      ink: '#16101A',
      gold: '#C9A24B',
      cream: '#F2E9DC',
      muted: '#BEB6AA',
    },
    type: {
      display: 'Lora',
      ui: 'Poppins',
    },
  },

  hero: {
    eyebrow: 'Media Kit · Partnerships & Advertising',
    headline: 'All the Black-Owned, Babee!',
    subhead:
      "Mrs. Black Owned is the editorial home of that promise — a book, a platform, and a growing community built for brands and partners ready to reach readers who buy Black-owned, on purpose.",
    pdfPath: '/media-kit/mrs-black-owned-media-kit.pdf',
    downloadLabel: 'Download Media Kit (PDF)',
  },

  // The hero's supporting proof row — four facts, not vanity metrics.
  proof: [
    { value: '85', label: 'Pages of Curated Brand Coverage' },
    { value: '100%', label: 'Black-Owned & Founder-Led' },
    { value: '4', label: 'Active Platforms — IG, TikTok, FB & Substack' },
    { value: '2026', label: 'Founding Year' },
  ],

  about: {
    short:
      "Mrs. Black Owned is a love letter to Black-owned beauty — an editorial archive, book series, and growing community built around one idea: ownership is the new luxury.",
    long: [
      "Founded by beauty editorial writer and author Kay Martin, Mrs. Black Owned began as a personal archive of the Black and African-owned beauty and fragrance brands worth knowing — and worth supporting. That archive became All the Black-Owned, Babee!, an 85-page guide documenting the founders, formulas, and stories behind a new generation of beauty ownership.",
      "What started as a book has grown into a platform: a website, and a social presence across Instagram, TikTok, Facebook, and Substack — plus a standing invitation to readers who want their beauty dollars to build legacy, not just look good on a shelf.",
      "Every brand featured is vetted for authenticity, ownership, and craft. Every reader is here on purpose.",
    ],
    marketContext:
      "Black-owned beauty remains one of the most culturally influential — and most underrepresented — segments of the industry. Mrs. Black Owned exists to close that gap: connecting intentional, culturally fluent consumers directly with the founders and formulas they're already looking for.",
  },

  audience: {
    reach: {
      heading: 'Who We Reach',
      items: [
        'Beauty consumers actively seeking Black and African-owned brands',
        'Conscious shoppers who research before they buy',
        'Readers across Instagram, TikTok, Facebook, and Substack',
        'Book buyers and gift-givers drawn to editorial, archival-quality content',
        'A primarily Black, female audience with strong purchase intent',
      ],
    },
    represent: {
      heading: 'Who We Represent',
      items: [
        'Black and African-owned beauty and fragrance brands',
        'Independent founders building direct-to-consumer businesses',
        'Brands prioritizing clean formulation, craftsmanship, and cultural authenticity',
        'Emerging labels seeking their first wave of intentional, loyal customers',
      ],
      note: 'Audience data and rates available upon request.',
    },
  },

  offerings: [
    {
      title: 'Featured Brand Spotlight',
      description: 'A dedicated editorial feature on mrsblackowned.com introducing your brand to our audience.',
    },
    {
      title: 'Book Inclusion',
      description: 'Placement inside All the Black-Owned, Babee! — a keepsake guide readers return to again and again.',
    },
    {
      title: 'Newsletter Placement',
      description: 'A feature or mention in the Mrs. Black Owned Substack, delivered straight to engaged inboxes.',
    },
    {
      title: 'Instagram & TikTok Integration',
      description: "Custom content, stories, or reels introducing your brand to our social audience.",
    },
    {
      title: 'Affiliate & Shop Links',
      description: 'Direct, trackable links from our platform to your storefront.',
    },
    {
      title: 'Sponsored Content Series',
      description: "A multi-part editorial series exploring your brand's story, formulas, and founder.",
    },
    {
      title: 'Event & Launch Coverage',
      description: "On-the-ground or virtual coverage of your brand's launches, pop-ups, and milestones.",
    },
    {
      title: 'Custom Partnerships',
      description: 'Have something else in mind? We build bespoke packages around your goals and budget.',
    },
  ],

  foundingPartners: {
    headline: 'The Founding Partner Program',
    intro:
      'Mrs. Black Owned is opening a limited number of Founding Partner spots — brands that join early, help shape what this platform becomes, and lock in partnership terms before public rate cards launch.',
    benefits: [
      'Priority placement across the website, newsletter, and social channels',
      'First access to new advertising formats and editorial features as they launch',
      'Direct line to the founder and editorial team for collaborative storytelling',
      'Recognition as a Founding Partner in the media kit, book credits, and site footer',
      'Locked-in partnership rates before public pricing is introduced',
    ],
    ctaLine:
      'Founding Partner terms are by application and conversation — email partnerships@mrsblackowned.com to start the conversation.',
    // Tier pricing TBD — program is currently inquire-only. Populate this
    // array (name, price, includes[]) once tiers are finalized; the section
    // will render a tier grid automatically when entries are present.
    tiers: [],
  },

  toggles: {
    // Founding Partner program is live in "inquire-only" mode.
    showFoundingPartnerTiers: true,
    // Flip to true once audience analytics below are verified.
    showMetrics: false,
    // Flip to true once collaborations.logos has 3+ entries.
    showBrandCollaborations: false,
  },

  // NOTE: these are illustrative example figures for layout/QA purposes.
  // Replace with verified analytics before setting toggles.showMetrics = true.
  audienceSnapshot: {
    heading: 'Audience Snapshot',
    intro: "A closer look at who's reading, watching, and shopping with Mrs. Black Owned.",
    stats: [
      { label: 'Total Cross-Platform Reach', value: '12,400' },
      { label: 'Newsletter Subscribers', value: '1,850' },
      { label: 'Avg. Monthly Website Visitors', value: '3,200' },
      { label: 'Avg. Engagement Rate', value: '4.8%' },
    ],
    breakdown: [
      {
        category: 'Gender',
        items: [
          { label: 'Women', value: '91%' },
          { label: 'Men', value: '7%' },
          { label: 'Non-binary / Other', value: '2%' },
        ],
      },
      {
        category: 'Age',
        items: [
          { label: '18–24', value: '18%' },
          { label: '25–34', value: '41%' },
          { label: '35–44', value: '28%' },
          { label: '45+', value: '13%' },
        ],
      },
      {
        category: 'Top Locations',
        items: [
          { label: 'United States', value: '78%' },
          { label: 'United Kingdom', value: '8%' },
          { label: 'Canada', value: '6%' },
          { label: 'Other', value: '8%' },
        ],
      },
    ],
  },

  collaborations: {
    heading: 'Brand Collaborations',
    intro: "A selection of the Black-owned brands we've featured and worked with.",
    // Populate with { src, alt } once partner logos are available. The
    // section renders only when toggles.showBrandCollaborations is true
    // AND this array has 3 or more entries.
    logos: [],
  },

  whyPartner: [
    {
      title: 'An Audience That Buys With Intention',
      description: "Our readers don't just browse — they're actively seeking Black-owned brands to support, follow, and buy from.",
    },
    {
      title: 'Editorial Credibility',
      description: 'Coverage on Mrs. Black Owned carries the trust of an editorial voice, not a paid placement that reads like an ad.',
    },
    {
      title: 'Multi-Platform Storytelling',
      description: 'Your brand story can live across web, book, and social — each format reinforcing the others.',
    },
    {
      title: 'Aligned Values',
      description: 'We only feature brands we believe in. Partnering with us means joining a curated, values-aligned community.',
    },
    {
      title: 'A Growing Platform, Ground-Floor Pricing',
      description: "Founding Partners help shape the platform's direction and lock in early-stage rates.",
    },
  ],

  founder: {
    name: 'Kay Martin',
    title: 'Founder, Editor & Author',
    headshot: '/Images/IMG_3792.webp',
    shortBio:
      'Kay Martin is a beauty editorial writer and author whose work centers Black women, ownership, and self-expression. She is the founder of Mrs. Black Owned and author of All the Black-Owned, Babee!',
    // Approved long-form bio pending — leave empty to omit on the live page.
    longBio: '',
  },

  // If a file doesn't exist yet in /public, the Assets section hides that row.
  assets: [
    { label: 'Media Kit (PDF)', path: '/media-kit/mrs-black-owned-media-kit.pdf', description: 'The full media kit, formatted for print and sharing.' },
    { label: 'Logo Pack', path: '/press/logo-pack.zip', description: 'Mrs. Black Owned logos in multiple formats.' },
    { label: 'Brand Guide', path: '/press/brand-guide.pdf', description: 'Colors, typography, and usage guidelines.' },
    { label: 'Founder Headshots', path: '/press/headshots.zip', description: 'High-resolution photos of Kay Martin.' },
  ],

  contact: {
    partnerships: { label: 'Partnerships', email: 'partnerships@mrsblackowned.com' },
    general: { label: 'General Inquiries', email: 'mrsblackowned@gmail.com' },
  },

  footerNav: [
    { label: 'About', href: '/#about' },
    { label: 'Directory', href: '/#directory' },
    { label: 'Advertise', href: '/media-kit#opportunities' },
    { label: 'Partner With Us', href: '/media-kit#founding-partners' },
    { label: 'Media Kit', href: '/media-kit' },
    { label: 'Contact', href: '/#contact' },
  ],

  seo: {
    title: 'Mrs. Black Owned — Media Kit',
    ogImage: '/Logos/BBMainLogoTransparent.webp',
  },
}

export default mediaKit
