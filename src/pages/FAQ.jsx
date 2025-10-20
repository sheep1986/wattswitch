import React, { useState } from 'react'
import { ChevronDown, Search } from 'lucide-react'

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [openItems, setOpenItems] = useState({})

  const faqCategories = [
    {
      category: "Business Energy Comparison",
      questions: [
        {
          q: "How much can I save by comparing business energy prices?",
          a: "UK businesses typically save between 20-45% on their energy bills when switching suppliers through Watt Switch. The average saving is £3,500 per year, though larger businesses often save significantly more. Your exact savings depend on your current rates, usage, and contract terms."
        },
        {
          q: "How do I compare business electricity prices?",
          a: "Simply provide your current energy usage details and business postcode. We'll instantly compare business electricity prices from 30+ UK suppliers and show you the best deals available. The whole process takes less than 60 seconds and is completely free."
        },
        {
          q: "Is there a fee for using Watt Switch's energy comparison service?",
          a: "No, our business energy comparison service is completely free. We're paid a commission by energy suppliers when you switch, but this doesn't affect the prices you pay. In fact, we often negotiate better rates than going direct to suppliers."
        },
        {
          q: "Can I switch business gas and electricity together?",
          a: "Yes, you can switch both business gas and electricity through our service. We offer dual fuel packages that often provide additional savings when you switch both utilities to the same supplier."
        }
      ]
    },
    {
      category: "Switching Process",
      questions: [
        {
          q: "How long does it take to switch business energy suppliers?",
          a: "The switching process typically takes 4-6 weeks from accepting a new contract to your supply going live. We handle all the paperwork and liaise with both your old and new suppliers, making it completely hassle-free for you."
        },
        {
          q: "Will my business energy supply be interrupted when switching?",
          a: "No, there's no interruption to your energy supply when switching. The switch happens seamlessly behind the scenes - you'll continue receiving energy through the same pipes and cables, just from a different supplier."
        },
        {
          q: "When should I start comparing business energy deals?",
          a: "The best time to compare is 3-6 months before your current contract ends. This gives you time to find the best deals and avoid expensive out-of-contract rates. We'll send you reminders so you never miss your renewal window."
        },
        {
          q: "Can I switch if I'm in a contract with my current supplier?",
          a: "You can secure a new deal to start when your current contract ends. If you want to leave early, check your contract for exit fees. Sometimes the savings from switching outweigh any penalties."
        }
      ]
    },
    {
      category: "Business Energy Contracts",
      questions: [
        {
          q: "What types of business energy contracts are available?",
          a: "We offer fixed-rate contracts (prices locked for 1-5 years), variable rate contracts (prices fluctuate with the market), and flexible purchasing contracts for larger businesses. We'll explain the pros and cons of each option."
        },
        {
          q: "What happens when my business energy contract ends?",
          a: "If you don't arrange a new contract, you'll be moved to 'out-of-contract' rates which can be 50-80% more expensive. That's why we contact customers 3-6 months before contract end to secure new deals."
        },
        {
          q: "Can I get green business energy?",
          a: "Yes, we offer 100% renewable electricity options from wind, solar, and hydro sources. Many suppliers now offer green energy at competitive rates, helping you meet sustainability goals without breaking the budget."
        },
        {
          q: "Do you handle multi-site energy contracts?",
          a: "Yes, we specialise in multi-site energy management. We can consolidate multiple meters into one contract, simplify billing, and leverage bulk buying power to secure better rates across all your locations."
        }
      ]
    },
    {
      category: "About Watt Switch",
      questions: [
        {
          q: "How many business energy suppliers do you work with?",
          a: "We work with over 30 UK business energy suppliers including British Gas, EDF, E.ON, Scottish Power, and many specialist business energy providers. This ensures we find the best deals for your specific needs."
        },
        {
          q: "How long has Watt Switch been operating?",
          a: "Watt Switch has been helping UK businesses save on energy costs since 2015. We've helped over 900,000 businesses switch suppliers and saved them a combined £150 million on energy bills."
        },
        {
          q: "Are you Ofgem registered?",
          a: "Yes, we operate under strict Ofgem guidelines and adhere to all industry regulations. We're also members of the Energy Brokers' Association and follow their code of practice."
        },
        {
          q: "Do you provide ongoing support after switching?",
          a: "Yes, every customer gets a dedicated account manager who provides ongoing support, monitors the market for better deals, and sends renewal reminders. We're here for the long term, not just the switch."
        }
      ]
    }
  ]

  const toggleItem = (category, index) => {
    const key = `${category}-${index}`
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const filteredFAQs = faqCategories.map(cat => ({
    ...cat,
    questions: cat.questions.filter(
      q => q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
           q.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.questions.length > 0)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-600 to-primary-500 text-white py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Business Energy Comparison FAQs
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Everything you need to know about comparing business energy prices and switching suppliers
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-white border-b">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search FAQs about business energy switching..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                aria-label="Search frequently asked questions"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">No FAQs found matching "{searchTerm}". Please try a different search term.</p>
              </div>
            ) : (
              filteredFAQs.map((category, catIndex) => (
                <div key={catIndex} className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">{category.category}</h2>
                  <div className="space-y-4">
                    {category.questions.map((item, index) => {
                      const isOpen = openItems[`${catIndex}-${index}`]
                      return (
                        <div 
                          key={index} 
                          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                          itemScope 
                          itemType="https://schema.org/Question"
                        >
                          <button
                            onClick={() => toggleItem(catIndex, index)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-lg"
                            aria-expanded={isOpen}
                            aria-controls={`faq-answer-${catIndex}-${index}`}
                          >
                            <h3 className="font-semibold text-gray-900 pr-4" itemProp="name">
                              {item.q}
                            </h3>
                            <ChevronDown 
                              className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          {isOpen && (
                            <div 
                              id={`faq-answer-${catIndex}-${index}`}
                              className="px-6 pb-4"
                              itemScope 
                              itemType="https://schema.org/Answer"
                            >
                              <p className="text-gray-600 leading-relaxed" itemProp="text">
                                {item.a}
                              </p>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Still Have Questions CTA */}
          <div className="mt-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-center text-white max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl mb-6 text-blue-100">
              Our energy experts are here to help you find the best business energy deals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+441618338661"
                className="bg-white text-secondary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Call 0161 833 8661
              </a>
              <a
                href="https://app.watt.co.uk/company"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-secondary-600 transition-colors inline-block"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ