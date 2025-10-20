import React from 'react'
import QuoteForm from '../components/QuoteForm'

const GetQuote = () => {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Your Free Quote</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            See how much you could save on your business energy bills in just 5 minutes
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Fill in Your Details</h3>
              <p className="text-gray-600">Quick form with your business information</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">We Compare Suppliers</h3>
              <p className="text-gray-600">Access rates from 30+ trusted suppliers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Receive Your Quote</h3>
              <p className="text-gray-600">Get competitive quotes within 24 hours</p>
            </div>
          </div>
          
          <QuoteForm />
        </div>
      </section>
    </div>
  )
}

export default GetQuote