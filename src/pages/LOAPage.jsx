import React from 'react'
import { FileText, Download, CheckCircle } from 'lucide-react'

const LOAPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Letter of Authority (LOA)</h1>
          <p className="text-xl text-blue-100">
            Authorize Watt Utilities UK Ltd to act on your behalf for energy switching
          </p>
        </div>
      </section>

      {/* LOA Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-start">
                <FileText className="h-12 w-12 text-primary-500 mr-4 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">What is a Letter of Authority?</h2>
                  <p className="text-gray-700 mb-4">
                    A Letter of Authority (LOA) is a legal document that authorizes Watt Utilities UK Ltd to act on your 
                    behalf when dealing with energy suppliers. This allows us to:
                  </p>
                  <ul className="list-disc ml-6 text-gray-700 space-y-2">
                    <li>Obtain quotes from energy suppliers</li>
                    <li>Negotiate contract terms on your behalf</li>
                    <li>Access your current energy account information</li>
                    <li>Facilitate the switching process</li>
                    <li>Handle any queries with suppliers during the switch</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-bold mb-4">Benefits of Using Our LOA Service</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Hassle-Free Switching</h4>
                    <p className="text-gray-600">We handle all communications with suppliers, saving you time and effort.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Expert Negotiation</h4>
                    <p className="text-gray-600">Our team negotiates the best possible rates and contract terms for you.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Regulatory Compliance</h4>
                    <p className="text-gray-600">All processes comply with Ofgem regulations and industry standards.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">No Hidden Costs</h4>
                    <p className="text-gray-600">Our service is completely free - we're paid by suppliers, not you.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* LOA Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Letter of Authority Form</h3>
              
              <div className="bg-gray-50 border-l-4 border-primary-500 p-6 mb-6">
                <p className="text-gray-700">
                  <strong>Important:</strong> By completing this form, you authorize Watt Utilities UK Ltd to act as your 
                  representative in all matters relating to your business energy supply. This authorization remains valid 
                  until you revoke it in writing.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Business Name *</label>
                    <input type="text" className="form-input" required />
                  </div>
                  <div>
                    <label className="form-label">Contact Name *</label>
                    <input type="text" className="form-input" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Position/Title *</label>
                    <input type="text" className="form-input" required />
                  </div>
                  <div>
                    <label className="form-label">Email Address *</label>
                    <input type="email" className="form-input" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Phone Number *</label>
                    <input type="tel" className="form-input" required />
                  </div>
                  <div>
                    <label className="form-label">Business Postcode *</label>
                    <input type="text" className="form-input" required />
                  </div>
                </div>

                <div>
                  <label className="form-label">Business Address *</label>
                  <textarea rows="3" className="form-input" required></textarea>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Current Electricity Supplier</label>
                    <input type="text" className="form-input" />
                  </div>
                  <div>
                    <label className="form-label">Current Gas Supplier</label>
                    <input type="text" className="form-input" />
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Authorization Statement</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    I hereby authorize Watt Utilities UK Ltd to act on behalf of the above-named business in all matters 
                    relating to energy supply, including but not limited to:
                  </p>
                  <ul className="text-sm text-gray-700 list-disc ml-4 space-y-1">
                    <li>Obtaining quotes from energy suppliers</li>
                    <li>Negotiating contract terms and conditions</li>
                    <li>Accessing current energy account information</li>
                    <li>Submitting applications for new energy contracts</li>
                    <li>Handling all communications with suppliers during the switching process</li>
                  </ul>
                </div>

                <div className="flex items-start">
                  <input type="checkbox" id="terms" className="mt-1 mr-3" required />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I confirm that I have the authority to act on behalf of the above business and agree to the 
                    <a href="/terms" className="text-primary-500 hover:underline ml-1">Terms & Conditions</a> and 
                    <a href="/privacy" className="text-primary-500 hover:underline ml-1">Privacy Policy</a>.
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button type="submit" className="btn-primary">
                    <FileText className="mr-2 h-5 w-5" />
                    Submit LOA
                  </button>
                  <button type="button" className="btn-outline border-primary-500 text-primary-500 hover:bg-primary-500">
                    <Download className="mr-2 h-5 w-5" />
                    Download PDF Version
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-secondary-50 to-primary-50 rounded-xl p-8 mt-8">
              <h3 className="text-xl font-bold mb-4">Need Help?</h3>
              <p className="text-gray-700 mb-4">
                If you have any questions about the Letter of Authority or need assistance completing the form, 
                our team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+441618338661" className="btn-primary">
                  Call 0161 833 8661
                </a>
                <a 
                  href="https://app.watt.co.uk/company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Get Quote First
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LOAPage