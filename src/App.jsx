import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Specialties from './pages/Specialties'
import DoctorDetails from './pages/DoctorDetails'
import Emergency from './pages/Emergency'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Account from './pages/Account'
import Payments from './pages/Payments'
import Settings from './pages/Settings'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-teal-100 to-violet-200">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/doctor/:id" element={<DoctorDetails />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
