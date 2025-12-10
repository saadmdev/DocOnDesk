import React, { useState } from 'react'
import { FaHospital, FaMapMarkerAlt, FaPhone, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa'
import { MdLocalHospital, MdMedicalServices, MdInventory } from 'react-icons/md'

// Sample equipment data
const equipmentData = [
  {
    id: '1',
    name: 'Ventilator',
    category: 'Life Support',
    description: 'Mechanical ventilator for respiratory support',
    hospitals: [
      { id: 'h1', name: 'City General Hospital', location: 'Islamabad', distance: '2.5 km', quantity: 5, available: 3, phone: '+92 300 1111111' },
      { id: 'h2', name: 'Medicare Hospital', location: 'Rawalpindi', distance: '5.8 km', quantity: 8, available: 2, phone: '+92 300 2222222' },
      { id: 'h3', name: 'Al-Shifa Hospital', location: 'Islamabad', distance: '7.2 km', quantity: 12, available: 4, phone: '+92 300 3333333' }
    ]
  },
  {
    id: '2',
    name: 'ICU Monitor',
    category: 'Monitoring',
    description: 'Patient monitoring system for ICU',
    hospitals: [
      { id: 'h1', name: 'City General Hospital', location: 'Islamabad', distance: '2.5 km', quantity: 15, available: 8, phone: '+92 300 1111111' },
      { id: 'h4', name: 'Shifa International', location: 'Islamabad', distance: '4.1 km', quantity: 20, available: 12, phone: '+92 300 4444444' }
    ]
  },
  {
    id: '3',
    name: 'Defibrillator',
    category: 'Emergency',
    description: 'Automated external defibrillator (AED)',
    hospitals: [
      { id: 'h2', name: 'Medicare Hospital', location: 'Rawalpindi', distance: '5.8 km', quantity: 10, available: 6, phone: '+92 300 2222222' },
      { id: 'h3', name: 'Al-Shifa Hospital', location: 'Islamabad', distance: '7.2 km', quantity: 8, available: 3, phone: '+92 300 3333333' },
      { id: 'h5', name: 'Pakistan Institute of Medical Sciences', location: 'Islamabad', distance: '8.5 km', quantity: 25, available: 15, phone: '+92 300 5555555' }
    ]
  },
  {
    id: '4',
    name: 'X-Ray Machine',
    category: 'Diagnostic',
    description: 'Digital X-ray imaging system',
    hospitals: [
      { id: 'h4', name: 'Shifa International', location: 'Islamabad', distance: '4.1 km', quantity: 3, available: 1, phone: '+92 300 4444444' },
      { id: 'h5', name: 'Pakistan Institute of Medical Sciences', location: 'Islamabad', distance: '8.5 km', quantity: 5, available: 2, phone: '+92 300 5555555' }
    ]
  },
  {
    id: '5',
    name: 'Ultrasound Machine',
    category: 'Diagnostic',
    description: 'Portable ultrasound scanner',
    hospitals: [
      { id: 'h1', name: 'City General Hospital', location: 'Islamabad', distance: '2.5 km', quantity: 6, available: 2, phone: '+92 300 1111111' },
      { id: 'h2', name: 'Medicare Hospital', location: 'Rawalpindi', distance: '5.8 km', quantity: 4, available: 1, phone: '+92 300 2222222' },
      { id: 'h4', name: 'Shifa International', location: 'Islamabad', distance: '4.1 km', quantity: 8, available: 3, phone: '+92 300 4444444' }
    ]
  },
  {
    id: '6',
    name: 'Oxygen Concentrator',
    category: 'Life Support',
    description: 'Medical oxygen concentrator',
    hospitals: [
      { id: 'h1', name: 'City General Hospital', location: 'Islamabad', distance: '2.5 km', quantity: 20, available: 10, phone: '+92 300 1111111' },
      { id: 'h3', name: 'Al-Shifa Hospital', location: 'Islamabad', distance: '7.2 km', quantity: 15, available: 8, phone: '+92 300 3333333' },
      { id: 'h5', name: 'Pakistan Institute of Medical Sciences', location: 'Islamabad', distance: '8.5 km', quantity: 30, available: 18, phone: '+92 300 5555555' }
    ]
  },
  {
    id: '7',
    name: 'ECG Machine',
    category: 'Diagnostic',
    description: 'Electrocardiogram machine',
    hospitals: [
      { id: 'h2', name: 'Medicare Hospital', location: 'Rawalpindi', distance: '5.8 km', quantity: 12, available: 7, phone: '+92 300 2222222' },
      { id: 'h4', name: 'Shifa International', location: 'Islamabad', distance: '4.1 km', quantity: 10, available: 5, phone: '+92 300 4444444' }
    ]
  },
  {
    id: '8',
    name: 'Infusion Pump',
    category: 'Treatment',
    description: 'IV infusion pump for medication delivery',
    hospitals: [
      { id: 'h1', name: 'City General Hospital', location: 'Islamabad', distance: '2.5 km', quantity: 25, available: 15, phone: '+92 300 1111111' },
      { id: 'h3', name: 'Al-Shifa Hospital', location: 'Islamabad', distance: '7.2 km', quantity: 18, available: 9, phone: '+92 300 3333333' },
      { id: 'h5', name: 'Pakistan Institute of Medical Sciences', location: 'Islamabad', distance: '8.5 km', quantity: 35, available: 20, phone: '+92 300 5555555' }
    ]
  }
]

export default function EquipmentSharing() {
  const [selectedEquipment, setSelectedEquipment] = useState(null)
  const [requestedItems, setRequestedItems] = useState({})
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(equipmentData.map(eq => eq.category))]

  const filteredEquipment = equipmentData.filter(eq => {
    const matchesSearch = eq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         eq.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || eq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  function handleRequest(hospitalId, equipmentId, hospitalName, equipmentName) {
    const key = `${equipmentId}-${hospitalId}`
    setRequestedItems(prev => ({
      ...prev,
      [key]: { hospitalName, equipmentName, timestamp: new Date().toLocaleString() }
    }))
    alert(`Request sent to ${hospitalName} for ${equipmentName}!\n\nThis is a demo. In production, this would notify the hospital.`)
  }

  function getAvailabilityColor(available, total) {
    const ratio = available / total
    if (ratio >= 0.5) return 'text-green-600'
    if (ratio >= 0.25) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 mb-6 border-2 border-hospital-blue/20">
        <div className="flex items-center gap-3 sm:gap-4 mb-6">
          <MdInventory className="text-4xl sm:text-5xl text-hospital-blue" />
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-hospital-blue">Hospital Equipment Sharing</h1>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">Request medical equipment from nearby hospitals</p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <input
            type="text"
            placeholder="Search equipment..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="flex-1 border-2 border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-hospital-cream focus:border-hospital-blue transition text-gray-800"
          />
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className="border-2 border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-hospital-cream focus:border-hospital-blue transition text-gray-800"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Equipment List */}
      <div className="space-y-6">
        {filteredEquipment.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <MdMedicalServices className="text-6xl text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No equipment found matching your search.</p>
          </div>
        ) : (
          filteredEquipment.map(equipment => (
            <div key={equipment.id} className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-hospital-blue/10 hover:border-hospital-orange transition-all duration-300">
              {/* Equipment Header */}
              <div className="bg-gradient-to-r from-hospital-blue to-[#7BB0C5] p-6 sm:p-8 text-white">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-2">{equipment.name}</h2>
                    <p className="text-white/90 mb-3 text-sm sm:text-base">{equipment.description}</p>
                    <span className="inline-block bg-white/20 px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold">
                      {equipment.category}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedEquipment(selectedEquipment === equipment.id ? null : equipment.id)}
                    className="bg-white/20 hover:bg-white/30 px-5 py-2.5 rounded-lg font-bold transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
                  >
                    {selectedEquipment === equipment.id ? 'Hide Details' : 'View Hospitals'}
                  </button>
                </div>
              </div>

              {/* Hospitals List */}
              {selectedEquipment === equipment.id && (
                <div className="p-6">
                  <div className="mb-6 flex items-center gap-2 text-hospital-blue bg-hospital-cream/50 px-4 py-2 rounded-lg">
                    <FaHospital className="text-xl" />
                    <span className="font-bold text-base sm:text-lg">{equipment.hospitals.length} Hospital(s) Available</span>
                  </div>
                  
                  <div className="grid gap-4 sm:gap-6">
                    {equipment.hospitals.map(hospital => {
                      const requestKey = `${equipment.id}-${hospital.id}`
                      const isRequested = requestedItems[requestKey]
                      const availabilityRatio = hospital.available / hospital.quantity
                      
                      return (
                        <div
                          key={hospital.id}
                          className="border-2 border-hospital-blue/20 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 bg-white"
                        >
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            {/* Hospital Info */}
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-3">
                                <MdLocalHospital className="text-2xl sm:text-3xl text-hospital-blue" />
                                <h3 className="text-lg sm:text-xl font-extrabold text-gray-800">{hospital.name}</h3>
                              </div>
                              
                              <div className="space-y-2 text-sm sm:text-base text-gray-700">
                                <div className="flex items-center gap-2">
                                  <FaMapMarkerAlt className="text-hospital-orange" />
                                  <span>{hospital.location} • {hospital.distance} away</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <FaPhone className="text-hospital-orange" />
                                  <span>{hospital.phone}</span>
                                </div>
                              </div>

                              {/* Availability */}
                              <div className="mt-4 flex flex-wrap items-center gap-3 sm:gap-4">
                                <div className="bg-hospital-cream/50 px-3 py-1.5 rounded-lg">
                                  <span className="text-xs sm:text-sm text-gray-600 font-medium">Total:</span>
                                  <span className="ml-2 font-bold text-gray-800">{hospital.quantity}</span>
                                </div>
                                <div className="bg-hospital-blue/10 px-3 py-1.5 rounded-lg">
                                  <span className="text-xs sm:text-sm text-gray-600 font-medium">Available:</span>
                                  <span className={`ml-2 font-extrabold ${getAvailabilityColor(hospital.available, hospital.quantity)}`}>
                                    {hospital.available}
                                  </span>
                                </div>
                                {availabilityRatio < 0.25 && (
                                  <div className="flex items-center gap-1 text-hospital-orange text-xs sm:text-sm font-bold bg-red-50 px-2 py-1 rounded">
                                    <FaExclamationTriangle />
                                    <span>Low Stock</span>
                                  </div>
                                )}
                                {availabilityRatio >= 0.5 && (
                                  <div className="flex items-center gap-1 text-green-600 text-xs sm:text-sm font-bold bg-green-50 px-2 py-1 rounded">
                                    <FaCheckCircle />
                                    <span>Good Stock</span>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Request Button */}
                            <div className="flex flex-col items-end gap-2">
                              {isRequested ? (
                                <div className="text-center">
                                  <div className="bg-green-100 text-green-700 px-4 py-2.5 rounded-lg font-bold mb-2 text-sm sm:text-base">
                                    <FaCheckCircle className="inline mr-2" />
                                    Request Sent
                                  </div>
                                  <p className="text-xs text-gray-500">Requested at {isRequested.timestamp}</p>
                                </div>
                              ) : (
                                <button
                                  onClick={() => handleRequest(hospital.id, equipment.id, hospital.name, equipment.name)}
                                  disabled={hospital.available === 0}
                                  className={`px-5 sm:px-6 py-3 rounded-lg font-bold text-white transition-all duration-200 ${
                                    hospital.available === 0
                                      ? 'bg-gray-400 cursor-not-allowed'
                                      : 'bg-hospital-orange hover:bg-[#B84200] shadow-lg hover:shadow-xl transform hover:scale-105'
                                  }`}
                                >
                                  Request Equipment
                                </button>
                              )}
                              {hospital.available === 0 && (
                                <p className="text-xs text-hospital-orange font-bold">Out of Stock</p>
                              )}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Info Box */}
      <div className="mt-8 bg-hospital-cream/50 border-l-4 border-hospital-orange p-5 sm:p-6 rounded-xl">
        <div className="flex items-start gap-3 sm:gap-4">
          <FaExclamationTriangle className="text-hospital-orange text-xl sm:text-2xl mt-1" />
          <div className="text-sm sm:text-base text-gray-800">
            <p className="font-bold mb-2 text-hospital-blue">How it works:</p>
            <ul className="list-disc ml-5 sm:ml-6 space-y-2">
              <li>Browse available medical equipment from nearby hospitals</li>
              <li>View quantity and availability status</li>
              <li>Click "Request Equipment" to send a request to the hospital</li>
              <li>The hospital will be notified and can approve or decline your request</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

