import React, { useEffect } from 'react'

const GetQuote = () => {
  useEffect(() => {
    // Redirect to Watt app immediately
    window.location.href = 'https://app.watt.co.uk/company'
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-pulse">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Redirecting to Watt App...</h2>
          <p className="text-gray-600">You will be redirected to our secure quote system.</p>
        </div>
      </div>
    </div>
  )
}

export default GetQuote