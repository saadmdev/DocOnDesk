import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { doctors } from '../data/doctors'

export default function DoctorDetails(){
  const { id } = useParams()
  const navigate = useNavigate()
  const doc = doctors.find(d => d.id === id)
  if(!doc) return <div className="p-6">Doctor not found</div>

  // Use doctor's image from assets, fallback to placeholder if not available
  const img = doc.image || `https://i.pravatar.cc/300?img=${(parseInt(id, 10) * 11) % 70 + 1}`

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
      <button onClick={() => navigate(-1)} className="text-sm sm:text-base px-4 py-2 bg-hospital-cream hover:bg-hospital-gold text-hospital-blue font-bold rounded-lg mb-6 transition-all duration-200 transform hover:scale-105">← Back</button>
      <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-xl border-2 border-hospital-blue/20">
        <div className="md:flex md:items-center gap-6 lg:gap-8">
          <div className="relative mx-auto md:mx-0 w-fit">
            <img 
              src={img} 
              alt={`${doc.name} - ${doc.specialty}`} 
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-hospital-blue shadow-2xl transition-transform duration-300 hover:scale-105" 
              loading="eager"
            />
            {doc.online && (
              <div className="absolute bottom-2 right-2 w-6 h-6 sm:w-7 sm:h-7 bg-green-500 border-4 border-white rounded-full shadow-lg animate-pulse"></div>
            )}
          </div>
          <div className="flex-1 mt-4 md:mt-0">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-hospital-blue">{doc.name}</h2>
              <span className="bg-hospital-gold text-white text-xs sm:text-sm px-3 py-1.5 rounded-full font-bold shadow">PLATINUM DOCTOR</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="text-green-600 text-xs sm:text-sm font-bold flex items-center gap-1 bg-green-50 px-2 py-1 rounded">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#22c55e"/><path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                PMDC Verified
              </span>
              <span className="text-hospital-blue text-xs sm:text-sm font-semibold bg-hospital-cream px-2 py-1 rounded">{doc.specialty}</span>
            </div>
            <div className="text-sm text-gray-600 mt-2 font-medium">{doc.degrees?.join(', ')}</div>
            <div className="flex flex-wrap gap-4 mt-3">
              <span className="text-sm sm:text-base text-gray-700 font-semibold">{doc.experience} Experience</span>
              <span className="text-sm sm:text-base text-hospital-gold flex items-center gap-1 font-bold">
                ★ {doc.rating}
                <span className="text-gray-500">({doc.reviews})</span>
              </span>
            </div>
            <div className="mt-4 p-3 bg-hospital-cream/50 rounded-lg">
              <span className="font-bold text-gray-800 text-sm sm:text-base">Hospital/Clinic:</span> <span className="text-gray-700">{doc.hospital}</span>
            </div>
            <div className="mt-3 p-3 bg-hospital-blue/10 rounded-lg">
              <span className="font-bold text-gray-800 text-sm sm:text-base">Consultation Fee:</span> <span className="text-hospital-orange font-extrabold text-lg">Rs {doc.fee}</span>
            </div>
            <div className="mt-3">
              <span className="font-bold text-gray-800 text-sm sm:text-base">Timings:</span> <span className="text-gray-700">{doc.timings}</span>
            </div>
            <div className="mt-3">
              <span className="font-bold text-gray-800 text-sm sm:text-base">Languages:</span> <span className="text-gray-700">{doc.languages && doc.languages.join(', ')}</span>
            </div>
            <div className="mt-4 p-4 bg-white border-2 border-hospital-blue/20 rounded-lg">
              <span className="font-bold text-gray-800 text-sm sm:text-base">Skills & Expertise:</span>
              <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-1">
                {doc.skills && doc.skills.map((s, i) => <li key={i} className="text-sm sm:text-base">{s}</li>)}
              </ul>
            </div>
            <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">{doc.bio}</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-3 bg-hospital-orange hover:bg-[#B84200] text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">Book Appointment</button>
              <button className="px-6 py-3 border-2 border-hospital-blue text-hospital-blue rounded-lg font-bold hover:bg-hospital-cream transition-all duration-200">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
