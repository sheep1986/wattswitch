import React from 'react'
import { Phone, Wifi, Globe, ArrowRight, CheckCircle, Building } from 'lucide-react'
import QuoteForm from '../components/QuoteForm'
import OptimizedImage from '../components/OptimizedImage'

const TelecomsServices = () => {
  const services = [
    {
      icon: <Wifi className="h-8 w-8" />,
      title: 'Business Broadband',
      description: 'High-speed fibre broadband for your business. Compare packages from leading providers.',
      features: ['Up to 1Gbps speeds', 'Dedicated support', 'SLA guarantees']
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: 'Business Phone Systems',
      description: 'Modern VoIP and traditional phone systems. Cloud-based solutions for flexibility.',
      features: ['VoIP & traditional lines', 'Call recording', 'Mobile integration']
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Mobile & Data Plans',
      description: 'Business mobile contracts and data plans. Bulk discounts for multiple devices.',
      features: ['Unlimited data options', 'Device management', 'International roaming']
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-indigo-500 to-primary-500 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <OptimizedImage
            src="/images/telecommunications.jpg"
            alt="Modern telecommunications infrastructure and business connectivity solutions"
            className="w-full h-full object-cover opacity-20"
            title="Business telecoms and broadband services"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 to-primary-500/90"></div>
        </div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Business Telecoms & Broadband
              </h1>
              <p className="text-xl mb-8 text-purple-100">
                Compare business broadband, phone systems, and mobile plans. 
                Get connected with the best telecoms deals for UK businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://app.watt.co.uk/company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-100 transition-all transform hover:scale-105 shadow-xl"
                >
                  Compare Telecoms
                  <Phone className="ml-2 h-6 w-6" />
                </a>
                <a 
                  href="tel:+441618338661"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all"
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

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Business Telecoms Solutions</h2>
            <p className="text-xl text-gray-600">
              Complete telecommunications packages for modern businesses
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-purple-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connectivity Solutions */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <OptimizedImage
                src="/images/network-infrastructure.jpg"
                alt="Advanced network infrastructure and fiber optic cables"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                title="High-speed business broadband and network solutions"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Modern Business Connectivity</h2>
              <p className="text-gray-600 mb-4">
                Stay connected with reliable, high-speed business telecoms solutions. 
                From fibre broadband to cloud phone systems, we help you find the 
                right connectivity package for your business needs.
              </p>
              <p className="text-gray-600 mb-6">
                Our telecoms comparison service includes broadband, phone lines, 
                mobile contracts, and unified communications platforms - all from 
                leading UK providers.
              </p>
              <a 
                href="https://app.watt.co.uk/company"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                Get Telecoms Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TelecomsServices
