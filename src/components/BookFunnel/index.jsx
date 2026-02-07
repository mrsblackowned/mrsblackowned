import BookConviction from './BookConviction'
import BookPreview from './BookPreview'
import EditionSelect from './EditionSelect'
import Affirmation from './Affirmation'

/*
 * BookFunnel — Full conversion funnel for the book.
 *
 * Funnel structure:
 *   1. BookConviction  — Book displayed as cultural object, feature statements, one soft CTA
 *   2. BookPreview     — Interactive page-flip preview with "Own a Copy" CTA on final page
 *   3. EditionSelect   — "Choose Your Edition" final conversion (only side-by-side options)
 *   4. Affirmation     — Closing cultural statement, subtle text link
 *
 * CTA language rotation:
 *   Primary (before format choice):  "Begin the Experience"
 *   Book CTA (final preview page):   "Own a Copy" → opens purchase modal
 *   Final (one time only):           "Choose Your Edition"
 *   Affirmation (subtle link):       "Own the Archive"
 *
 * Single-CTA rule:
 *   Only ONE primary CTA exists in the viewport at any time.
 *   Enforced by vertical section spacing + GSAP ScrollTrigger
 *   enter/exit animations. No two buttons compete for attention.
 */
const BookFunnel = () => {
  return (
    <>
      <BookConviction />
      <BookPreview />
      <EditionSelect />
      <Affirmation />
    </>
  )
}

export default BookFunnel
