// src/pages/About.jsx
import React from 'react'
import aImg from '../assets/a.jpg'
import bImg from '../assets/b.jpg'
import cImg from '../assets/c.jpg'
import dImg from '../assets/d.jpg'
import eImg from '../assets/e.jpg'

export default function About() {
  const team = [
    { role: 'CEO', name: 'Taha Jamal', img: bImg },
    { role: 'CTO', name: 'Asad Abbas', img: aImg },
    { role: 'COO', name: 'Abdullah Amir', img: cImg },
    { role: 'CMO', name: 'Malik Sameer', img: dImg },
    { role: 'CFO', name: 'Burhan Ahmed', img: eImg },
  ]

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white p-6 sm:p-10 lg:p-12 rounded-3xl shadow-xl border-2 border-hospital-blue/20">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-hospital-blue mb-6 text-center">About DocOnDesk</h2>

        {/* Intro */}
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed text-center max-w-4xl mx-auto">
          DocOnDesk was founded in 2023 by a group of passionate healthcare and technology professionals who saw the need for a faster, more reliable way to connect patients with the right doctors. Our journey began with a simple idea:{' '}
          <span className="font-bold text-hospital-orange">make quality healthcare accessible to everyone, everywhere, at any time.</span>
        </p>

        {/* Our Story */}
        <div className="mb-10 bg-hospital-cream/50 rounded-2xl p-6 sm:p-8 border-l-4 border-hospital-orange">
          <h3 className="text-2xl sm:text-3xl font-bold text-hospital-blue mb-4">Our Story</h3>
          <p className="text-gray-700 mb-3 leading-relaxed text-base sm:text-lg">
            It all started when our founders experienced the frustration of finding the right specialist during a family emergency. Realizing that millions face similar challenges every day, we set out to build a platform that bridges the gap between patients and trusted medical professionals.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Today, DocOnDesk empowers thousands of users to book appointments, consult online, and get emergency help within minutes. We are committed to innovation, compassion, and excellence in healthcare delivery.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-10 bg-hospital-blue/10 rounded-2xl p-6 sm:p-8 border-l-4 border-hospital-blue">
          <h3 className="text-2xl sm:text-3xl font-bold text-hospital-blue mb-4">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            To connect people with the right doctors instantly, provide reliable medical advice, and ensure that no one is left alone in a medical emergency. We believe in{' '}
            <span className="font-bold text-hospital-orange">accessible, affordable, and trustworthy healthcare for all.</span>
          </p>
        </div>

        {/* Values */}
        <div className="mb-10 bg-white rounded-2xl p-6 sm:p-8 border-2 border-hospital-gold/30">
          <h3 className="text-2xl sm:text-3xl font-bold text-hospital-blue mb-4">Our Values</h3>
          <ul className="list-disc ml-6 sm:ml-8 text-gray-700 space-y-2 text-base sm:text-lg">
            <li className="leading-relaxed">Patient-first approach</li>
            <li className="leading-relaxed">Integrity and transparency</li>
            <li className="leading-relaxed">Innovation in healthcare technology</li>
            <li className="leading-relaxed">Empathy and compassion</li>
            <li className="leading-relaxed">Continuous improvement</li>
          </ul>
        </div>

        {/* Meet Leadership */}
        <div className="mb-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-hospital-blue mb-6 text-center">Meet Our Leadership</h3>

          {/* grid: responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {team.map((m, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-white rounded-2xl p-5 shadow-lg border-2 border-hospital-blue/10 hover:shadow-2xl hover:border-hospital-orange transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Photo container (rectangular, larger) */}
                <div className="w-full h-56 mb-4 overflow-hidden rounded-xl border-2 border-hospital-blue/20 bg-hospital-cream">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name and role */}
                <div className="font-bold text-hospital-blue text-lg sm:text-xl text-center">{m.name}</div>
                <div className="text-hospital-orange text-sm sm:text-base mt-1 font-semibold">{m.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-gradient-to-r from-hospital-blue to-[#7BB0C5] rounded-2xl p-8 sm:p-10 text-center mt-8 text-white shadow-xl">
          <h4 className="text-2xl sm:text-3xl font-bold mb-4">Join Us on Our Mission</h4>
          <p className="text-white/90 mb-6 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We are always looking for passionate individuals, partners, and healthcare professionals to join our journey. Together, we can make healthcare better for everyone.
          </p>
          <a
            href="mailto:contact@docondesk.com"
            className="inline-block mt-2 px-8 py-3 bg-hospital-orange hover:bg-[#B84200] text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
