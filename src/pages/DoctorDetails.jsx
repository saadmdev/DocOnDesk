import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { doctors } from '../data/doctors'

export default function DoctorDetails(){
  const { id } = useParams()
  const navigate = useNavigate()
  const doc = doctors.find(d => d.id === id)
  if(!doc) return <div className="p-6">Doctor not found</div>

  const avatarId = (parseInt(id, 10) * 11) % 70 + 1
  const img = `https://i.pravatar.cc/300?img=${avatarId}`

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button onClick={() => navigate(-1)} className="text-sm text-indigo-600 mb-4">← Back</button>
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <div className="md:flex md:items-center gap-8">
          <img src={img} alt={doc.name} className="w-44 h-44 rounded-full object-cover border-4 border-indigo-100" />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h2 className="text-3xl font-bold text-indigo-800">{doc.name}</h2>
              <span className="bg-yellow-400 text-white text-xs px-2 py-1 rounded-full font-semibold">PLATINUM DOCTOR</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-green-600 text-xs font-semibold flex items-center gap-1">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#22c55e"/><path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                PMDC Verified
              </span>
              <span className="text-gray-500 text-xs ml-2">{doc.specialty}</span>
            </div>
            <div className="text-xs text-gray-500 mt-1">{doc.degrees?.join(', ')}</div>
            <div className="flex gap-4 mt-2">
              <span className="text-sm text-gray-700">{doc.experience} Experience</span>
              <span className="text-sm text-yellow-500 flex items-center gap-1">
                ★ {doc.rating}
                <span className="text-gray-400">({doc.reviews})</span>
              </span>
            </div>
            <div className="mt-3">
              <span className="font-semibold text-gray-700">Hospital/Clinic:</span> {doc.hospital}
            </div>
            <div className="mt-3">
              <span className="font-semibold text-gray-700">Consultation Fee:</span> <span className="text-green-700 font-bold">Rs {doc.fee}</span>
            </div>
            <div className="mt-3">
              <span className="font-semibold text-gray-700">Timings:</span> {doc.timings}
            </div>
            <div className="mt-3">
              <span className="font-semibold text-gray-700">Languages:</span> {doc.languages && doc.languages.join(', ')}
            </div>
            <div className="mt-3">
              <span className="font-semibold text-gray-700">Skills & Expertise:</span>
              <ul className="list-disc ml-6 text-gray-700">
                {doc.skills && doc.skills.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
            <p className="mt-4 text-gray-700">{doc.bio}</p>
            <div className="mt-6 flex gap-3">
              <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg font-semibold shadow hover:bg-indigo-700 transition">Book Appointment</button>
              <button className="px-5 py-2 border rounded-lg font-semibold">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
