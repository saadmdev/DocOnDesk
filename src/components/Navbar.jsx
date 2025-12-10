import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaExclamationTriangle, FaUserCircle, FaSignInAlt, FaUser, FaCreditCard, FaSignOutAlt, FaCog, FaBars } from "react-icons/fa";

export default function Navbar() {
  // Demo user (replace with real auth logic)
  const user = { name: "Ayesha Khan", email: "ayesha@email.com" };
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdown(false);
      }
    }
    if (dropdown) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [dropdown]);

  function handleLogout() {
    alert("Logged out (demo)");
    setDropdown(false);
    navigate("/login");
  }

  return (
    <header className="bg-white shadow-lg border-b-2 border-hospital-blue/20 sticky top-0 z-40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/" className="text-2xl sm:text-3xl font-extrabold whitespace-nowrap">
            <span className="text-hospital-orange">Doc</span>
            <span className="text-hospital-blue">On</span>
            <span className="text-hospital-orange">Desk</span>
          </Link>
          <span className="text-xs sm:text-sm text-gray-600 hidden lg:inline font-medium">
            Find doctors • Emergency
          </span>
        </div>

        {/* Mobile: Emergency button & Hamburger */}
        <div className="flex items-center md:hidden gap-2">
          <Link
            to="/emergency"
            className="px-3 py-2 rounded-lg bg-hospital-orange text-white font-bold shadow-lg hover:bg-[#B84200] transition-all flex items-center gap-2 animate-pulse"
            aria-label="Emergency"
          >
            <FaExclamationTriangle className="text-base" />
          </Link>
          <button
            className="ml-1 p-2 rounded-lg hover:bg-hospital-cream transition text-hospital-blue"
            onClick={() => setMobileMenu((v) => !v)}
            aria-label="Open menu"
          >
            <FaBars className="text-xl" />
          </button>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex space-x-1 items-center">
          <Link
            to="/"
            className="px-4 py-2 text-gray-700 font-medium rounded-lg hover:bg-hospital-cream hover:text-hospital-orange transition-all duration-200"
          >
            Home
          </Link>
          <Link
            to="/specialties"
            className="px-4 py-2 text-gray-700 font-medium rounded-lg hover:bg-hospital-cream hover:text-hospital-orange transition-all duration-200"
          >
            Browse
          </Link>
          <Link
            to="/about"
            className="px-4 py-2 text-gray-700 font-medium rounded-lg hover:bg-hospital-cream hover:text-hospital-orange transition-all duration-200"
          >
            About
          </Link>
          <Link
            to="/equipment"
            className="px-4 py-2 text-gray-700 font-medium rounded-lg hover:bg-hospital-cream hover:text-hospital-orange transition-all duration-200"
          >
            Equipment
          </Link>

          {/* User Profile Dropdown */}
          <div className="relative ml-4" ref={dropdownRef}>
            <button
              onClick={() => setDropdown((v) => !v)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-hospital-blue text-white font-semibold shadow-md hover:bg-[#7BB0C5] transition-all duration-200"
            >
              <FaUserCircle className="text-xl" />
              <span className="hidden sm:inline text-sm">{user.name}</span>
            </button>
            {dropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border-2 border-hospital-blue/20 z-50 overflow-hidden">
                <Link
                  to="/login"
                  className="flex items-center gap-2 px-4 py-3 hover:bg-hospital-cream text-gray-700 transition-colors"
                  onClick={() => setDropdown(false)}
                >
                  <FaSignInAlt className="text-hospital-blue" /> Login
                </Link>
                <Link
                  to="/account"
                  className="flex items-center gap-2 px-4 py-3 hover:bg-hospital-cream text-gray-700 transition-colors"
                  onClick={() => setDropdown(false)}
                >
                  <FaUser className="text-hospital-blue" /> Account Details
                </Link>
                <Link
                  to="/payments"
                  className="flex items-center gap-2 px-4 py-3 hover:bg-hospital-cream text-gray-700 transition-colors"
                  onClick={() => setDropdown(false)}
                >
                  <FaCreditCard className="text-hospital-blue" /> Payments
                </Link>
                <Link
                  to="/settings"
                  className="flex items-center gap-2 px-4 py-3 hover:bg-hospital-cream text-gray-700 transition-colors"
                  onClick={() => setDropdown(false)}
                >
                  <FaCog className="text-hospital-blue" /> Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-3 w-full hover:bg-red-50 text-hospital-orange border-t border-gray-200 transition-colors font-medium"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            )}
          </div>

          {/* 🚨 Emergency button (desktop) */}
          <Link
            to="/emergency"
            className="ml-4 px-5 py-2.5 rounded-lg bg-hospital-orange text-white font-bold shadow-lg hover:bg-[#B84200] transition-all duration-200 flex items-center gap-2 animate-pulse hover:scale-105"
          >
            <FaExclamationTriangle className="text-base" />
            Emergency
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-t-2 border-hospital-blue/20 shadow-xl">
          <nav className="flex flex-col px-4 py-3 space-y-1">
            <Link
              to="/"
              className="py-3 px-4 rounded-lg hover:bg-hospital-cream hover:text-hospital-orange transition-all font-medium"
              onClick={() => setMobileMenu(false)}
            >
              Home
            </Link>
            <Link
              to="/specialties"
              className="py-3 px-4 rounded-lg hover:bg-hospital-cream hover:text-hospital-orange transition-all font-medium"
              onClick={() => setMobileMenu(false)}
            >
              Browse
            </Link>
            <Link
              to="/about"
              className="py-3 px-4 rounded-lg hover:bg-hospital-cream hover:text-hospital-orange transition-all font-medium"
              onClick={() => setMobileMenu(false)}
            >
              About
            </Link>
            <Link
              to="/equipment"
              className="py-3 px-4 rounded-lg hover:bg-hospital-cream hover:text-hospital-orange transition-all font-medium"
              onClick={() => setMobileMenu(false)}
            >
              Equipment
            </Link>
            <div className="border-t-2 border-hospital-blue/20 my-3" />
            {/* User Profile Dropdown for mobile */}
            <div className="flex items-center gap-2 px-4 py-3 bg-hospital-cream rounded-lg">
              <FaUserCircle className="text-2xl text-hospital-blue" />
              <span className="font-semibold text-gray-800">{user.name}</span>
            </div>
            <Link
              to="/login"
              className="flex items-center gap-2 px-4 py-3 hover:bg-hospital-cream text-gray-700 rounded-lg transition-colors"
              onClick={() => setMobileMenu(false)}
            >
              <FaSignInAlt className="text-hospital-blue" /> Login
            </Link>
            <Link
              to="/account"
              className="flex items-center gap-2 px-4 py-3 hover:bg-hospital-cream text-gray-700 rounded-lg transition-colors"
              onClick={() => setMobileMenu(false)}
            >
              <FaUser className="text-hospital-blue" /> Account Details
            </Link>
            <Link
              to="/payments"
              className="flex items-center gap-2 px-4 py-3 hover:bg-hospital-cream text-gray-700 rounded-lg transition-colors"
              onClick={() => setMobileMenu(false)}
            >
              <FaCreditCard className="text-hospital-blue" /> Payments
            </Link>
            <Link
              to="/settings"
              className="flex items-center gap-2 px-4 py-3 hover:bg-hospital-cream text-gray-700 rounded-lg transition-colors"
              onClick={() => setMobileMenu(false)}
            >
              <FaCog className="text-hospital-blue" /> Settings
            </Link>
            <button
              onClick={() => {
                setMobileMenu(false);
                handleLogout();
              }}
              className="flex items-center gap-2 px-4 py-3 w-full hover:bg-red-50 text-hospital-orange rounded-lg transition-colors font-medium"
            >
              <FaSignOutAlt /> Logout
            </button>
            <div className="border-t-2 border-hospital-blue/20 my-3" />
            <Link
              to="/emergency"
              className="px-4 py-3 rounded-lg bg-hospital-orange text-white font-bold shadow-lg hover:bg-[#B84200] transition-all flex items-center gap-2 w-full justify-center animate-pulse"
              onClick={() => setMobileMenu(false)}
            >
              <FaExclamationTriangle className="text-lg" />
              Emergency
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
