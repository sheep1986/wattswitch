import React from 'react'

const OptimizedImage = ({ 
  src, 
  alt, 
  title,
  className = '', 
  loading = 'lazy',
  width,
  height,
  priority = false
}) => {
  // SEO-friendly image component with proper attributes
  return (
    <img
      src={src}
      alt={alt}
      title={title || alt}
      className={className}
      loading={priority ? 'eager' : loading}
      width={width}
      height={height}
      decoding="async"
      itemProp="image"
    />
  )
}

export default OptimizedImage