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
    { role: 'CTO', name: 'Sara Ahmed', img: aImg },
    { role: 'COO', name: 'Ahmad', img: cImg },
    { role: 'CMO', name: 'Sameer', img: dImg },
    { role: 'CFO', name: 'Bilal Hussain', img: eImg },
  ]

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white p-10 rounded-2xl shadow-lg">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-teal-700 mb-4">About DocOnDesk</h2>

        {/* Intro */}
        <p className="text-lg text-gray-700 mb-6">
          DocOnDesk was founded in 2023 by a group of passionate healthcare and technology professionals who saw the need for a faster, more reliable way to connect patients with the right doctors. Our journey began with a simple idea:{' '}
          <span className="font-semibold text-teal-700s">make quality healthcare accessible to everyone, everywhere, at any time.</span>
        </p>

        {/* Our Story */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-teal-700 mb-2">Our Story</h3>
          <p className="text-gray-600 mb-2">
            It all started when our founders experienced the frustration of finding the right specialist during a family emergency. Realizing that millions face similar challenges every day, we set out to build a platform that bridges the gap between patients and trusted medical professionals.
          </p>
          <p className="text-gray-600">
            Today, DocOnDesk empowers thousands of users to book appointments, consult online, and get emergency help within minutes. We are committed to innovation, compassion, and excellence in healthcare delivery.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-teal-700 mb-2">Our Mission</h3>
          <p className="text-gray-600">
            To connect people with the right doctors instantly, provide reliable medical advice, and ensure that no one is left alone in a medical emergency. We believe in{' '}
            <span className="font-semibold text-teal-700">accessible, affordable, and trustworthy healthcare for all.</span>
          </p>
        </div>

        {/* Values */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-teal-700 mb-2">Our Values</h3>
          <ul className="list-disc ml-8 text-gray-700 space-y-1">
            <li>Patient-first approach</li>
            <li>Integrity and transparency</li>
            <li>Innovation in healthcare technology</li>
            <li>Empathy and compassion</li>
            <li>Continuous improvement</li>
          </ul>
        </div>

        {/* Meet Leadership */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-teal-700 mb-4">Meet Our Leadership</h3>

          {/* grid: responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
            {team.map((m, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-gray-100 rounded-xl p-5 shadow hover:shadow-lg transition transform hover:-translate-y-1"
              >
                {/* Photo container (rectangular, larger) */}
                <div className="w-full h-56 mb-3 overflow-hidden rounded-lg border-2 border-gray-100 bg-gray-100">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name and role */}
                <div className="font-bold text-teal-700 text-lg">{m.name}</div>
                <div className="text-teal-700 text-sm mt-1">{m.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-gray-100 rounded-xl p-6 text-center mt-8">
          <h4 className="text-xl font-bold text-teal-700 mb-2">Join Us on Our Mission</h4>
          <p className="text-gray-700 mb-2">
            We are always looking for passionate individuals, partners, and healthcare professionals to join our journey. Together, we can make healthcare better for everyone.
          </p>
          <a
            href="mailto:contact@docondesk.com"
            className="inline-block mt-2 px-6 py-2 bg-teal-600 text-white rounded-lg font-semibold shadow hover:bg-orange-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
