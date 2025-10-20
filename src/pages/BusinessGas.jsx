import React from 'react'
import { Link } from 'react-router-dom'
import { Flame, TrendingDown, Shield, Clock, ArrowRight, CheckCircle, PoundSterling, Thermometer } from 'lucide-react'
import QuoteForm from '../components/QuoteForm'
import SupplierLogos from '../components/SupplierLogos'

const BusinessGas = () => {
  const benefits = [
    'Compare business gas prices from 25+ suppliers',
    'Save up to 40% on your gas bills',
    'Fixed-rate contracts for budget certainty',
    'No supply interruption when switching',
    'Free comparison service with no hidden fees',
    'Expert energy brokers handle everything'
  ]

  const gasUsageExamples = [
    { business: 'Small Office', usage: '15,000 kWh/year', savings: '£800' },
    { business: 'Restaurant', usage: '50,000 kWh/year', savings: '£2,200' },
    { business: 'Hotel', usage: '200,000 kWh/year', savings: '£8,500' },
    { business: 'Manufacturing', usage: '500,000 kWh/year', savings: '£18,000' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-red-500 to-primary-500 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/90 to-primary-500/90"></div>
        </div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Compare Business Gas Prices & Save
              </h1>
              <p className="text-xl mb-8 text-orange-100">
                Switch business gas suppliers and reduce your energy costs by up to 40%. 
                Compare commercial gas prices from 25+ UK suppliers instantly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://app.watt.co.uk/company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-100 transition-all transform hover:scale-105 shadow-xl"
                >
                  Get Gas Quote
                  <Flame className="ml-2 h-6 w-6" />
                </a>
                <a 
                  href="tel:+441618338661"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition-all"
                >
                  Call 0161 833 8661
                </a>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold">40%</div>
                  <div className="text-sm">Max Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-sm">Suppliers</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold">4-6</div>
                  <div className="text-sm">Weeks to Switch</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Supplier Section */}
      <section className="py-12 bg-gray-50 border-y">
        <div className="container">
          <p className="text-center text-sm font-medium text-gray-600 mb-6">
            COMPARING BUSINESS GAS PRICES FROM ALL MAJOR UK SUPPLIERS
          </p>
          <SupplierLogos />
        </div>
      </section>

      {/* Why Switch Business Gas */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Switch Business Gas With Watt Switch?</h2>
            <p className="text-xl text-gray-600">The smart way to reduce your commercial gas costs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>

          {/* Cost Breakdown */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Typical Business Gas Savings</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {gasUsageExamples.map((example, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-semibold text-lg mb-2">{example.business}</h4>
                  <p className="text-sm text-gray-600 mb-3">Annual usage: {example.usage}</p>
                  <div className="flex items-baseline gap-2">
                    <PoundSterling className="h-5 w-5 text-green-500" />
                    <span className="text-2xl font-bold text-green-500">{example.savings}</span>
                    <span className="text-gray-600">per year</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gas Contract Types */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Business Gas Contract Options</h2>
            <p className="text-xl text-gray-600">Choose the right gas contract for your business</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <Shield className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Fixed Rate Gas</h3>
              <p className="text-gray-600 mb-4">
                Lock in your gas price for 1-5 years. Protect your business from price volatility.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Budget certainty</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Protection from price rises</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Ideal for stable usage</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <TrendingDown className="h-12 w-12 text-secondary-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Variable Rate Gas</h3>
              <p className="text-gray-600 mb-4">
                Flexible pricing that follows market rates. Benefit from price drops when they occur.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Market flexibility</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">No long-term commitment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Monthly pricing updates</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <Thermometer className="h-12 w-12 text-primary-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Hybrid Contracts</h3>
              <p className="text-gray-600 mb-4">
                Mix of fixed and variable pricing. Balance security with market opportunity.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Partial price protection</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Some market exposure</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Flexible terms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Switching Process */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How to Switch Business Gas Suppliers</h2>
            <p className="text-xl text-gray-600">We make switching simple and hassle-free</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Provide Your Gas Usage</h3>
                  <p className="text-gray-600">
                    Share your current gas bills or annual usage. We'll use this to get accurate quotes from suppliers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Compare Gas Prices</h3>
                  <p className="text-gray-600">
                    We'll search the market and present you with the best business gas deals from 25+ suppliers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Select Your New Deal</h3>
                  <p className="text-gray-600">
                    Choose the gas contract that best suits your business needs and budget.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">We Handle The Switch</h3>
                  <p className="text-gray-600">
                    We manage all paperwork and liaise with both suppliers. Your gas supply continues uninterrupted.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <a 
                href="https://app.watt.co.uk/company"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg"
              >
                Start Your Switch
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Business Gas FAQs</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2">When should I switch business gas suppliers?</h3>
                <p className="text-gray-600">
                  The best time to switch is 3-6 months before your current contract ends. This gives you time to 
                  compare deals and avoid expensive out-of-contract rates.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2">Can I switch if I'm in a contract?</h3>
                <p className="text-gray-600">
                  You can secure a new deal to start when your current contract ends. If you want to leave early, 
                  check for exit fees - sometimes the savings outweigh any penalties.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2">Do I need a smart meter for business gas?</h3>
                <p className="text-gray-600">
                  Smart meters aren't mandatory but they can help you monitor usage and potentially reduce costs. 
                  Many suppliers offer free smart meter installation.
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link 
                to="/faq"
                className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold"
              >
                View All FAQs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-500 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Start Saving on Business Gas Today
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-orange-100">
            Join thousands of UK businesses who've reduced their gas costs with Watt Switch
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://app.watt.co.uk/company"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-orange-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-orange-100 transition-all transform hover:scale-105 shadow-2xl"
            >
              Get Free Gas Quote
              <Flame className="ml-3 h-6 w-6" />
            </a>
            <a 
              href="tel:+441618338661"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition-all"
            >
              Call Our Experts
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BusinessGas
