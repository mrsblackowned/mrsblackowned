import { useEffect } from 'react'

// Updates document.title and existing <meta> tags for the current route,
// restoring the previous values on unmount.
export const useMetaTags = ({ title, description, ogImage, ogUrl, ogType = 'website' }) => {
  useEffect(() => {
    const prevTitle = document.title
    if (title) document.title = title

    const updates = [
      ['meta[name="description"]', description],
      ['meta[property="og:type"]', ogType],
      ['meta[property="og:title"]', title],
      ['meta[property="og:description"]', description],
      ['meta[property="og:image"]', ogImage],
      ['meta[property="og:url"]', ogUrl],
      ['meta[name="twitter:title"]', title],
      ['meta[name="twitter:description"]', description],
      ['meta[name="twitter:image"]', ogImage],
    ]

    const restores = []
    updates.forEach(([selector, value]) => {
      if (!value) return
      const el = document.head.querySelector(selector)
      if (!el) return
      restores.push([el, el.getAttribute('content')])
      el.setAttribute('content', value)
    })

    return () => {
      document.title = prevTitle
      restores.forEach(([el, prev]) => el.setAttribute('content', prev))
    }
  }, [title, description, ogImage, ogUrl, ogType])
}
