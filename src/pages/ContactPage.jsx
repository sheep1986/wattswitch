import React from 'react'
import { Phone, Mail, MapPin, Clock, ArrowRight, Send } from 'lucide-react'
import QuoteForm from '../components/QuoteForm'
import OptimizedImage from '../components/OptimizedImage'

const ContactPage = () => {
  return (
    <div>
      <section className="hero-gradient text-white py-24">
        <div className="container">
          <h1 className="hero-title">Contact Us</h1>
          <p className="hero-subtitle max-w-3xl">
            Get in touch with our expert team for all your business energy needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a 
              href="https://app.watt.co.uk/company"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white"
            >
              Get Instant Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="tel:+441618338661"
              className="btn-outline"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:+441618338661" className="text-primary-500 hover:underline">
                      0161 833 8661
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:hello@wattswitch.co.uk" className="text-primary-500 hover:underline">
                      hello@wattswitch.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-600">
                      St Ann's House, 5th Floor<br />
                      St Ann's Square<br />
                      Manchester M2 7LP<br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:30 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-primary-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Prefer to Call?</h3>
                <p className="text-gray-600 mb-4">
                  Our energy experts are available Monday to Friday to discuss your requirements 
                  and provide instant quotes over the phone.
                </p>
                <a href="tel:+441618338661" className="btn-primary inline-block">
                  Call 0161 833 8661
                </a>
              </div>

              {/* Office Image */}
              <div className="mt-12">
                <OptimizedImage
                  src="/images/office-team.jpg"
                  alt="Professional energy consultants working in modern Manchester office"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                  title="Watt Switch energy experts team in Manchester office"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage