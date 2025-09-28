import React from 'react'
import { Link } from 'react-router-dom'
import QuoteRotator from '../components/QuoteRotator'
import { MdHealthAndSafety, MdPregnantWoman, MdLocalHospital, MdBloodtype, MdSick } from "react-icons/md";
import { FaUserMd, FaTooth, FaWeight, FaLungs, FaEye, FaBrain, FaChild } from "react-icons/fa";
import { GiHeartOrgan, GiStomach, GiBrokenBone } from "react-icons/gi";
import {
  FaLaptopMedical,
  FaHospital,
  FaFlask,
  FaSyringe,
  FaPills,
  FaSearch,
  FaCalendarCheck,
  FaComments
} from 'react-icons/fa'
import docksVideo from "../assets/docks.mp4";

const QUOTES = [
  'Because every second matters in an emergency.',
  'Your health, just a tap away.',
  'Connecting you to care when you need it most.',
  'Doctors near you, help around you.'
]

const SPECIALTIES = [
  { name: "Dermatologist", icon: <MdHealthAndSafety className="text-4xl text-blue-600" /> },
  { name: "Cardiologist", icon: <GiHeartOrgan className="text-4xl text-red-600" /> },
  { name: "Urologist", icon: <MdLocalHospital className="text-4xl text-cyan-600" /> },
  { name: "Gastroenterologist", icon: <GiStomach className="text-4xl text-green-600" /> },
  { name: "Dentist", icon: <FaTooth className="text-4xl text-indigo-500" /> },
  { name: "Obesity Specialist", icon: <FaWeight className="text-4xl text-emerald-600" /> },
  { name: "ENT Specialist", icon: <MdLocalHospital className="text-4xl text-sky-600" /> },
  { name: "Orthopedic Surgeon", icon: <GiBrokenBone className="text-4xl text-gray-600" /> },
  { name: "Nephrologist", icon: <MdBloodtype className="text-4xl text-purple-600" /> },
  { name: "Neurologist", icon: <FaBrain className="text-4xl text-indigo-600" /> },
  { name: "Child Specialist", icon: <FaChild className="text-4xl text-teal-500" /> },
  { name: "Pulmonologist", icon: <FaLungs className="text-4xl text-cyan-600" /> },
  { name: "Eye Specialist", icon: <FaEye className="text-4xl text-blue-500" /> },
  { name: "General Physician", icon: <FaUserMd className="text-4xl text-green-600" /> },
];

const CONDITIONS = [
  { name: "Fever", icon: <MdSick className="text-4xl text-amber-500" /> },
  { name: "Heart Attack", icon: <GiHeartOrgan className="text-4xl text-red-600" /> },
  { name: "Pregnancy", icon: <MdPregnantWoman className="text-4xl text-teal-500" /> },
  { name: "High Blood Pressure", icon: <MdBloodtype className="text-4xl text-purple-600" /> },
  { name: "Piles", icon: <MdLocalHospital className="text-4xl text-cyan-600" /> },
  { name: "Diarrhea", icon: <GiStomach className="text-4xl text-green-600" /> },
  { name: "Acne", icon: <MdHealthAndSafety className="text-4xl text-sky-500" /> }
];

const SERVICES = [
  {
    title: "Consult Online Now",
    desc: "Instantly connect with specialists through video call.",
    icon: <FaLaptopMedical className="text-5xl drop-shadow-md" />,
    color: "from-sky-400 via-sky-500 to-blue-600"
  },
  {
    title: "In-Clinic Appointments",
    desc: "Book an in-person visit to doctor's clinic.",
    icon: <FaHospital className="text-5xl drop-shadow-md" />,
    color: "from-teal-400 via-cyan-500 to-blue-500"
  },
  {
    title: "Laboratory Tests",
    desc: "Avail exclusive discounts on lab tests.",
    icon: <FaFlask className="text-5xl drop-shadow-md" />,
    color: "from-emerald-400 via-green-500 to-teal-600"
  },
  {
    title: "Procedures & Surgeries",
    desc: "Plan your surgeries at discounted rates.",
    icon: <FaSyringe className="text-5xl drop-shadow-md" />,
    color: "from-amber-400 via-yellow-500 to-orange-500"
  },
  {
    title: "Medicines",
    desc: "Know your medicines better.",
    icon: <FaPills className="text-5xl drop-shadow-md" />,
    color: "from-indigo-400 via-violet-500 to-purple-600"
  }
]

const TESTIMONIALS = [
  {
    name: 'Ayesha K.',
    text: 'DocOnDesk helped me find a pediatrician for my son in minutes. The video consultation was smooth and the doctor was very helpful!',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Ali R.',
    text: 'I used the emergency feature when my father had chest pain. We got immediate advice and were guided to the nearest hospital.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Sara M.',
    text: 'Booking lab tests and getting results online saved me so much time. Highly recommended!',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-cyan-100 to-violet-200">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-700 py-10 px-2 sm:px-4 md:px-0">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              Find and Book the <span className="text-teal-200">Best Doctors</span> near you
            </h1>
            <p className="text-base sm:text-lg text-blue-100 mb-6">
              25K+ doctors | 100+ specialties | 24/7 support
            </p>
            <div className="flex flex-col md:flex-row gap-3 mb-6">
              <input
                type="text"
                placeholder="City or Area"
                className="rounded-lg px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 w-full md:w-auto"
                style={{ minWidth: 0 }}
              />
              <input
                type="text"
                placeholder="Doctors, Hospital, Conditions"
                className="rounded-lg px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 flex-1 w-full md:w-auto"
              />
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-6 py-3 rounded-lg shadow transition w-full md:w-auto">
                Search
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/specialties" className="px-5 py-3 bg-white text-teal-700 rounded-lg font-semibold shadow hover:bg-teal-50 transition border border-teal-200 w-full sm:w-auto text-center">Browse Doctors</Link>
              <Link to="/emergency" className="px-5 py-3 bg-red-600 text-white rounded-lg font-semibold shadow hover:bg-red-700 transition w-full sm:w-auto text-center">Emergency Help</Link>
            </div>
            <div className="mt-8 text-center">
              <QuoteRotator
                quotes={QUOTES}
                interval={4000}
                className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-900 via-cyan-900 to-teal-900 bg-clip-text text-transparent drop-shadow-md"
              />
            </div>  
          </div>
          <div className="flex-1 flex justify-center mt-8 md:mt-0 w-full">
            <img
              src="https://www.shutterstock.com/image-vector/male-doctor-smiling-happy-face-600nw-2481032615.jpg"
              alt="Doctor"
              className="rounded-2xl shadow-2xl w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="max-w-6xl mx-auto mt-12 z-10 relative px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {SERVICES.map((s, idx) => (
            <div
              key={idx}
              className={`rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center text-center 
              bg-gradient-to-br ${s.color} text-white transform transition duration-300 hover:scale-105`}
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{s.icon}</div>
              {/* Title */}
              <div className="font-bold text-lg sm:text-xl mb-2">{s.title}</div>
              {/* Description */}
              <div className="text-sm text-blue-50 leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Specialties */}
      <section className="max-w-6xl mx-auto mt-16 px-2 sm:px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-2">
          <h2 className="text-xl sm:text-2xl font-bold text-teal-700">Consult best doctors online</h2>
          <Link to="/specialties" className="text-teal-600 font-semibold hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 sm:gap-6">
          {SPECIALTIES.map((s, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white rounded-xl shadow p-3 sm:p-4 hover:shadow-xl transition">
              <div className="text-3xl sm:text-4xl mb-2">{s.icon}</div>
              <div className="font-medium text-gray-700 text-center text-xs sm:text-base">{s.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Search by Condition */}
      <section className="max-w-6xl mx-auto mt-12 px-2 sm:px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-2">
          <h2 className="text-xl sm:text-2xl font-bold text-teal-700">Search doctor by condition</h2>
          <Link to="/conditions" className="text-teal-600 font-semibold hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 sm:gap-6">
          {CONDITIONS.map((c, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white rounded-xl shadow p-3 sm:p-4 hover:shadow-xl transition">
              <div className="text-3xl sm:text-4xl mb-2">{c.icon}</div>
              <div className="font-medium text-gray-700 text-center text-xs sm:text-base">{c.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto mt-16 px-2 sm:px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-teal-700 mb-6">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="flex-1 flex flex-col items-center text-center mb-8 md:mb-0">
            <div className="text-4xl sm:text-5xl mb-4 text-teal-600"><FaSearch /></div>
            <h4 className="font-semibold">Search & Select</h4>
            <p className="text-gray-600 text-sm sm:text-base">Find the right doctor or specialist based on your needs.</p>
          </div>
          <div className="flex-1 flex flex-col items-center text-center mb-8 md:mb-0">
            <div className="text-4xl sm:text-5xl mb-4 text-teal-600"><FaCalendarCheck /></div>
            <h4 className="font-semibold">Book Appointment</h4>
            <p className="text-gray-600 text-sm sm:text-base">Choose a convenient time for a video or in-person consultation.</p>
          </div>
          <div className="flex-1 flex flex-col items-center text-center">
            <div className="text-4xl sm:text-5xl mb-4 text-teal-600"><FaComments /></div>
            <h4 className="font-semibold">Consult & Receive Care</h4>
            <p className="text-gray-600 text-sm sm:text-base">Connect with your doctor, discuss your symptoms, and get a digital prescription.</p>
          </div>
        </div>
      </section>

      {/* Demo Video */}
      <section className="max-w-3xl mx-auto mt-16 text-center px-2 sm:px-4">
        <h3 className="font-semibold mb-2 text-base sm:text-lg text-teal-700">Watch Our Demo</h3>
        <video
          controls
          className="mx-auto rounded shadow-lg border-4 border-teal-100 w-full max-w-2xl"
        >
          <source src={docksVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto mt-16 mb-12 px-2 sm:px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-teal-700 mb-6">What Our Users Say</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center max-w-xs mx-auto border-t-4 border-teal-400 w-full">
              <img src={t.avatar} alt={t.name} className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mb-3 border-2 border-teal-200" />
              <p className="text-gray-700 italic text-center text-sm sm:text-base">"{t.text}"</p>
              <div className="mt-2 font-semibold text-teal-800">{t.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
