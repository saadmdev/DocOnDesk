import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa"

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (!name || !email || !password) { alert('Please fill all fields'); return }
    alert('Demo sign up successful (no backend)')
    navigate('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8" style={{ background: 'linear-gradient(135deg, #FCF6D9 0%, #9CC6DB 100%)' }}>
      <div className="bg-white rounded-3xl shadow-2xl flex w-full max-w-5xl overflow-hidden border-2 border-hospital-blue/20">
        
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-br from-hospital-blue to-[#7BB0C5] text-white p-10 lg:p-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">Welcome to DocOnDesk!</h2>
          <p className="mb-8 text-lg lg:text-xl text-white/90 text-center leading-relaxed">
            Already have an account? Login to access your dashboard.
          </p>
          <Link to="/login">
            <button className="px-8 py-3 border-2 border-white rounded-full text-white font-bold hover:bg-white hover:text-hospital-blue transition-all duration-200 transform hover:scale-105">
              Login
            </button>
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-hospital-blue mb-6">Create Account</h2>
          
          {/* Social Logins */}
          <div className="flex gap-3 mb-6 justify-center">
            <button className="bg-hospital-cream hover:bg-hospital-gold rounded-full p-3 text-xl transition-all duration-200 transform hover:scale-110 border-2 border-hospital-blue/20">
              <FaGoogle className="text-red-500" />
            </button>
            <button className="bg-hospital-cream hover:bg-hospital-gold rounded-full p-3 text-xl transition-all duration-200 transform hover:scale-110 border-2 border-hospital-blue/20">
              <FaFacebook className="text-blue-600" />
            </button>
            <button className="bg-hospital-cream hover:bg-hospital-gold rounded-full p-3 text-xl transition-all duration-200 transform hover:scale-110 border-2 border-hospital-blue/20">
              <FaLinkedin className="text-blue-700" />
            </button>
          </div>

          <div className="text-center text-gray-500 mb-6 font-medium">
            or use your email for registration
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full p-3.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-cream focus:border-hospital-blue transition text-gray-800"
              placeholder="Full name"
            />
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full p-3.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-cream focus:border-hospital-blue transition text-gray-800"
              placeholder="Email"
              type="email"
            />
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full p-3.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-cream focus:border-hospital-blue transition text-gray-800"
              placeholder="Password"
              type="password"
            />
            <button className="w-full py-3.5 bg-hospital-orange hover:bg-[#B84200] text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]">
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center text-gray-600 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-hospital-orange font-bold hover:underline">Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
