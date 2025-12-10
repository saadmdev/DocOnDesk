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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-hospital-blue via-[#8BB8CE] to-hospital-blue py-12 sm:py-16 px-2 sm:px-4 md:px-0 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
              Find and Book the <span className="text-hospital-cream">Best Doctors</span> near you
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 font-medium">
              25K+ doctors | 100+ specialties | 24/7 support
            </p>
            <div className="flex flex-col md:flex-row gap-3 mb-6">
              <input
                type="text"
                placeholder="City or Area"
                className="rounded-lg px-4 py-3 border-2 border-white/30 bg-white/90 focus:outline-none focus:ring-2 focus:ring-hospital-cream focus:border-hospital-cream w-full md:w-auto text-gray-800 placeholder-gray-500"
                style={{ minWidth: 0 }}
              />
              <input
                type="text"
                placeholder="Doctors, Hospital, Conditions"
                className="rounded-lg px-4 py-3 border-2 border-white/30 bg-white/90 focus:outline-none focus:ring-2 focus:ring-hospital-cream focus:border-hospital-cream flex-1 w-full md:w-auto text-gray-800 placeholder-gray-500"
              />
              <button className="bg-hospital-orange hover:bg-[#B84200] text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 w-full md:w-auto">
                Search
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/specialties" className="px-6 py-3 bg-white text-hospital-blue rounded-lg font-bold shadow-lg hover:bg-hospital-cream transition-all duration-200 border-2 border-white/50 w-full sm:w-auto text-center transform hover:scale-105">Browse Doctors</Link>
              <Link to="/emergency" className="px-6 py-3 bg-hospital-orange text-white rounded-lg font-bold shadow-lg hover:bg-[#B84200] transition-all duration-200 w-full sm:w-auto text-center transform hover:scale-105 animate-pulse">Emergency Help</Link>
            </div>
            <div className="mt-8 text-center">
              <QuoteRotator
                quotes={QUOTES}
                interval={4000}
                className="text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-lg"
              />
            </div>  
          </div>
          <div className="flex-1 flex justify-center items-center mt-8 md:mt-0 w-full">
            <img
              src="https://cdn.prod.website-files.com/66bd394eedeb9d6ee29898c6/682f5450a046c241920c1e6f_Three%20doctors%20standing%20side%20by%20side%2C%20crossing%20their%20arms.jpg"
              alt="Doctor"
              className="rounded-2xl shadow-2xl w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-cover border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="max-w-7xl mx-auto mt-12 sm:mt-16 z-10 relative px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {SERVICES.map((s, idx) => (
            <div
              key={idx}
              className="rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center text-center 
              bg-white border-2 border-hospital-blue/20 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-hospital-orange"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 text-hospital-blue">{s.icon}</div>
              {/* Title */}
              <div className="font-bold text-base sm:text-lg mb-2 text-gray-800">{s.title}</div>
              {/* Description */}
              <div className="text-sm text-gray-600 leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Specialties */}
      <section className="max-w-7xl mx-auto mt-16 sm:mt-20 px-2 sm:px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-hospital-blue">Consult Best Doctors Online</h2>
          <Link to="/specialties" className="text-hospital-orange font-bold hover:text-[#B84200] transition-colors text-sm sm:text-base">View All →</Link>
        </div>
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 sm:gap-6">
          {SPECIALTIES.map((s, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white rounded-xl shadow-lg border-2 border-hospital-blue/10 p-4 sm:p-5 hover:shadow-2xl hover:border-hospital-orange transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl sm:text-4xl mb-3">{s.icon}</div>
              <div className="font-semibold text-gray-800 text-center text-xs sm:text-sm">{s.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Search by Condition */}
      <section className="max-w-7xl mx-auto mt-12 sm:mt-16 px-2 sm:px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-hospital-blue">Search Doctor by Condition</h2>
          <Link to="/conditions" className="text-hospital-orange font-bold hover:text-[#B84200] transition-colors text-sm sm:text-base">View All →</Link>
        </div>
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 sm:gap-6">
          {CONDITIONS.map((c, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white rounded-xl shadow-lg border-2 border-hospital-blue/10 p-4 sm:p-5 hover:shadow-2xl hover:border-hospital-gold transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl sm:text-4xl mb-3">{c.icon}</div>
              <div className="font-semibold text-gray-800 text-center text-xs sm:text-sm">{c.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto mt-16 sm:mt-20 px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-hospital-blue mb-8 sm:mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 justify-center">
          <div className="flex-1 flex flex-col items-center text-center mb-8 md:mb-0 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-hospital-blue/10 hover:border-hospital-orange transition-all duration-300">
            <div className="text-5xl sm:text-6xl mb-4 text-hospital-blue bg-hospital-cream rounded-full p-4"><FaSearch /></div>
            <h4 className="font-bold text-lg sm:text-xl mb-2 text-gray-800">Search & Select</h4>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Find the right doctor or specialist based on your needs.</p>
          </div>
          <div className="flex-1 flex flex-col items-center text-center mb-8 md:mb-0 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-hospital-blue/10 hover:border-hospital-orange transition-all duration-300">
            <div className="text-5xl sm:text-6xl mb-4 text-hospital-blue bg-hospital-cream rounded-full p-4"><FaCalendarCheck /></div>
            <h4 className="font-bold text-lg sm:text-xl mb-2 text-gray-800">Book Appointment</h4>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Choose a convenient time for a video or in-person consultation.</p>
          </div>
          <div className="flex-1 flex flex-col items-center text-center bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-hospital-blue/10 hover:border-hospital-orange transition-all duration-300">
            <div className="text-5xl sm:text-6xl mb-4 text-hospital-blue bg-hospital-cream rounded-full p-4"><FaComments /></div>
            <h4 className="font-bold text-lg sm:text-xl mb-2 text-gray-800">Consult & Receive Care</h4>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Connect with your doctor, discuss your symptoms, and get a digital prescription.</p>
          </div>
        </div>
      </section>

      {/* Demo Video */}
      <section className="max-w-4xl mx-auto mt-16 sm:mt-20 text-center px-2 sm:px-4">
        <h3 className="font-extrabold mb-4 text-xl sm:text-2xl md:text-3xl text-hospital-blue">Watch Our Demo</h3>
        <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 border-2 border-hospital-blue/20">
          <video
            controls
            className="mx-auto rounded-xl shadow-lg w-full max-w-3xl"
          >
            <source src={docksVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto mt-16 sm:mt-20 mb-12 sm:mb-16 px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-hospital-blue mb-8 sm:mb-12">What Our Users Say</h2>
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8 justify-center">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col items-center max-w-sm mx-auto border-t-4 border-hospital-orange w-full transform hover:scale-105 transition-all duration-300">
              <img src={t.avatar} alt={t.name} className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-4 border-4 border-hospital-blue shadow-lg" />
              <p className="text-gray-700 italic text-center text-sm sm:text-base leading-relaxed mb-4">"{t.text}"</p>
              <div className="mt-auto font-bold text-hospital-blue text-base sm:text-lg">{t.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
