import React from 'react'
import { Droplets, TrendingDown, Shield, Clock, ArrowRight, CheckCircle, Building } from 'lucide-react'
import QuoteForm from '../components/QuoteForm'
import OptimizedImage from '../components/OptimizedImage'

const WaterServices = () => {
  const benefits = [
    'Compare business water prices from multiple retailers',
    'Save up to 30% on your water bills',
    'Switch water suppliers since deregulation',
    'No interruption to your water supply',
    'Free comparison service with expert support',
    'Dedicated account management'
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-600 via-blue-500 to-primary-500 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <OptimizedImage
            src="/images/water-droplets.jpg"
            alt="Clean water droplets and sustainable water management systems"
            className="w-full h-full object-cover opacity-20"
            title="Business water supply and management solutions"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/90 to-primary-500/90"></div>
        </div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Business Water Supply Services
              </h1>
              <p className="text-xl mb-8 text-cyan-100">
                Switch business water suppliers and reduce costs. Compare water retailers 
                across England since water market deregulation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://app.watt.co.uk/company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-cyan-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-100 transition-all transform hover:scale-105 shadow-xl"
                >
                  Compare Water Prices
                  <Droplets className="ml-2 h-6 w-6" />
                </a>
                <a 
                  href="tel:+441618338661"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-cyan-600 transition-all"
                >
                  Call 0161 833 8661
                </a>
              </div>
            </div>
            <div className="relative">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Business Water Switching Benefits</h2>
            <p className="text-xl text-gray-600">
              Take advantage of water market deregulation to reduce your business costs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                <CheckCircle className="h-8 w-8 text-primary-500 mb-4" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Water Deregulation Info */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Water Market Deregulation</h2>
              <p className="text-gray-600 mb-4">
                Since April 2017, businesses in England can choose their water retailer, 
                opening up competition and potential savings. The water market deregulation 
                means you're no longer tied to your regional water company.
              </p>
              <p className="text-gray-600 mb-6">
                While your water will still be supplied through the same pipes and infrastructure, 
                you can now choose who manages your account, billing, and customer service.
              </p>
              <a 
                href="https://app.watt.co.uk/company"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                Start Comparison
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="relative">
              <OptimizedImage
                src="/images/water-facility.jpg"
                alt="Modern water treatment facility and infrastructure"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                title="Water supply infrastructure and treatment facilities"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WaterServices
