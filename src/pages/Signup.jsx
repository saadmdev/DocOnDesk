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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 via-cyan-600 to-teal-500">
      <div className="bg-white rounded-2xl shadow-2xl flex w-full max-w-4xl overflow-hidden">
        
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-br from-blue-600 to-teal-500 text-white p-10">
          <h2 className="text-3xl font-extrabold mb-2">Welcome to DocOnDesk!</h2>
          <p className="mb-6 text-lg text-blue-100 text-center">
            Already have an account? Login to access your dashboard.
          </p>
          <Link to="/login">
            <button className="px-8 py-2 border border-white rounded-full text-white font-semibold hover:bg-white hover:text-blue-700 transition">
              Login
            </button>
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex-1 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Create Account</h2>
          
          {/* Social Logins */}
          <div className="flex gap-3 mb-4 justify-center">
            <button className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 text-xl">
              <FaGoogle className="text-red-500" />
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 text-xl">
              <FaFacebook className="text-blue-600" />
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 text-xl">
              <FaLinkedin className="text-blue-700" />
            </button>
          </div>

          <div className="text-center text-gray-400 mb-4">
            or use your email for registration
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
              placeholder="Full name"
            />
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
              placeholder="Email"
              type="email"
            />
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-400"
              placeholder="Password"
              type="password"
            />
            <button className="w-full py-3 bg-blue-600 hover:bg-teal-600 text-white rounded-full font-semibold transition">
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center text-gray-500 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 font-semibold hover:underline">Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
