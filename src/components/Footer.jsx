// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t-4 border-hospital-blue mt-auto shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            <span className="text-hospital-orange">Doc</span>
            <span className="text-hospital-blue">On</span>
            <span className="text-hospital-orange">Desk</span>
          </h2>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            Connecting you with trusted doctors, specialties, and emergency services. Your health is our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-hospital-blue mb-4">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="text-gray-600 hover:text-hospital-orange transition-colors font-medium">Home</Link></li>
            <li><Link to="/specialties" className="text-gray-600 hover:text-hospital-orange transition-colors font-medium">Specialties</Link></li>
            <li><Link to="/emergency" className="text-gray-600 hover:text-hospital-orange transition-colors font-medium">Emergency</Link></li>
            <li><Link to="/equipment" className="text-gray-600 hover:text-hospital-orange transition-colors font-medium">Equipment Sharing</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-hospital-orange transition-colors font-medium">About</Link></li>
            <li><Link to="/login" className="text-gray-600 hover:text-hospital-orange transition-colors font-medium">Login</Link></li>
            <li><Link to="/signup" className="text-gray-600 hover:text-hospital-orange transition-colors font-medium">Sign Up</Link></li>
          </ul>
        </div>

        {/* Specialties */}
        <div>
          <h3 className="text-lg font-bold text-hospital-blue mb-4">Specialties</h3>
          <ul className="space-y-2.5 text-sm text-gray-600">
            <li className="hover:text-hospital-gold transition-colors cursor-default">Cardiology</li>
            <li className="hover:text-hospital-gold transition-colors cursor-default">Dermatology</li>
            <li className="hover:text-hospital-gold transition-colors cursor-default">Neurology</li>
            <li className="hover:text-hospital-gold transition-colors cursor-default">Orthopedics</li>
            <li className="hover:text-hospital-gold transition-colors cursor-default">Pediatrics</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold text-hospital-blue mb-4">Contact Us</h3>
          <div className="space-y-3 text-sm text-gray-600">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-hospital-orange text-base" /> 
              <span>Islamabad, Pakistan</span>
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-hospital-orange text-base" /> 
              <a href="mailto:support@docondesk.com" className="hover:text-hospital-orange transition-colors">support@docondesk.com</a>
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-hospital-orange text-base" /> 
              <a href="tel:+923001234567" className="hover:text-hospital-orange transition-colors">+92 300 1234567</a>
            </p>
          </div>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-hospital-blue hover:text-hospital-orange transition-colors transform hover:scale-110"><FaFacebook size={22} /></a>
            <a href="#" className="text-hospital-blue hover:text-hospital-orange transition-colors transform hover:scale-110"><FaTwitter size={22} /></a>
            <a href="#" className="text-hospital-blue hover:text-hospital-orange transition-colors transform hover:scale-110"><FaLinkedin size={22} /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t-2 border-hospital-blue/20 bg-hospital-cream text-center py-4 text-sm text-gray-700 font-medium">
        © {new Date().getFullYear()} DocOnDesk. All rights reserved. | Trusted Healthcare Platform
      </div>
    </footer>
  );
}
