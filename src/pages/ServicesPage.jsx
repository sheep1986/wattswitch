import React from 'react'
import { Link } from 'react-router-dom'
import { Zap, Flame, Droplet, Phone, Sun, Building2, FileCheck, TrendingUp, ArrowRight } from 'lucide-react'

const ServicesPage = () => {
  const services = [
    {
      icon: <Zap className="h-12 w-12 text-primary-500" />,
      title: 'Business Electricity',
      description: 'Expert electricity procurement with access to competitive rates from 30+ UK suppliers. We negotiate the best deals and manage your switch seamlessly.',
      features: [
        'Compare multiple suppliers',
        'Fixed and variable rate options',
        'Green energy solutions',
        'Contract management'
      ],
      link: '/business-electricity'
    },
    {
      icon: <Flame className="h-12 w-12 text-orange-500" />,
      title: 'Business Gas',
      description: 'Comprehensive gas supply solutions with transparent pricing and no hidden fees. Reduce your gas costs with our expert negotiation.',
      features: [
        'Competitive gas rates',
        'Flexible contract terms',
        'Dual fuel packages',
        'Usage monitoring'
      ],
      link: '/business-gas'
    },
    {
      icon: <Droplet className="h-12 w-12 text-blue-500" />,
      title: 'Water Services',
      description: 'Complete water and wastewater management since market deregulation. Switch suppliers and save on your water bills.',
      features: [
        'Water supply switching',
        'Wastewater services',
        'Leak detection support',
        'Bill validation'
      ],
      link: '/water-services'
    },
    {
      icon: <Phone className="h-12 w-12 text-purple-500" />,
      title: 'Telecoms & Broadband',
      description: 'Business-grade telecommunications solutions including phone systems, broadband, and mobile packages tailored to your needs.',
      features: [
        'Business broadband',
        'VoIP phone systems',
        'Mobile packages',
        'Unified communications'
      ],
      link: '/telecoms-services'
    },
    {
      icon: <Sun className="h-12 w-12 text-yellow-500" />,
      title: 'Renewable Energy',
      description: 'Sustainable energy solutions to reduce your carbon footprint and energy costs with solar, wind, and other renewable options.',
      features: [
        'Solar panel installation',
        'Green energy tariffs',
        'Carbon offsetting',
        'Sustainability consulting'
      ],
      link: '/renewable-energy'
    },
    {
      icon: <Building2 className="h-12 w-12 text-indigo-500" />,
      title: 'Multi-Site Energy',
      description: 'Centralized energy management for businesses with multiple locations. Streamline billing and optimize costs across all sites.',
      features: [
        'Portfolio management',
        'Consolidated billing',
        'Site-by-site analysis',
        'Group buying power'
      ],
      link: '/multi-site-energy'
    },
    {
      icon: <FileCheck className="h-12 w-12 text-green-500" />,
      title: 'Bill Validation',
      description: 'Comprehensive bill auditing to identify errors and overcharges. Recover money from historical billing mistakes.',
      features: [
        'Error detection',
        'Overcharge recovery',
        'Usage analysis',
        'Cost allocation'
      ],
      link: '/bill-validation'
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-red-500" />,
      title: 'Energy Auditing',
      description: 'Detailed energy consumption analysis to identify savings opportunities and improve efficiency across your business.',
      features: [
        'Consumption analysis',
        'Efficiency recommendations',
        'Cost reduction strategies',
        'Compliance support'
      ],
      link: '/energy-auditing'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Comprehensive utility management solutions designed to reduce costs and simplify 
            operations for UK businesses of all sizes
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="mr-4">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to={service.link} 
                      className="inline-flex items-center text-primary-500 font-semibold hover:text-primary-600 transition-colors"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Watt Switch for Your Business Utilities?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">One Provider, All Services</h3>
              <p className="text-gray-600">
                Manage all your business utilities through a single trusted partner, simplifying 
                administration and reducing complexity.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Bulk Buying Power</h3>
              <p className="text-gray-600">
                Leverage our collective buying power from managing 900,000+ businesses to secure 
                better rates than going direct.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
              <p className="text-gray-600">
                Dedicated account managers provide ongoing support, market insights, and proactive 
                renewal management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Optimize Your Business Utilities?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Get started with a free consultation and see how much you could save
          </p>
          <Link to="/get-quote" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            Get Your Free Quote
            <ArrowRight className="inline-block ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage