import React from 'react'

const TermsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-xl text-blue-100">
            Terms and conditions for Watt Utilities UK Ltd services
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Terms and Conditions of Service</h2>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold mb-3">1. Introduction</h3>
                  <p>
                    These terms and conditions ("Terms") govern your use of services provided by Watt Utilities UK Ltd 
                    ("we", "us", "our"). By engaging our services, you agree to be bound by these Terms.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">2. Services</h3>
                  <p>
                    We provide business energy comparison and switching services, helping UK businesses find and switch 
                    to more competitive energy suppliers. Our services include:
                  </p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>Energy price comparison across multiple suppliers</li>
                    <li>Contract negotiation and switching services</li>
                    <li>Ongoing account management</li>
                    <li>Bill validation and optimization services</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">3. Our Role</h3>
                  <p>
                    We act as an intermediary between you and energy suppliers. We are paid commission by suppliers 
                    when you enter into a contract through our services. This commission does not affect the prices 
                    you pay for energy.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">4. Your Obligations</h3>
                  <p>You agree to:</p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>Provide accurate information about your energy requirements</li>
                    <li>Review all contract terms before signing</li>
                    <li>Comply with the terms of any energy supply contract you enter into</li>
                    <li>Notify us promptly of any changes to your business circumstances</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">5. Limitation of Liability</h3>
                  <p>
                    Our liability is limited to the extent permitted by law. We are not liable for any losses arising 
                    from energy supplier performance, market price fluctuations, or circumstances beyond our reasonable control.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">6. Data Protection</h3>
                  <p>
                    We process your personal data in accordance with our Privacy Policy and applicable data protection 
                    laws. We may share your information with energy suppliers for the purpose of obtaining quotes and 
                    facilitating switches.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">7. Termination</h3>
                  <p>
                    Either party may terminate this agreement with reasonable notice. Termination does not affect any 
                    energy supply contracts already entered into.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">8. Governing Law</h3>
                  <p>
                    These Terms are governed by English law and subject to the exclusive jurisdiction of the English courts.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">9. Contact Information</h3>
                  <p>
                    If you have any questions about these Terms, please contact us at:
                  </p>
                  <div className="mt-2">
                    <p><strong>Watt Utilities UK Ltd</strong></p>
                    <p>Phone: 0161 833 8661</p>
                  </div>
                </div>

                <div className="text-sm text-gray-500 mt-8 pt-6 border-t">
                  <p>Last updated: January 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsPage