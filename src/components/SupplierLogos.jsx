import React from 'react'

const SupplierLogos = () => {
  const suppliers = [
    { name: 'British Gas', image: '/supplier-logos/british-gas.png' },
    { name: 'EDF Energy', image: '/supplier-logos/edf.png' },
    { name: 'E.ON Next', image: '/supplier-logos/eon-next.png' },
    { name: 'Scottish Power', image: '/supplier-logos/scottish-power.png' },
    { name: 'Crown Gas & Power', image: '/supplier-logos/crown.png' },
    { name: 'Opus Energy', image: '/supplier-logos/opus.png' },
    { name: 'Total Energies', image: '/supplier-logos/total.png' },
    { name: 'Smartest Energy', image: '/supplier-logos/smartest.png' },
    { name: 'YÜ Energy', image: '/supplier-logos/yu.png' },
    { name: 'Pozitive Energy', image: '/supplier-logos/pozitive.png' },
    { name: 'SEFE Energy', image: '/supplier-logos/sefe.png' },
    { name: 'Drax', image: '/supplier-logos/drax.webp' },
    { name: 'Everflow', image: '/supplier-logos/everflow.webp' },
    { name: 'Utilita', image: '/supplier-logos/utilita.png' },
    { name: 'Valda Energy', image: '/supplier-logos/valda.png' },
    { name: 'Water Plus', image: '/supplier-logos/water-plus.png' }
  ]

  return (
    <div className="overflow-hidden py-4">
      <div className="supplier-logos-container">
        <div className="supplier-logos-scroll">
          {/* First set of logos */}
          {suppliers.map((supplier, index) => (
            <div
              key={index}
              className="supplier-logo-item"
            >
              <img 
                src={supplier.image} 
                alt={`${supplier.name} - Business Energy Supplier`}
                title={`Compare ${supplier.name} business energy prices`}
                className="h-12 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
          {/* Duplicate set for seamless scrolling */}
          {suppliers.map((supplier, index) => (
            <div
              key={`duplicate-${index}`}
              className="supplier-logo-item"
              aria-hidden="true"
            >
              <img 
                src={supplier.image} 
                alt={supplier.name}
                className="h-12 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SupplierLogos