import React from 'react'
import { Link } from 'react-router-dom'

export default function DoctorCard({ doctor }) {
  const avatarId = (parseInt(doctor.id, 10) * 7) % 70 + 1
  const img = `https://i.pravatar.cc/150?img=${avatarId}`

  // Demo: Platinum badge for first 2 doctors
  const isPlatinum = ['1', '2', '3'].includes(doctor.id)

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6 border mb-6">
      <img src={img} alt={doctor.name} className="w-20 h-20 rounded-full border-2 border-indigo-200 object-cover" />
      <div className="flex-1 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-gray-800">{doctor.name}</span>
              {isPlatinum && (
                <span className="bg-yellow-400 text-white text-xs px-2 py-1 rounded-full font-semibold ml-2">PLATINUM DOCTOR</span>
              )}
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-green-600 text-xs font-semibold flex items-center gap-1">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#22c55e"/><path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                PMDC Verified
              </span>
              <span className="text-gray-500 text-xs ml-2">{doctor.specialty}</span>
            </div>
            <div className="text-xs text-gray-500 mt-1">{doctor.degrees?.join(', ')}</div>
            <div className="flex gap-4 mt-2">
              <span className="text-sm text-gray-700">{doctor.experience} Experience</span>
              <span className="text-sm text-yellow-500 flex items-center gap-1">
                ★ {doctor.rating || (4.5 + (parseInt(doctor.id) % 2) * 0.4).toFixed(1)}
                <span className="text-gray-400">({doctor.reviews || 50 + parseInt(doctor.id) * 10})</span>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4 md:mt-0 md:items-end">
            <button className="border border-indigo-700 text-indigo-700 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition text-sm mb-1">
              <span role="img" aria-label="video">💻</span> Video Consultation
            </button>
            <Link to={`/doctor/${doctor.id}`}>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-5 py-2 rounded-lg shadow transition text-sm">
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4">
          <div className="border rounded-lg px-4 py-2 flex-1 flex items-center justify-between">
            <span className="text-green-600 text-xs flex items-center gap-1">
              ● {doctor.online ? 'Online' : 'Available tomorrow'}
            </span>
            <span className="text-gray-700 text-sm font-semibold">Rs. {doctor.fee}</span>
          </div>
          <div className="border rounded-lg px-4 py-2 flex-1 flex items-center justify-between">
            <span className="text-gray-500 text-xs">{doctor.hospital}</span>
            <span className="text-gray-700 text-xs">{doctor.timings}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
