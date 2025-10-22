import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Zap, ArrowRight } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-96 h-96 bg-primary-500 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-secondary-500 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>
      
      <div className="container py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/watt-switch-logo.png" 
              alt="Watt Switch - Business Energy Comparison UK" 
              title="Watt Switch Footer Logo"
              className="h-14 w-auto mb-4 brightness-0 invert"
              width="233"
              height="56"
              loading="lazy"
            />
            <p className="text-gray-300 mb-4">
              <strong>Compare. Save. Power Up.</strong> Expert business energy comparison service helping UK companies save up to 45% on electricity and gas bills.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500 transition-all group">
                <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://twitter.com" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500 transition-all group">
                <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://linkedin.com" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500 transition-all group">
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <a href="https://app.watt.co.uk/company" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Get a Quote
                </a>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-primary-500 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/business-electricity" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Business Electricity
                </Link>
              </li>
              <li>
                <Link to="/business-gas" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Business Gas
                </Link>
              </li>
              <li>
                <Link to="/water-services" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Water Services
                </Link>
              </li>
              <li>
                <Link to="/telecoms-services" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Telecoms & Broadband
                </Link>
              </li>
              <li>
                <Link to="/renewable-energy" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Renewable Energy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Started</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-primary-500 flex-shrink-0 mt-1" />
                <div>
                  <a href="tel:+441618338661" className="text-gray-400 hover:text-primary-500 transition-colors">
                    0161 833 8661
                  </a>
                  <p className="text-sm text-gray-500">Mon-Fri: 9:00 AM - 5:30 PM</p>
                </div>
              </div>
              <a 
                href="https://app.watt.co.uk/company"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:from-primary-600 hover:to-primary-700 transition-all shadow-md"
              >
                <Zap className="mr-2 h-5 w-5" />
                Get Free Quote
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Watt Utilities UK Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="text-gray-400 hover:text-primary-500 text-sm transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-primary-500 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/complaints" className="text-gray-400 hover:text-primary-500 text-sm transition-colors">
                Complaints
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer