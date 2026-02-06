import BookConviction from './BookConviction'
import PagePreviews from './PagePreviews'
import PostPreviewCTA from './PostPreviewCTA'
import EditionSelect from './EditionSelect'
import Affirmation from './Affirmation'

/*
 * BookFunnel — Full conversion funnel for the book.
 *
 * Funnel structure:
 *   1. BookConviction  — Book displayed as cultural object, feature statements, one soft CTA
 *   2. PagePreviews    — Part I page spreads, NO CTAs (pages do the selling)
 *   3. PostPreviewCTA  — Transition moment after Part I, one secondary CTA
 *   4. EditionSelect   — "Choose Your Edition" final conversion (only side-by-side options)
 *   5. Affirmation     — Closing cultural statement, subtle text link
 *
 * CTA language rotation:
 *   Primary (before format choice):  "Begin the Experience"
 *   Secondary (after Part I):        "Continue the Journey"
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
      <PagePreviews />
      <PostPreviewCTA />
      <EditionSelect />
      <Affirmation />
    </>
  )
}

export default BookFunnel
