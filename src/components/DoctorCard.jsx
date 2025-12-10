import React from 'react'
import { Link } from 'react-router-dom'

export default function DoctorCard({ doctor }) {
  // Use doctor's image from assets, fallback to placeholder if not available
  const img = doctor.image || `https://i.pravatar.cc/150?img=${(parseInt(doctor.id, 10) * 7) % 70 + 1}`

  // Demo: Platinum badge for first 2 doctors
  const isPlatinum = ['1', '2', '3'].includes(doctor.id)

  return (
    <div className="bg-white rounded-3xl shadow-xl p-5 sm:p-6 lg:p-8 flex flex-col md:flex-row items-center gap-5 sm:gap-6 lg:gap-8 border-2 border-hospital-blue/20 hover:border-hospital-orange mb-6 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
      {/* Doctor Image */}
      <div className="relative">
        <img 
          src={img} 
          alt={`${doctor.name} - ${doctor.specialty}`} 
          className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full border-4 border-hospital-blue object-cover shadow-xl transition-transform duration-300 hover:scale-105" 
          loading="lazy"
        />
        {doctor.online && (
          <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-7 sm:h-7 bg-green-500 border-4 border-white rounded-full shadow-lg animate-pulse"></div>
        )}
      </div>

      <div className="flex-1 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-4">
          {/* Doctor Info */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <h3 className="font-extrabold text-lg sm:text-xl lg:text-2xl text-hospital-blue">{doctor.name}</h3>
              {isPlatinum && (
                <span className="bg-gradient-to-r from-hospital-gold to-[#C9A85F] text-white text-xs sm:text-sm px-3 py-1.5 rounded-full font-bold shadow-lg">
                  PLATINUM DOCTOR
                </span>
              )}
            </div>
            
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-green-600 text-xs sm:text-sm font-bold flex items-center gap-1.5 bg-green-50 px-3 py-1.5 rounded-lg border border-green-200">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#22c55e"/><path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                PMDC Verified
              </span>
              <span className="text-hospital-blue text-xs sm:text-sm font-bold bg-hospital-cream px-3 py-1.5 rounded-lg border border-hospital-blue/20">
                {doctor.specialty}
              </span>
            </div>
            
            <div className="text-xs sm:text-sm text-gray-600 mt-2 mb-3 font-semibold">{doctor.degrees?.join(', ')}</div>
            
            <div className="flex flex-wrap gap-4 sm:gap-6 mt-3">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-hospital-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm sm:text-base text-gray-700 font-bold">{doctor.experience} Experience</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl text-hospital-gold font-extrabold">
                  ★ {doctor.rating || (4.5 + (parseInt(doctor.id) % 2) * 0.4).toFixed(1)}
                </span>
                <span className="text-gray-500 text-xs sm:text-sm font-medium">
                  ({doctor.reviews || 50 + parseInt(doctor.id) * 10} reviews)
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full sm:w-auto md:w-auto">
            <button className="border-2 border-hospital-blue text-hospital-blue px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-bold hover:bg-hospital-cream transition-all duration-200 text-sm sm:text-base transform hover:scale-105 shadow-md hover:shadow-lg">
              <span role="img" aria-label="video" className="mr-2">💻</span> Video Consultation
            </button>
            <Link to={`/doctor/${doctor.id}`} className="w-full sm:w-auto md:w-full">
              <button className="w-full bg-hospital-orange hover:bg-[#B84200] text-white font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-sm sm:text-base transform hover:scale-105">
                Book Appointment
              </button>
            </Link>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 sm:gap-4 mt-5 sm:mt-6">
          <div className="border-2 border-hospital-blue/30 rounded-xl px-4 sm:px-5 py-3 flex-1 flex items-center justify-between bg-gradient-to-r from-hospital-cream/50 to-hospital-cream/30 shadow-md">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${doctor.online ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
              <span className="text-green-600 text-xs sm:text-sm font-bold">
                {doctor.online ? 'Online Now' : 'Available tomorrow'}
              </span>
            </div>
            <span className="text-hospital-orange text-base sm:text-lg font-extrabold">Rs. {doctor.fee}</span>
          </div>
          <div className="border-2 border-hospital-blue/20 rounded-xl px-4 sm:px-5 py-3 flex-1 flex items-center justify-between bg-white shadow-md">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-hospital-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-gray-600 text-xs sm:text-sm font-semibold">{doctor.hospital}</span>
            </div>
            <span className="text-gray-700 text-xs sm:text-sm font-bold">{doctor.timings}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
