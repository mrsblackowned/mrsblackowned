import React from 'react'

const BookPage = React.forwardRef(({ src, alt, children, className = '' }, ref) => {
  return (
    <div ref={ref} className={`book-page ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt || ''}
          className="w-full h-full object-cover"
          loading="lazy"
          draggable={false}
        />
      ) : (
        children
      )}
    </div>
  )
})

BookPage.displayName = 'BookPage'

export default BookPage
