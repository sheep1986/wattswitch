import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingDown, Users, Award, Shield, Zap, Building, Phone, CheckCircle, Star, BarChart3, Clock, Sparkles, PoundSterling, Building2, Briefcase } from 'lucide-react'
import QuoteForm from '../components/QuoteForm'
import SupplierLogos from '../components/SupplierLogos'
import OptimizedImage from '../components/OptimizedImage'
import TrustPilot from '../components/TrustPilot'

const HomePage = () => {
  const [currentStat, setCurrentStat] = useState(0)
  const [isVisible, setIsVisible] = useState({})

  const stats = [
    { value: '45%', label: 'Average Business Energy Savings' },
    { value: '900K+', label: 'UK Businesses Switched' },
    { value: '£150M+', label: 'Total Customer Savings' },
    { value: '30+', label: 'Business Energy Suppliers' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const benefits = [
    {
      icon: <PoundSterling className="h-8 w-8" />,
      title: 'Save Up to 45% on Business Energy',
      description: 'Compare business electricity prices and switch to cheaper business gas tariffs with expert negotiation',
      color: 'text-primary-500'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: '900,000+ UK Businesses Trust Us',
      description: 'Join thousands of companies who switched business energy suppliers and reduced their utility costs',
      color: 'text-secondary-500'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: '£150M+ Saved on Energy Bills',
      description: 'Our business energy comparison service has saved UK companies millions on electricity and gas',
      color: 'text-accent-yellow'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Expert Energy Brokers',
      description: 'Dedicated account managers help you compare business energy deals and switch suppliers hassle-free',
      color: 'text-accent-orange'
    }
  ]

  const services = [
    {
      icon: '⚡',
      title: 'Business Electricity Comparison',
      description: 'Compare business electricity prices from 30+ UK suppliers. Find cheaper electricity tariffs today.',
      link: '/business-electricity',
      gradient: 'from-yellow-400 to-orange-500',
      keywords: 'business electricity prices, compare business electricity'
    },
    {
      icon: '🔥',
      title: 'Business Gas Switching',
      description: 'Switch business gas suppliers and save. Compare commercial gas prices with no hidden fees.',
      link: '/business-gas',
      gradient: 'from-red-400 to-orange-500',
      keywords: 'business gas prices, switch business gas'
    },
    {
      icon: '💧',
      title: 'Business Water Services',
      description: 'Switch water suppliers since deregulation. Compare business water rates and reduce costs.',
      link: '/water-services',
      gradient: 'from-blue-400 to-cyan-500',
      keywords: 'business water suppliers, water deregulation'
    },
    {
      icon: '📱',
      title: 'Business Telecoms & Broadband',
      description: 'Compare business broadband deals, phone systems, and mobile packages for UK companies.',
      link: '/telecoms-services',
      gradient: 'from-purple-400 to-pink-500',
      keywords: 'business broadband, business phone systems'
    }
  ]

  const testimonials = [
    {
      quote: "Watt Switch helped us compare business energy prices and we saved 35% on our annual electricity bills. Switching suppliers was seamless!",
      author: "Sarah Johnson",
      company: "Tech Solutions Ltd, London",
      rating: 5,
      savings: "£12,000 per year saved"
    },
    {
      quote: "Best business energy comparison service in the UK. Our energy broker was professional and saved us thousands on gas and electricity.",
      author: "Michael Chen",
      company: "Restaurant Group UK, Manchester",
      rating: 5,
      savings: "£8,500 per year saved"
    },
    {
      quote: "We switched business gas and electricity through Watt Switch and saved over £50,000 this year. Highly recommend their energy switching service!",
      author: "Emma Williams",
      company: "Manufacturing Co., Birmingham",
      rating: 5,
      savings: "£50,000+ per year saved"
    }
  ]

  const industries = [
    { icon: <Building2 />, name: "Manufacturing", savings: "£25,000 avg savings" },
    { icon: <Briefcase />, name: "Offices", savings: "£8,000 avg savings" },
    { icon: <Building />, name: "Retail", savings: "£12,000 avg savings" },
    { icon: <Building2 />, name: "Hospitality", savings: "£15,000 avg savings" }
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Above the Fold SEO Content */}
      <section className="relative bg-gradient-to-br from-secondary-600 via-secondary-500 to-primary-500 text-white py-24 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-primary-300/20 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-grid-white/5"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles className="h-5 w-5 text-accent-yellow mr-2" />
                <span className="text-sm font-medium">Compare Business Energy • Save Money • Switch Today</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Compare Business Energy Prices &
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-green to-accent-yellow"> Save Up To 45% </span>
                on UK Electricity & Gas
              </h1>
              
              <h2 className="text-xl mb-8 text-blue-100">
                Trusted business energy comparison service. Compare electricity and gas prices from 30+ UK suppliers. 
                Switch business energy in 60 seconds. Join 900,000+ companies saving with Watt Switch.
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="https://app.watt.co.uk/company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white text-secondary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-400 hover:text-white transition-all transform hover:scale-105 shadow-xl flex items-center justify-center"
                  aria-label="Compare business energy prices and get instant quote"
                >
                  Compare Energy Prices Now
                  <Zap className="ml-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
                </a>
                <a 
                  href="tel:+441618338661" 
                  className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-secondary-600 transition-all flex items-center justify-center"
                  aria-label="Call Watt Switch energy experts on 0161 833 8661"
                >
                  <Phone className="mr-2 h-6 w-6 group-hover:animate-pulse" />
                  0161 833 8661
                </a>
              </div>
              
              {/* Animated Stats for Social Proof */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-4xl font-bold">{stats[currentStat].value}</div>
                    <div className="text-sm text-blue-100">{stats[currentStat].label}</div>
                  </div>
                  <div className="flex space-x-1">
                    {stats.map((_, index) => (
                      <div
                        key={index}
                        className={`h-2 transition-all duration-300 rounded-full ${
                          index === currentStat ? 'w-8 bg-white' : 'w-2 bg-white/30'
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-3xl blur-2xl"></div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals - Energy Suppliers */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="container">
          <div className="text-center mb-6">
            <p className="text-sm font-medium text-gray-600 uppercase tracking-wider">
              We Compare Business Energy Prices From Leading UK Suppliers
            </p>
          </div>
          <SupplierLogos />
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Business Energy Switching for Every Industry
            </h2>
            <p className="text-xl text-gray-600">
              We help UK businesses across all sectors reduce energy costs
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gradient-to-br hover:from-primary-50 hover:to-secondary-50 transition-all">
                <div className="text-primary-500 mb-3 flex justify-center">{industry.icon}</div>
                <h3 className="font-semibold mb-2">{industry.name}</h3>
                <p className="text-sm text-primary-600 font-medium">{industry.savings}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Why Compare Business Energy */}
      <section id="benefits" className="py-24 bg-gray-50 animate-on-scroll">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Why Compare Business Energy With <span className="text-secondary-500">Watt</span> <span className="text-primary-500">Switch</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              UK's trusted business energy comparison service helping companies switch suppliers and save thousands
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`group hover:scale-105 transition-all duration-300 ${
                  isVisible.benefits ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 h-full border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className={`${benefit.color} mb-4 relative z-10`} aria-hidden="true">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3 relative z-10">{benefit.title}</h3>
                  <p className="text-gray-600 relative z-10">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Business Energy Comparison Services */}
      <section id="services" className="py-24 bg-white animate-on-scroll">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Business Energy Comparison Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare business electricity and gas prices, switch suppliers, and save on all your utilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link 
                key={index} 
                to={service.link} 
                className={`group relative ${
                  isVisible.services ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                aria-label={`${service.title} - ${service.keywords}`}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 h-full transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="text-3xl" aria-hidden="true">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-secondary-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="inline-flex items-center text-primary-500 font-semibold group-hover:gap-2 transition-all">
                    Compare Prices <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How Business Energy Switching Works */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How to Switch Business Energy Suppliers</h2>
            <p className="text-xl text-gray-600">
              Switching business electricity and gas suppliers is simple with our comparison service
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500" aria-hidden="true"></div>
              
              {/* Timeline Items */}
              {[
                { 
                  title: 'Compare Business Energy Prices', 
                  desc: 'Tell us about your business energy needs. We\'ll compare electricity and gas prices from 30+ UK suppliers', 
                  icon: Phone 
                },
                { 
                  title: 'Review Energy Deals', 
                  desc: 'We analyse business electricity prices and gas tariffs to find the best deals for your company', 
                  icon: BarChart3 
                },
                { 
                  title: 'Choose Your Energy Supplier', 
                  desc: 'Select the best business energy deal. We\'ll explain contract terms with no hidden fees', 
                  icon: CheckCircle 
                },
                { 
                  title: 'We Switch Your Energy', 
                  desc: 'Sit back while we handle the business energy switching process from start to finish', 
                  icon: Clock 
                }
              ].map((step, index) => (
                <div key={index} className="relative flex items-center mb-12 last:mb-0">
                  <div className="absolute left-8 w-16 h-16 -translate-x-1/2 bg-white border-4 border-primary-500 rounded-full flex items-center justify-center shadow-lg z-10">
                    <step.icon className="h-6 w-6 text-primary-500" aria-hidden="true" />
                  </div>
                  <div className="ml-24 bg-white rounded-xl p-6 flex-1 hover:shadow-lg transition-all">
                    <h3 className="text-xl font-bold mb-2">Step {index + 1}: {step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TrustPilot Reviews Section */}
      <TrustPilot />

      {/* Customer Reviews - Social Proof */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Business Energy Switching Success Stories</h2>
            <p className="text-xl text-gray-600">
              See how UK businesses saved thousands by comparing energy prices with Watt Switch
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" aria-label="5 star rating" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div className="text-primary-600 font-bold mb-2">{testimonial.savings}</div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powering UK Business Energy Solutions</h2>
            <p className="text-xl text-gray-600">From renewable energy to smart meters, we've got you covered</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="/images/modern-office.jpg" 
                alt="Modern office with energy efficient lighting" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Office Energy Solutions</h3>
                  <p className="text-sm">Reduce office energy costs by up to 40%</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="/images/solar.jpg" 
                alt="Solar panels for business renewable energy" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Green Energy Options</h3>
                  <p className="text-sm">100% renewable business electricity</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img 
                src="/images/lightbulb.jpg" 
                alt="Energy saving LED lightbulb" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Smart Energy Management</h3>
                  <p className="text-sm">Monitor and optimize energy usage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Compare Business Energy Prices in the UK</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                <strong>Watt Switch</strong> is the UK's trusted business energy comparison service, helping companies 
                compare business electricity prices and switch gas suppliers since 2015. With access to 30+ energy 
                suppliers, we negotiate the best business energy deals for UK companies of all sizes.
              </p>
              <h3 className="text-2xl font-semibold mt-6 mb-4 text-gray-900">Why Compare Business Energy Prices?</h3>
              <p className="mb-4">
                Business electricity prices in the UK have increased by 26.9% in 2025. By comparing business energy 
                deals, companies can save an average of £3,500 per year. Our free energy comparison service makes 
                switching business electricity and gas suppliers simple and hassle-free.
              </p>
              <h3 className="text-2xl font-semibold mt-6 mb-4 text-gray-900">Business Energy Switching Made Simple</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Compare business electricity prices from British Gas, EDF, E.ON, and more</li>
                <li>Switch business gas suppliers with no interruption to supply</li>
                <li>Fixed-rate energy contracts to protect against price rises</li>
                <li>Green business energy options for sustainability goals</li>
                <li>Multi-site energy management for companies with multiple locations</li>
              </ul>
              <p className="mb-4">
                Whether you're looking to switch business electricity, compare commercial gas prices, or manage 
                multiple utility contracts, Watt Switch provides expert energy brokerage services tailored to your 
                business needs. Start comparing business energy today and join 900,000+ UK businesses saving with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Compare Business Energy Now */}
      <section className="py-24 bg-gradient-to-br from-secondary-600 via-secondary-500 to-primary-500 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        </div>
        
        <div className="container text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Compare Business Energy Prices?
          </h2>
          <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto">
            Join 900,000+ UK businesses already saving on electricity and gas. 
            Compare energy prices and switch suppliers in 60 seconds!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://app.watt.co.uk/company"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-secondary-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-primary-400 hover:text-white transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center"
              aria-label="Compare business energy prices and get free quote"
            >
              Compare Business Energy Now
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </a>
            <a 
              href="tel:+441618338661" 
              className="group bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-secondary-600 transition-all flex items-center justify-center"
              aria-label="Call our business energy experts"
            >
              <Phone className="mr-3 h-6 w-6 group-hover:animate-pulse" />
              Speak to Energy Expert
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage