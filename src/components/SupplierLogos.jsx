import React from 'react'

const SupplierLogos = () => {
  const suppliers = [
    { name: 'British Gas', color: 'from-blue-400 to-blue-600' },
    { name: 'EDF Energy', color: 'from-orange-400 to-orange-600' },
    { name: 'E.ON', color: 'from-red-400 to-red-600' },
    { name: 'Scottish Power', color: 'from-green-400 to-green-600' },
    { name: 'SSE', color: 'from-purple-400 to-purple-600' },
    { name: 'Octopus Energy', color: 'from-pink-400 to-pink-600' }
  ]

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {suppliers.map((supplier, index) => (
        <div
          key={index}
          className="group relative"
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${supplier.color} rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity`}></div>
          <div className="relative bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl border border-gray-200 hover:border-gray-300 transition-all hover:scale-105 cursor-pointer">
            <span className="font-semibold text-gray-700">{supplier.name}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SupplierLogos