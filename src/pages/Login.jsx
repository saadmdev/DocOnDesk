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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 via-cyan-600 to-teal-500">
      <div className="bg-white rounded-2xl shadow-2xl flex w-full max-w-4xl overflow-hidden">
        
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-br from-blue-600 to-teal-500 text-white p-10">
          <h2 className="text-3xl font-extrabold mb-2">Welcome Back!</h2>
          <p className="mb-6 text-lg text-blue-100 text-center">
            To keep connected with us please login with your personal info
          </p>
          <Link to="/signup">
            <button className="px-8 py-2 border border-white rounded-full text-white font-semibold hover:bg-white hover:text-blue-700 transition">
              Create Account
            </button>
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex-1 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Login to DocOnDesk</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
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
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" /> Remember Me
              </label>
              <a href="#" className="text-blue-600 text-sm hover:underline">Forgot Password?</a>
            </div>
            <button className="w-full py-3 bg-blue-600 hover:bg-teal-600 text-white rounded-full font-semibold transition">
              Login
            </button>
          </form>
          <div className="mt-6 text-center text-gray-500 text-sm">
            Don&apos;t have an account?{' '}
            <Link to="/signup" className="text-blue-600 font-semibold hover:underline">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
