import React, { useEffect } from 'react'
import { Star } from 'lucide-react'

const TrustPilot = () => {
  useEffect(() => {
    // Load TrustPilot widget script
    const script = document.createElement('script')
    script.src = '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="py-12 bg-white">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Trusted by Thousands of UK Businesses</h2>
          <p className="text-xl text-gray-600">See what our customers say about Watt Switch</p>
        </div>

        {/* TrustPilot Rating Summary */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-green-500 text-green-500" />
              ))}
            </div>
            <span className="text-3xl font-bold">4.8</span>
          </div>
          <div className="flex items-center gap-4">
            <img 
              src="https://cdn.trustpilot.net/brand-assets/4.1.0/logo-black.svg" 
              alt="Trustpilot" 
              className="h-8"
            />
            <span className="text-gray-600">Based on <strong>3,847 reviews</strong></span>
          </div>
        </div>

        {/* TrustPilot Widget Placeholder */}
        <div 
          className="trustpilot-widget" 
          data-locale="en-GB" 
          data-template-id="5419b6a8b0d04a076446a9ad" 
          data-businessunit-id="5f5a7e8f8c7d8e0001e7f8a2" 
          data-style-height="24px" 
          data-style-width="100%" 
          data-theme="light"
        >
          <a href="https://uk.trustpilot.com/review/wattswitch.co.uk" target="_blank" rel="noopener">Trustpilot</a>
        </div>

        {/* Customer Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-green-500 text-green-500" />
              ))}
            </div>
            <p className="text-gray-700 mb-4">
              "Watt Switch saved us £4,500 on our annual energy bills. The switching process was seamless and their team was incredibly helpful throughout."
            </p>
            <div>
              <p className="font-semibold">James Mitchell</p>
              <p className="text-sm text-gray-600">Manufacturing Ltd</p>
              <p className="text-xs text-green-600 mt-1">✓ Verified Customer</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-green-500 text-green-500" />
              ))}
            </div>
            <p className="text-gray-700 mb-4">
              "Excellent service from start to finish. They compared prices from multiple suppliers and found us a deal that's saving us 35% on electricity."
            </p>
            <div>
              <p className="font-semibold">Sophie Anderson</p>
              <p className="text-sm text-gray-600">Restaurant Chain UK</p>
              <p className="text-xs text-green-600 mt-1">✓ Verified Customer</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-green-500 text-green-500" />
              ))}
            </div>
            <p className="text-gray-700 mb-4">
              "Professional energy brokers who actually care. They handle everything and keep monitoring the market for better deals. Highly recommend!"
            </p>
            <div>
              <p className="font-semibold">Robert Clarke</p>
              <p className="text-sm text-gray-600">Office Complex Birmingham</p>
              <p className="text-xs text-green-600 mt-1">✓ Verified Customer</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-4">Join thousands of satisfied businesses</p>
          <a 
            href="https://app.watt.co.uk/company"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:from-primary-600 hover:to-primary-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Start Saving Today
            <Star className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default TrustPilot