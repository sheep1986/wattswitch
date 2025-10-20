import React, { useState } from 'react'
import { Send } from 'lucide-react'

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    postcode: '',
    currentSupplier: '',
    monthlySpend: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Redirect to Watt app with form data
    const params = new URLSearchParams({
      businessName: formData.businessName,
      contactName: formData.contactName,
      email: formData.email,
      phone: formData.phone,
      postcode: formData.postcode,
      currentSupplier: formData.currentSupplier,
      monthlySpend: formData.monthlySpend
    })
    window.open(`https://app.wattswitch.co.uk/quote?${params.toString()}`, '_blank')
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full blur-2xl opacity-30"></div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2 relative z-10">Get Your Free Quote</h3>
      <p className="text-gray-600 mb-6 relative z-10">Takes less than 60 seconds</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Business Name *
            </label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Name *
            </label>
            <input
              type="text"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Business Postcode *
            </label>
            <input
              type="text"
              name="postcode"
              value={formData.postcode}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Current Supplier
            </label>
            <select
              name="currentSupplier"
              value={formData.currentSupplier}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">Select supplier</option>
              <option value="british-gas">British Gas</option>
              <option value="edf">EDF Energy</option>
              <option value="eon">E.ON</option>
              <option value="scottish-power">Scottish Power</option>
              <option value="sse">SSE</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Estimated Monthly Spend
          </label>
          <select
            name="monthlySpend"
            value={formData.monthlySpend}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Select range</option>
            <option value="0-500">£0 - £500</option>
            <option value="500-1000">£500 - £1,000</option>
            <option value="1000-2500">£1,000 - £2,500</option>
            <option value="2500-5000">£2,500 - £5,000</option>
            <option value="5000+">£5,000+</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-4 rounded-full font-semibold hover:from-primary-600 hover:to-primary-700 transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center group"
        >
          Get My Free Quote
          <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="text-xs text-gray-500 text-center">
          By submitting this form, you agree to our{' '}
          <a href="/terms" className="text-primary-500 hover:underline">
            Terms & Conditions
          </a>{' '}
          and{' '}
          <a href="/privacy" className="text-primary-500 hover:underline">
            Privacy Policy
          </a>
        </p>
      </form>
    </div>
  )
}

export default QuoteForm