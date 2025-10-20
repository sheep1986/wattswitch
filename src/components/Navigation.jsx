import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown, Zap } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    { name: 'Business Electricity', path: '/business-electricity', icon: '⚡' },
    { name: 'Business Gas', path: '/business-gas', icon: '🔥' },
    { name: 'Water Services', path: '/water-services', icon: '💧' },
    { name: 'Telecoms & Broadband', path: '/telecoms-services', icon: '📱' },
    { name: 'Renewable Energy', path: '/renewable-energy', icon: '☀️' },
    { name: 'Multi-Site Energy', path: '/multi-site-energy', icon: '🏢' },
  ]

  return (
    <nav className={`bg-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-xl' : 'shadow-md'}`}>
      <div className="container">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group" aria-label="Watt Switch - Business Energy Comparison UK">
            <img 
              src="/watt-switch-logo.png" 
              alt="Watt Switch - Compare Business Energy Prices UK" 
              title="Watt Switch - Business Energy Comparison Service"
              className="h-12 w-auto transition-transform group-hover:scale-105"
              width="200"
              height="48"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-secondary-500 font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-secondary-500 font-medium transition-colors">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="flex items-center text-gray-700 hover:text-secondary-500 font-medium transition-colors"
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl py-2 border border-gray-100 animate-fade-in"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-secondary-50 hover:text-secondary-600 transition-all group"
                      onClick={() => setServicesOpen(false)}
                    >
                      <span className="text-2xl mr-3">{service.icon}</span>
                      <span className="font-medium group-hover:translate-x-1 transition-transform">{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/faq" className="text-gray-700 hover:text-secondary-500 font-medium transition-colors">
              FAQ
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-secondary-500 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+441618338661"
              className="flex items-center text-secondary-500 hover:text-secondary-600 transition-colors group"
            >
              <Phone className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              <span className="font-semibold">0161 833 8661</span>
            </a>
            <a 
              href="https://app.wattswitch.co.uk/quote" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:from-primary-600 hover:to-primary-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
            >
              <Zap className="h-5 w-5 mr-2" />
              Get Free Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-secondary-500 transition-colors p-2"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 animate-slide-down">
            <Link
              to="/"
              className="block py-3 px-4 text-gray-700 hover:text-secondary-500 hover:bg-gray-50 transition-all font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-3 px-4 text-gray-700 hover:text-secondary-500 hover:bg-gray-50 transition-all font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <div className="py-2">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-secondary-500 hover:bg-gray-50 transition-all font-medium"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="bg-gray-50 py-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="flex items-center px-8 py-2 text-gray-600 hover:text-secondary-500 transition-colors"
                      onClick={() => {
                        setIsOpen(false)
                        setServicesOpen(false)
                      }}
                    >
                      <span className="mr-2">{service.icon}</span>
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/faq"
              className="block py-3 px-4 text-gray-700 hover:text-secondary-500 hover:bg-gray-50 transition-all font-medium"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="block py-3 px-4 text-gray-700 hover:text-secondary-500 hover:bg-gray-50 transition-all font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="mt-4 px-4 space-y-3">
              <a
                href="tel:+441618338661"
                className="flex items-center justify-center text-secondary-500 hover:text-secondary-600 transition-colors py-2"
              >
                <Phone className="h-5 w-5 mr-2" />
                <span className="font-semibold">0161 833 8661</span>
              </a>
              <a
                href="https://app.wattswitch.co.uk/quote"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:from-primary-600 hover:to-primary-700 transition-all"
                onClick={() => setIsOpen(false)}
              >
                <Zap className="inline-block h-5 w-5 mr-2" />
                Get Free Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation