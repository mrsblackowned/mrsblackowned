import { useState, useEffect } from 'react'

const announcements = [
  'FREE SHIPPING ON ORDERS OVER $75',
  'NEW ARRIVALS — CURATED BLACK-OWNED BEAUTY',
  'SUBSCRIBE & SAVE 15% ON YOUR FIRST ORDER',
]

const AnnouncementBar = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % announcements.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-primary text-white py-2.5 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p
          key={current}
          className="font-body text-[11px] tracking-[0.25em] uppercase announcement-slide"
        >
          {announcements[current]}
        </p>
      </div>
    </div>
  )
}

export default AnnouncementBar
