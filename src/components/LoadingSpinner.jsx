import React from 'react'
import { Zap } from 'lucide-react'

const LoadingSpinner = ({ fullPage = true, message = "Loading..." }) => {
  const content = (
    <div className="flex flex-col items-center justify-center">
      <div className="relative mb-6">
        {/* Logo Animation */}
        <div className="relative">
          <img 
            src="/watt-switch-logo.png" 
            alt="Watt Switch Loading" 
            className="h-20 w-auto animate-pulse"
          />
        </div>
        
        {/* Spinning Energy Ring */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-primary-500"></div>
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-secondary-500 absolute" 
               style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>
        
        {/* Lightning Bolt Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Zap className="h-8 w-8 text-primary-500 animate-pulse" />
        </div>
      </div>
      
      {/* Loading Message */}
      <div className="text-center">
        <p className="text-lg font-semibold text-gray-700 mb-2">{message}</p>
        <p className="text-sm text-gray-500">Finding the best energy deals for your business...</p>
        
        {/* Progress Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  )

  if (fullPage) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-95 backdrop-blur-sm flex items-center justify-center z-50">
        {content}
      </div>
    )
  }

  return content
}

export default LoadingSpinner