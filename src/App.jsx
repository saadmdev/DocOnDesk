import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

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
import EquipmentSharing from './pages/EquipmentSharing'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(135deg, #FCF6D9 0%, #9CC6DB 100%)' }}>
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          {/* Default route goes to Home */}
          <Route path="/" element={<Home />} />

          {/* Other routes */}
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/doctor/:id" element={<DoctorDetails />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/about" element={<About />} />
          <Route path="/equipment" element={<EquipmentSharing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/settings" element={<Settings />} />

          {/* Catch-all → redirect to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
