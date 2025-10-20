import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-500"></div>
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-300 absolute top-0 left-0" 
             style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
      </div>
    </div>
  )
}

export default LoadingSpinner