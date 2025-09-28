// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            <span className="text-teal-400">Doc</span>
            <span className="text-white">On</span>
            <span className="text-teal-400">Desk</span>
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            Connecting you with trusted doctors, specialties, and emergency services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-teal-400 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-teal-300">Home</Link></li>
            <li><Link to="/specialties" className="hover:text-teal-300">Specialties</Link></li>
            <li><Link to="/emergency" className="hover:text-teal-300">Emergency</Link></li>
            <li><Link to="/about" className="hover:text-teal-300">About</Link></li>
            <li><Link to="/login" className="hover:text-teal-300">Login</Link></li>
            <li><Link to="/signup" className="hover:text-teal-300">Sign Up</Link></li>
          </ul>
        </div>

        {/* Specialties */}
        <div>
          <h3 className="text-lg font-semibold text-teal-400 mb-4">Specialties</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Cardiology</li>
            <li>Dermatology</li>
            <li>Neurology</li>
            <li>Orthopedics</li>
            <li>Pediatrics</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-teal-400 mb-4">Contact</h3>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-teal-400" /> Islamabad, Pakistan
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-teal-400" /> support@docondesk.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-teal-400" /> +92 300 1234567
            </p>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-teal-300"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-teal-300"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-teal-300"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} DocOnDesk. All rights reserved.
      </div>
    </footer>
  );
}
