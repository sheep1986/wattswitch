import React from 'react'

const PageTemplate = ({ title, subtitle }) => {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-primary-100 max-w-3xl">{subtitle}</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-600">Content coming soon...</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PageTemplate