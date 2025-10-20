import React from 'react'
import { Link } from 'react-router-dom'
import { Zap, TrendingDown, Shield, Clock, ArrowRight, CheckCircle, PoundSterling, BarChart3 } from 'lucide-react'
import QuoteForm from '../components/QuoteForm'
import SupplierLogos from '../components/SupplierLogos'

const BusinessElectricity = () => {
  const benefits = [
    'Compare business electricity prices from 30+ suppliers',
    'Save up to 45% on your electricity bills',
    'Fixed-rate contracts to protect against price rises',
    'No interruption to your supply when switching',
    'Free, impartial energy comparison service',
    'Dedicated account manager support'
  ]

  const contractTypes = [
    {
      title: 'Fixed Rate Contracts',
      description: 'Lock in your electricity price for 1-5 years. Perfect for budget certainty and protection against market volatility.',
      icon: <Shield className="h-8 w-8 text-primary-500" />,
      features: ['Price security', 'Budget certainty', 'No surprise bills']
    },
    {
      title: 'Variable Rate Contracts',
      description: 'Flexible pricing that moves with the market. Ideal for businesses wanting to benefit from price drops.',
      icon: <TrendingDown className="h-8 w-8 text-secondary-500" />,
      features: ['Market flexibility', 'No exit fees', 'Monthly pricing']
    },
    {
      title: 'Green Energy Contracts',
      description: '100% renewable electricity from wind, solar, and hydro. Meet your sustainability goals.',
      icon: <Zap className="h-8 w-8 text-green-500" />,
      features: ['Zero carbon', 'REGO certified', 'CSR compliant']
    }
  ]

  const process = [
    { step: 1, title: 'Share Your Details', desc: 'Tell us about your business electricity needs and current usage' },
    { step: 2, title: 'We Compare Prices', desc: 'We search the market and compare business electricity deals from 30+ suppliers' },
    { step: 3, title: 'Choose Your Deal', desc: 'Select the best electricity contract for your business needs' },
    { step: 4, title: 'We Handle Everything', desc: 'We manage the entire switching process from start to finish' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-600 via-secondary-500 to-primary-500 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/images/lightbulb.jpg" 
            alt="Business Electricity Solutions"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-600/90 to-primary-500/90"></div>
        </div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Compare Business Electricity Prices
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Switch business electricity suppliers and save up to 45% on your energy bills. 
                Compare prices from 30+ UK suppliers in under 60 seconds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://app.watt.co.uk/company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-secondary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-400 hover:text-white transition-all transform hover:scale-105 shadow-xl"
                >
                  Compare Prices Now
                  <Zap className="ml-2 h-6 w-6" />
                </a>
                <a 
                  href="tel:+441618338661"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-secondary-600 transition-all"
                >
                  Call 0161 833 8661
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 mt-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold">45%</div>
                  <div className="text-sm">Avg Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold">30+</div>
                  <div className="text-sm">Suppliers</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold">900K+</div>
                  <div className="text-sm">Businesses</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Supplier Logos */}
      <section className="py-12 bg-gray-50 border-y">
        <div className="container">
          <p className="text-center text-sm font-medium text-gray-600 mb-6">
            WE COMPARE BUSINESS ELECTRICITY PRICES FROM ALL MAJOR UK SUPPLIERS
          </p>
          <SupplierLogos />
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Compare Business Electricity With Watt Switch?</h2>
            <p className="text-xl text-gray-600">The UK's trusted business electricity comparison service</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a 
              href="https://app.watt.co.uk/company"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:from-primary-600 hover:to-primary-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Start Comparing Prices
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Contract Types */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Business Electricity Contract Options</h2>
            <p className="text-xl text-gray-600">Choose the right electricity contract for your business needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {contractTypes.map((contract, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all">
                <div className="mb-4">{contract.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{contract.title}</h3>
                <p className="text-gray-600 mb-6">{contract.description}</p>
                <ul className="space-y-2">
                  {contract.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How Business Electricity Switching Works</h2>
            <p className="text-xl text-gray-600">Switch suppliers in 4 simple steps</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {process.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cost Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">How Much Could You Save?</h2>
              <p className="text-lg text-gray-600">Average savings based on your business type</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-xl p-6 hover:border-primary-500 transition-colors">
                <h3 className="font-semibold text-lg mb-3">Small Office</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <PoundSterling className="h-6 w-6 text-green-500" />
                  <span className="text-3xl font-bold text-green-500">£1,200</span>
                  <span className="text-gray-600">per year</span>
                </div>
                <p className="text-sm text-gray-600">Average annual savings</p>
              </div>
              
              <div className="border border-gray-200 rounded-xl p-6 hover:border-primary-500 transition-colors">
                <h3 className="font-semibold text-lg mb-3">Restaurant</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <PoundSterling className="h-6 w-6 text-green-500" />
                  <span className="text-3xl font-bold text-green-500">£3,500</span>
                  <span className="text-gray-600">per year</span>
                </div>
                <p className="text-sm text-gray-600">Average annual savings</p>
              </div>
              
              <div className="border border-gray-200 rounded-xl p-6 hover:border-primary-500 transition-colors">
                <h3 className="font-semibold text-lg mb-3">Manufacturing</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <PoundSterling className="h-6 w-6 text-green-500" />
                  <span className="text-3xl font-bold text-green-500">£15,000</span>
                  <span className="text-gray-600">per year</span>
                </div>
                <p className="text-sm text-gray-600">Average annual savings</p>
              </div>
              
              <div className="border border-gray-200 rounded-xl p-6 hover:border-primary-500 transition-colors">
                <h3 className="font-semibold text-lg mb-3">Retail Store</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <PoundSterling className="h-6 w-6 text-green-500" />
                  <span className="text-3xl font-bold text-green-500">£5,000</span>
                  <span className="text-gray-600">per year</span>
                </div>
                <p className="text-sm text-gray-600">Average annual savings</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <a 
                href="https://app.watt.co.uk/company"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:from-primary-600 hover:to-primary-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Calculate Your Savings
                <BarChart3 className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Business Electricity FAQs</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">How much can I save on business electricity?</h3>
                <p className="text-gray-600">
                  Most businesses save between 20-45% when switching electricity suppliers. The exact amount depends on your current rates, 
                  usage, and contract terms. Our comparison service finds the best deals from 30+ suppliers.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Will my electricity supply be interrupted?</h3>
                <p className="text-gray-600">
                  No, there's absolutely no interruption to your electricity supply when switching. The switch happens behind the scenes - 
                  you'll continue receiving electricity through the same cables, just from a different supplier.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">How long does it take to switch?</h3>
                <p className="text-gray-600">
                  The switching process typically takes 4-6 weeks from accepting a new contract. We handle all the paperwork and 
                  communication with suppliers, making it completely hassle-free for you.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Is there a fee for your comparison service?</h3>
                <p className="text-gray-600">
                  No, our business electricity comparison service is completely free. We're paid a commission by suppliers when you 
                  switch, but this doesn't affect the prices you pay - in fact, we often negotiate better rates than going direct.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Link 
                to="/faq"
                className="inline-flex items-center text-primary-500 hover:text-primary-600 font-semibold"
              >
                View All FAQs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-600 to-primary-500 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Reduce Your Business Electricity Costs?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-blue-100">
            Join 900,000+ UK businesses already saving with Watt Switch. 
            Compare electricity prices in 60 seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://app.watt.co.uk/company"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-secondary-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-primary-400 hover:text-white transition-all transform hover:scale-105 shadow-2xl"
            >
              Compare Electricity Prices
              <Zap className="ml-3 h-6 w-6" />
            </a>
            <a 
              href="tel:+441618338661"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-secondary-600 transition-all"
            >
              Speak to an Expert
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BusinessElectricity