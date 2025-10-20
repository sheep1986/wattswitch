import React from 'react'

const PrivacyPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-blue-100">
            How Watt Utilities UK Ltd protects and uses your personal data
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Privacy Policy</h2>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold mb-3">1. Introduction</h3>
                  <p>
                    Watt Utilities UK Ltd ("we", "us", "our") is committed to protecting your privacy and personal data. 
                    This Privacy Policy explains how we collect, use, and protect your information when you use our services.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">2. Information We Collect</h3>
                  <p>We may collect the following types of information:</p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>Business contact details (name, email, phone number)</li>
                    <li>Business information (company name, address, energy usage)</li>
                    <li>Current energy supplier and contract details</li>
                    <li>Website usage data through cookies and analytics</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">3. How We Use Your Information</h3>
                  <p>We use your personal data to:</p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>Provide energy comparison and switching services</li>
                    <li>Obtain quotes from energy suppliers on your behalf</li>
                    <li>Communicate with you about our services</li>
                    <li>Provide ongoing account management and support</li>
                    <li>Comply with legal and regulatory requirements</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">4. Sharing Your Information</h3>
                  <p>
                    We may share your information with energy suppliers to obtain quotes and facilitate switches. 
                    We do not sell your personal data to third parties. We may also share information with:
                  </p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>Regulatory bodies where required by law</li>
                    <li>Professional advisors (legal, accounting, insurance)</li>
                    <li>Service providers who assist with our operations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">5. Data Security</h3>
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal data 
                    against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">6. Your Rights</h3>
                  <p>Under data protection law, you have the right to:</p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>Access your personal data</li>
                    <li>Correct inaccurate personal data</li>
                    <li>Request deletion of your personal data</li>
                    <li>Object to processing of your personal data</li>
                    <li>Request transfer of your personal data</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">7. Cookies</h3>
                  <p>
                    Our website uses cookies to improve user experience and analyze website traffic. 
                    You can control cookie settings through your browser preferences.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">8. Data Retention</h3>
                  <p>
                    We retain your personal data only for as long as necessary to provide our services 
                    and comply with legal obligations.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">9. Contact Us</h3>
                  <p>
                    If you have any questions about this Privacy Policy or how we handle your personal data, 
                    please contact us at:
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

export default PrivacyPage