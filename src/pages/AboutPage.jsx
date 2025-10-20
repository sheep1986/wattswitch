import React from 'react'
import { Users, Award, Target, Heart, ArrowRight, CheckCircle, Building, PoundSterling } from 'lucide-react'
import TrustPilot from '../components/TrustPilot'

const AboutPage = () => {
  const values = [
    {
      icon: <Users className="h-8 w-8 text-primary-500" />,
      title: 'Customer First',
      description: 'We put our clients at the heart of everything we do, ensuring personalized service and support.'
    },
    {
      icon: <Award className="h-8 w-8 text-primary-500" />,
      title: 'Excellence',
      description: 'We strive for excellence in every interaction, delivering outstanding results consistently.'
    },
    {
      icon: <Target className="h-8 w-8 text-primary-500" />,
      title: 'Transparency',
      description: 'Complete transparency in pricing, processes, and partnerships with no hidden fees.'
    },
    {
      icon: <Heart className="h-8 w-8 text-primary-500" />,
      title: 'Integrity',
      description: 'We conduct business with integrity, building trust through honest relationships.'
    }
  ]

  return (
    <div>
      {/* Hero Section - Consistent with other pages */}
      <section className="hero-gradient text-white py-24">
        <div className="container">
          <h1 className="hero-title">About Watt Switch</h1>
          <p className="hero-subtitle max-w-3xl">
            UK's trusted business energy comparison service helping companies save millions since 2015
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a 
              href="https://app.watt.co.uk/company"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="tel:+441618338661"
              className="btn-outline"
            >
              Call 0161 833 8661
            </a>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded over two decades ago, Watt Switch has grown to become one of the UK's leading 
                business energy consultancies. We started with a simple mission: to help businesses 
                navigate the complex energy market and secure the best possible deals.
              </p>
              <p className="text-gray-600 mb-4">
                Today, we manage utilities for over 900,000 businesses across the UK, saving them 
                a combined £150 million on their energy bills. Our success is built on deep market 
                knowledge, strong supplier relationships, and an unwavering commitment to our clients.
              </p>
              <p className="text-gray-600">
                As the energy market evolves, we continue to innovate and adapt, ensuring our clients 
                always have access to the best rates and most suitable energy solutions for their needs.
              </p>
            </div>
            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">By the Numbers</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Years of Experience</span>
                  <span className="text-3xl font-bold text-primary-500">23+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Businesses Served</span>
                  <span className="text-3xl font-bold text-primary-500">900K+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Savings</span>
                  <span className="text-3xl font-bold text-primary-500">£150M+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Partner Suppliers</span>
                  <span className="text-3xl font-bold text-primary-500">30+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Watt Switch?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Market Expertise</h3>
              <p className="text-gray-600">
                Our team has deep knowledge of the UK energy market, ensuring you get the best 
                deals available from our network of 30+ trusted suppliers.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">No Hidden Fees</h3>
              <p className="text-gray-600">
                Complete transparency in our pricing. We're paid by suppliers, not you, so our 
                service is completely free with no hidden charges.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Dedicated Support</h3>
              <p className="text-gray-600">
                Every client gets a dedicated account manager who provides ongoing support, 
                market updates, and renewal reminders.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Simple Process</h3>
              <p className="text-gray-600">
                We handle everything from initial quote to final switch, making the process 
                completely hassle-free for your business.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Ongoing Management</h3>
              <p className="text-gray-600">
                We don't just switch and forget. We continuously monitor the market to ensure 
                you're always on the best rates.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Industry Recognition</h3>
              <p className="text-gray-600">
                Award-winning service recognized by industry bodies and thousands of satisfied 
                customers across the UK.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default AboutPage