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
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900 shadow sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/" className="text-2xl font-bold whitespace-nowrap">
            <span className="text-red-600">Doc</span>
            <span className="text-blue-600">On</span>
            <span className="text-red-600">Desk</span>
          </Link>
          <span className="text-sm text-gray-400 hidden md:inline">
            Find doctors • Emergency
          </span>
        </div>

        {/* Mobile: Emergency button & Hamburger */}
        <div className="flex items-center md:hidden gap-2">
          <Link
            to="/emergency"
            className="px-3 py-2 rounded-lg bg-red-600 text-white font-semibold shadow-md hover:bg-red-700 transition flex items-center gap-2 animate-pulse"
            aria-label="Emergency"
          >
            <FaExclamationTriangle className="text-lg" />
          </Link>
          <button
            className="ml-1 p-2 rounded hover:bg-gray-100 transition"
            onClick={() => setMobileMenu((v) => !v)}
            aria-label="Open menu"
          >
            <FaBars className="text-xl" />
          </button>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex space-x-2 items-center">
          <Link
            to="/"
            className="px-3 py-2 text-gray-400 rounded hover:bg-blue-100 hover:text-red-600 transition"
          >
            Home
          </Link>
          <Link
            to="/specialties"
            className="px-3 py-2 text-gray-400 rounded hover:bg-blue-100 hover:text-red-600 transition"
          >
            Browse
          </Link>
          <Link
            to="/about"
            className="px-3 py-2 text-gray-400 rounded hover:bg-blue-100 hover:text-red-600 transition"
          >
            About
          </Link>

          {/* User Profile Dropdown */}
          <div className="relative ml-4" ref={dropdownRef}>
            <button
              onClick={() => setDropdown((v) => !v)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 transition"
            >
              <FaUserCircle className="text-2xl" />
              <span className="hidden sm:inline">{user.name}</span>
            </button>
            {dropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border z-50">
                <Link
                  to="/login"
                  className="flex items-center gap-2 px-4 py-3 hover:bg-indigo-50 text-gray-700"
                  onClick={() => setDropdown(false)}
                >
                  <FaSignInAlt /> Login
                </Link>
                <Link
                  to="/account"
                  className="flex items-center gap-2 px-4 py-3 hover:bg-indigo-50 text-gray-700"
                  onClick={() => setDropdown(false)}
                >
                  <FaUser /> Account Details
                </Link>
                <Link
                  to="/payments"
                  className="flex items-center gap-2 px-4 py-3 hover:bg-indigo-50 text-gray-700"
                  onClick={() => setDropdown(false)}
                >
                  <FaCreditCard /> Payments
                </Link>
                <Link
                  to="/settings"
                  className="flex items-center gap-2 px-4 py-3 hover:bg-indigo-50 text-gray-700"
                  onClick={() => setDropdown(false)}
                >
                  <FaCog /> Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-3 w-full hover:bg-red-50 text-red-600 border-t"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            )}
          </div>

          {/* 🚨 Emergency button (desktop) */}
          <Link
            to="/emergency"
            className="ml-4 px-4 py-2 rounded-lg bg-red-600 text-white font-semibold shadow-md hover:bg-red-700 transition flex items-center gap-2 animate-pulse"
          >
            <FaExclamationTriangle className="text-lg" />
            Emergency
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col px-4 py-2 space-y-1">
            <Link
              to="/"
              className="py-2 px-2 rounded hover:bg-blue-100 hover:text-red-600 transition"
              onClick={() => setMobileMenu(false)}
            >
              Home
            </Link>
            <Link
              to="/specialties"
              className="py-2 px-2 rounded hover:bg-blue-100 hover:text-red-600 transition"
              onClick={() => setMobileMenu(false)}
            >
              Browse
            </Link>
            <Link
              to="/about"
              className="py-2 px-2 rounded hover:bg-blue-100 hover:text-red-600 transition"
              onClick={() => setMobileMenu(false)}
            >
              About
            </Link>
            <div className="border-t my-2" />
            {/* User Profile Dropdown for mobile */}
            <div className="flex items-center gap-2 px-2 py-2">
              <FaUserCircle className="text-2xl text-indigo-600" />
              <span className="font-semibold">{user.name}</span>
            </div>
            <Link
              to="/login"
              className="flex items-center gap-2 px-2 py-2 hover:bg-indigo-50 text-gray-700 rounded"
              onClick={() => setMobileMenu(false)}
            >
              <FaSignInAlt /> Login
            </Link>
            <Link
              to="/account"
              className="flex items-center gap-2 px-2 py-2 hover:bg-indigo-50 text-gray-700 rounded"
              onClick={() => setMobileMenu(false)}
            >
              <FaUser /> Account Details
            </Link>
            <Link
              to="/payments"
              className="flex items-center gap-2 px-2 py-2 hover:bg-indigo-50 text-gray-700 rounded"
              onClick={() => setMobileMenu(false)}
            >
              <FaCreditCard /> Payments
            </Link>
            <Link
              to="/settings"
              className="flex items-center gap-2 px-2 py-2 hover:bg-indigo-50 text-gray-700 rounded"
              onClick={() => setMobileMenu(false)}
            >
              <FaCog /> Settings
            </Link>
            <button
              onClick={() => {
                setMobileMenu(false);
                handleLogout();
              }}
              className="flex items-center gap-2 px-2 py-2 w-full hover:bg-red-50 text-red-600 rounded"
            >
              <FaSignOutAlt /> Logout
            </button>
            <div className="border-t my-2" />
            <Link
              to="/emergency"
              className="px-2 py-2 rounded-lg bg-red-600 text-white font-semibold shadow-md hover:bg-red-700 transition flex items-center gap-2 w-full justify-center animate-pulse"
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
