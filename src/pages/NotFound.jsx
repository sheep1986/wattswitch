import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Zap } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full mb-8">
          <Zap className="h-12 w-12 text-white" />
        </div>
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. But don't worry, we can still help you save on your business energy!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary inline-flex items-center justify-center">
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
          <a 
            href="https://app.watt.co.uk/company"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center justify-center"
          >
            <Zap className="mr-2 h-5 w-5" />
            Get Quote
          </a>
        </div>
      </div>
    </div>
  )
}

export default NotFound
