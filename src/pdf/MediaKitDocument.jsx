import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'
import { Document, Page, View, Text, Image, StyleSheet, Font } from '@react-pdf/renderer'
import { mediaKit } from '../data/mediaKit.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '../..')
const fontFile = (pkg, file) => path.join(root, 'node_modules/@fontsource', pkg, 'files', file)

Font.register({
  family: 'Lora',
  fonts: [
    { src: fontFile('lora', 'lora-latin-400-normal.woff') },
    { src: fontFile('lora', 'lora-latin-400-italic.woff'), fontStyle: 'italic' },
    { src: fontFile('lora', 'lora-latin-500-normal.woff'), fontWeight: 500 },
    { src: fontFile('lora', 'lora-latin-600-normal.woff'), fontWeight: 600 },
    { src: fontFile('lora', 'lora-latin-700-normal.woff'), fontWeight: 700 },
  ],
})

Font.register({
  family: 'Poppins',
  fonts: [
    { src: fontFile('poppins', 'poppins-latin-300-normal.woff'), fontWeight: 300 },
    { src: fontFile('poppins', 'poppins-latin-400-normal.woff') },
    { src: fontFile('poppins', 'poppins-latin-500-normal.woff'), fontWeight: 500 },
    { src: fontFile('poppins', 'poppins-latin-600-normal.woff'), fontWeight: 600 },
    { src: fontFile('poppins', 'poppins-latin-700-normal.woff'), fontWeight: 700 },
  ],
})

const { brand, hero, proof, about, audience, offerings, foundingPartners, founder, contact } = mediaKit
const { ink, gold, cream, muted } = brand.colors

const styles = StyleSheet.create({
  page: {
    backgroundColor: cream,
    color: ink,
    fontFamily: 'Poppins',
    fontSize: 9.5,
    paddingTop: 48,
    paddingBottom: 56,
    paddingHorizontal: 48,
  },
  footer: {
    position: 'absolute',
    bottom: 24,
    left: 48,
    right: 48,
    borderTopWidth: 1,
    borderTopColor: gold,
    paddingTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    fontFamily: 'Poppins',
    fontSize: 7,
    fontWeight: 600,
    color: gold,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  pageNumber: {
    fontFamily: 'Poppins',
    fontSize: 7,
    color: muted,
  },
  brandLockup: {
    fontFamily: 'Poppins',
    fontSize: 9,
    fontWeight: 600,
    letterSpacing: 4,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: ink,
    marginBottom: 28,
  },
  eyebrow: {
    fontFamily: 'Poppins',
    fontSize: 8,
    fontWeight: 600,
    color: gold,
    textTransform: 'uppercase',
    letterSpacing: 3,
    marginBottom: 12,
  },
  h1: {
    fontFamily: 'Lora',
    fontSize: 34,
    fontWeight: 500,
    lineHeight: 1.15,
    marginBottom: 16,
    textAlign: 'center',
    color: ink,
  },
  h2: {
    fontFamily: 'Lora',
    fontSize: 22,
    fontWeight: 500,
    marginBottom: 14,
    color: ink,
  },
  h3: {
    fontFamily: 'Lora',
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 8,
    color: ink,
  },
  subhead: {
    fontFamily: 'Poppins',
    fontSize: 10,
    lineHeight: 1.6,
    textAlign: 'center',
    color: ink,
    maxWidth: 380,
    marginHorizontal: 'auto',
  },
  body: {
    fontFamily: 'Poppins',
    fontSize: 9.5,
    lineHeight: 1.6,
    marginBottom: 10,
    color: ink,
  },
  pullquote: {
    fontFamily: 'Lora',
    fontStyle: 'italic',
    fontSize: 15,
    lineHeight: 1.6,
    marginBottom: 16,
    color: ink,
  },
  hairline: {
    height: 1,
    backgroundColor: gold,
    marginBottom: 10,
  },
  calloutBox: {
    borderLeftWidth: 2,
    borderLeftColor: gold,
    paddingLeft: 14,
    marginTop: 16,
  },
  note: {
    fontFamily: 'Lora',
    fontStyle: 'italic',
    fontSize: 8,
    color: muted,
    marginTop: 8,
  },
  // Proof block — signature element
  proofGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
  proofItem: {
    width: '22%',
  },
  proofValue: {
    fontFamily: 'Lora',
    fontSize: 26,
    fontWeight: 500,
    marginBottom: 6,
    color: ink,
  },
  proofLabel: {
    fontFamily: 'Poppins',
    fontSize: 6.5,
    textTransform: 'uppercase',
    letterSpacing: 1,
    lineHeight: 1.4,
    color: ink,
  },
  // Lists
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  bullet: {
    width: 8,
    height: 1,
    backgroundColor: gold,
    marginTop: 4,
    marginRight: 8,
  },
  listText: {
    flex: 1,
    fontFamily: 'Poppins',
    fontSize: 8.5,
    lineHeight: 1.5,
    color: ink,
  },
  // Opportunities grid
  offeringItem: {
    width: '50%',
    paddingRight: 14,
    marginBottom: 12,
  },
  offeringTitle: {
    fontFamily: 'Poppins',
    fontSize: 8.5,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 3,
    color: ink,
  },
  offeringNumber: {
    color: gold,
  },
  offeringDesc: {
    fontFamily: 'Poppins',
    fontSize: 8,
    lineHeight: 1.5,
    color: ink,
  },
  headshot: {
    width: 140,
    height: 175,
    objectFit: 'cover',
    marginRight: 20,
  },
})

const Footer = ({ pageNumber }) => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>
      {brand.name} · {brand.site} · {contact.partnerships.email}
    </Text>
    <Text style={styles.pageNumber}>{pageNumber}</Text>
  </View>
)

const ListItem = ({ text }) => (
  <View style={styles.listItem}>
    <View style={styles.bullet} />
    <Text style={styles.listText}>{text}</Text>
  </View>
)

// Re-encode the founder headshot as a compressed JPEG buffer so the PDF
// stays well under ~3MB regardless of the source image's size/format.
const founderHeadshot = await sharp(path.join(root, 'public/Images/IMG_3792.jpeg'))
  .resize({ width: 480 })
  .jpeg({ quality: 78 })
  .toBuffer()

const MediaKitDocument = () => (
  <Document title={mediaKit.seo.title} author={brand.name}>
    {/* Page 1 — Cover: Hero + Proof Block */}
    <Page size="LETTER" style={styles.page}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={styles.brandLockup}>{brand.name}</Text>
        <Text style={[styles.eyebrow, { textAlign: 'center' }]}>{hero.eyebrow}</Text>
        <Text style={styles.h1}>{hero.headline}</Text>
        <Text style={styles.subhead}>{hero.subhead}</Text>
      </View>

      <View style={styles.proofGrid}>
        {proof.map((stat) => (
          <View key={stat.label} style={styles.proofItem}>
            <View style={styles.hairline} />
            <Text style={styles.proofValue}>{stat.value}</Text>
            <Text style={styles.proofLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>

      <Footer pageNumber="1 / 5" />
    </Page>

    {/* Page 2 — About + Market Context */}
    <Page size="LETTER" style={styles.page}>
      <Text style={styles.eyebrow}>About</Text>
      <Text style={styles.h2}>{brand.name}</Text>
      <Text style={styles.pullquote}>&ldquo;{about.short}&rdquo;</Text>
      {about.long.map((paragraph, i) => (
        <Text key={i} style={styles.body}>{paragraph}</Text>
      ))}
      <View style={styles.calloutBox}>
        <Text style={[styles.eyebrow, { color: muted, marginBottom: 6 }]}>Market Context</Text>
        <Text style={[styles.pullquote, { fontSize: 11, marginBottom: 0 }]}>{about.marketContext}</Text>
      </View>
      <Footer pageNumber="2 / 5" />
    </Page>

    {/* Page 3 — Audience + Opportunities */}
    <Page size="LETTER" style={styles.page}>
      <Text style={styles.eyebrow}>Our Audience</Text>
      <View style={{ flexDirection: 'row', marginBottom: 22 }}>
        <View style={{ flex: 1, paddingRight: 16 }}>
          <Text style={styles.h3}>{audience.reach.heading}</Text>
          {audience.reach.items.map((item) => <ListItem key={item} text={item} />)}
        </View>
        <View style={{ flex: 1, paddingLeft: 16 }}>
          <Text style={styles.h3}>{audience.represent.heading}</Text>
          {audience.represent.items.map((item) => <ListItem key={item} text={item} />)}
          <Text style={styles.note}>{audience.represent.note}</Text>
        </View>
      </View>

      <View style={styles.hairline} />
      <Text style={[styles.eyebrow, { marginTop: 8 }]}>Partner With Us</Text>
      <Text style={styles.h3}>Partnership Opportunities</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {offerings.map((offer, i) => (
          <View key={offer.title} style={styles.offeringItem}>
            <Text style={styles.offeringTitle}>
              <Text style={styles.offeringNumber}>{String(i + 1).padStart(2, '0')}{'  '}</Text>
              {offer.title}
            </Text>
            <Text style={styles.offeringDesc}>{offer.description}</Text>
          </View>
        ))}
      </View>
      <Footer pageNumber="3 / 5" />
    </Page>

    {/* Page 4 — Founding Partner Program */}
    <Page size="LETTER" style={styles.page}>
      <Text style={styles.eyebrow}>Limited Availability</Text>
      <Text style={styles.h2}>{foundingPartners.headline}</Text>
      <Text style={styles.body}>{foundingPartners.intro}</Text>
      <View style={{ marginTop: 4 }}>
        {foundingPartners.benefits.map((benefit) => <ListItem key={benefit} text={benefit} />)}
      </View>
      <View style={[styles.calloutBox, { marginTop: 'auto' }]}>
        <Text style={[styles.pullquote, { marginBottom: 0 }]}>{foundingPartners.ctaLine}</Text>
      </View>
      <Footer pageNumber="4 / 5" />
    </Page>

    {/* Page 5 — Founder + Contact */}
    <Page size="LETTER" style={styles.page}>
      <Text style={styles.eyebrow}>Press &amp; Media</Text>
      <View style={{ flexDirection: 'row', marginBottom: 28 }}>
        <Image src={{ data: founderHeadshot, format: 'jpg' }} style={styles.headshot} />
        <View style={{ flex: 1 }}>
          <Text style={styles.h3}>{founder.name}</Text>
          <Text style={[styles.eyebrow, { marginBottom: 8 }]}>{founder.title}</Text>
          <Text style={styles.body}>{founder.shortBio}</Text>
          {founder.longBio && <Text style={styles.body}>{founder.longBio}</Text>}
        </View>
      </View>

      <View style={styles.hairline} />
      <Text style={[styles.eyebrow, { marginTop: 8 }]}>Contact</Text>
      <View style={{ flexDirection: 'row' }}>
        {Object.values(contact).map((entry) => (
          <View key={entry.email} style={{ marginRight: 48 }}>
            <Text style={[styles.proofLabel, { marginBottom: 4 }]}>{entry.label}</Text>
            <Text style={{ fontFamily: 'Lora', fontSize: 12, color: ink }}>{entry.email}</Text>
          </View>
        ))}
      </View>
      <Footer pageNumber="5 / 5" />
    </Page>
  </Document>
)

export default MediaKitDocument
