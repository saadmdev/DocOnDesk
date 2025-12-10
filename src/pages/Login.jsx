import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (!email || !password) { alert('Please fill both fields'); return }
    alert('Demo login successful (no backend)')
    navigate('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8" style={{ background: 'linear-gradient(135deg, #FCF6D9 0%, #9CC6DB 100%)' }}>
      <div className="bg-white rounded-3xl shadow-2xl flex w-full max-w-5xl overflow-hidden border-2 border-hospital-blue/20">
        
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-br from-hospital-blue to-[#7BB0C5] text-white p-10 lg:p-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">Welcome Back!</h2>
          <p className="mb-8 text-lg lg:text-xl text-white/90 text-center leading-relaxed">
            To keep connected with us please login with your personal info
          </p>
          <Link to="/signup">
            <button className="px-8 py-3 border-2 border-white rounded-full text-white font-bold hover:bg-white hover:text-hospital-blue transition-all duration-200 transform hover:scale-105">
              Create Account
            </button>
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-hospital-blue mb-6">Login to DocOnDesk</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
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
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-700">
                <input type="checkbox" className="mr-2 accent-hospital-blue" /> Remember Me
              </label>
              <a href="#" className="text-hospital-orange text-sm hover:underline font-medium">Forgot Password?</a>
            </div>
            <button className="w-full py-3.5 bg-hospital-orange hover:bg-[#B84200] text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]">
              Login
            </button>
          </form>
          <div className="mt-6 text-center text-gray-600 text-sm">
            Don&apos;t have an account?{' '}
            <Link to="/signup" className="text-hospital-orange font-bold hover:underline">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
