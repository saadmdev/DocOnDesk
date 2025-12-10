import React, { useState, useRef, useEffect } from 'react'

export default function Emergency() {
  const [status, setStatus] = useState('idle') // idle | finding | dispatched
  const [coords, setCoords] = useState(null)
  const [progress, setProgress] = useState(0)
  const [showTerms, setShowTerms] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    return () => clearInterval(timerRef.current)
  }, [])

  function startSimulation() {
    clearInterval(timerRef.current)
    setProgress(0)
    setStatus('finding')
    let p = 0
    timerRef.current = setInterval(() => {
      p += Math.random() * 18 + 8
      if (p >= 100) {
        p = 100
        setStatus('dispatched')
        clearInterval(timerRef.current)
      }
      setProgress(Math.round(p))
    }, 600)
  }

  function handleEmergency() {
    setShowTerms(true)
  }

  function confirmEmergency() {
    setShowTerms(false)
    setStatus('fetching')
    if (!navigator.geolocation) {
      setCoords({ lat: 33.6844, lng: 73.0479 })
      startSimulation()
      return
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude })
        startSimulation()
      },
      () => {
        setCoords({ lat: 33.6844, lng: 73.0479 })
        startSimulation()
      },
      { timeout: 8000 }
    )
  }

  // Simple map using OpenStreetMap static image (for demo)
  function MapDemo({ lat, lng }) {
    if (!lat || !lng) return (
      <div className="w-full h-56 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-lg">
        Locating...
      </div>
    )
    // Demo ambulance marker (just a red dot)
    const marker = `&markers=color:red|${lat},${lng}`
    const url = `https://static-maps.yandex.ru/1.x/?ll=${lng},${lat}&size=600,250&z=15&l=map&pt=${lng},${lat},pm2rdm`
    return (
      <div className="w-full h-56 rounded-xl overflow-hidden border mb-4">
        <img
          src={url}
          alt="Map showing your location"
          className="w-full h-full object-cover"
        />
      </div>
    )
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-8"
      style={{ background: 'linear-gradient(135deg, #FCF6D9 0%, #9CC6DB 100%)' }}
    >
      <div className="max-w-4xl w-full bg-white p-6 sm:p-10 lg:p-12 rounded-3xl shadow-2xl text-center flex flex-col items-center border-2 border-hospital-orange/20">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-hospital-orange mb-4">Emergency Ambulance Service</h2>
          <p className="text-lg sm:text-xl text-gray-800 mb-3 font-bold">
            <span className="text-hospital-orange">Every second matters in an emergency.</span>
          </p>
          <p className="text-gray-700 mb-3 text-base sm:text-lg leading-relaxed">
            If you or someone near you needs urgent medical help, request an ambulance instantly. Our system will connect you to the nearest available ambulance as quickly as possible.
          </p>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            <span className="font-bold text-hospital-blue">How it works:</span> We use your current location to find the closest ambulance and dispatch it to you. Please stay at your location and keep your phone nearby for updates.
          </p>
          <ul className="text-left text-gray-700 mb-6 mx-auto max-w-2xl list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base bg-hospital-cream/50 rounded-xl p-4 sm:p-6">
            <li>Fastest ambulance dispatch based on your location</li>
            <li>Real-time progress and estimated arrival</li>
            <li>24/7 emergency support</li>
            <li>All calls are monitored for safety and misuse</li>
          </ul>
        </div>

        {/* Map Demo */}
        {(coords || status === 'fetching' || status === 'finding' || status === 'dispatched') && (
          <MapDemo lat={coords?.lat} lng={coords?.lng} />
        )}

        {/* Request Button & Terms Modal */}
        {(status === 'idle' || status === 'fetching') && !showTerms && (
          <button
            onClick={handleEmergency}
            className="px-8 sm:px-10 py-4 bg-hospital-orange hover:bg-[#B84200] text-white rounded-full font-bold text-lg sm:text-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 mb-2 animate-pulse"
            disabled={status === 'fetching'}
          >
            {status === 'fetching' ? 'Locating you...' : 'Request Ambulance Now'}
          </button>
        )}

        {/* Terms Modal */}
        {showTerms && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-lg w-full text-left border-2 border-hospital-orange/20">
              <h3 className="text-xl sm:text-2xl font-bold text-hospital-orange mb-3">Important Notice</h3>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                By requesting an ambulance, you agree to the following terms:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2 text-sm sm:text-base">
                <li>This service is for genuine medical emergencies only.</li>
                <li>Misuse, prank calls, or false requests will result in a penalty fine and possible legal action.</li>
                <li>Your location and request details may be shared with emergency services for your safety.</li>
                <li>All requests are logged and monitored.</li>
              </ul>
              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  id="agree"
                  checked={agreed}
                  onChange={e => setAgreed(e.target.checked)}
                  className="mr-3 w-5 h-5 accent-hospital-orange"
                />
                <label htmlFor="agree" className="text-gray-700 text-sm sm:text-base">
                  I have read and agree to the terms and consequences of misuse.
                </label>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowTerms(false)}
                  className="px-5 py-2.5 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmEmergency}
                  className={`px-5 py-2.5 rounded-lg bg-hospital-orange text-white font-semibold shadow-lg ${!agreed ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#B84200] hover:shadow-xl transition-all'}`}
                  disabled={!agreed}
                >
                  Confirm & Request Ambulance
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Progress & Status */}
        {status !== 'idle' && (
          <div className="mt-8 w-full max-w-xl mx-auto">
            <div className="mb-4">
              {status === 'finding' && (
                <>
                  <div className="flex flex-col items-center">
                    <svg className="animate-spin mb-3" width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="#CF4B00" strokeWidth="4" opacity="0.2"/>
                      <path d="M22 12a10 10 0 0 1-10 10" stroke="#CF4B00" strokeWidth="4" strokeLinecap="round"/>
                    </svg>
                    <span className="text-lg sm:text-xl font-bold text-hospital-orange">Finding the nearest ambulance...</span>
                  </div>
                  <div className="mt-3 text-gray-600 text-sm sm:text-base">Please stay calm. Help is on the way.</div>
                </>
              )}
              {status === 'dispatched' && (
                <>
                  <div className="flex flex-col items-center">
                    <svg width="50" height="50" fill="none" viewBox="0 0 24 24">
                      <rect x="2" y="13" width="20" height="7" rx="2" fill="#9CC6DB"/>
                      <rect x="16" y="8" width="6" height="7" rx="1.5" fill="#CF4B00"/>
                      <rect x="4" y="8" width="12" height="5" rx="1.5" fill="#DDBA7D"/>
                      <circle cx="6.5" cy="20" r="2" fill="#fff"/>
                      <circle cx="17.5" cy="20" r="2" fill="#fff"/>
                    </svg>
                    <span className="text-lg sm:text-xl font-bold text-hospital-blue mt-3">
                      Ambulance found! Help is on its way.
                    </span>
                  </div>
                  <div className="mt-3 text-gray-600 text-sm sm:text-base">
                    Stay at your location and keep your phone nearby for updates.
                  </div>
                </>
              )}
            </div>
            <div className="mb-2">
              <strong>Status:</strong>{' '}
              {status === 'finding'
                ? 'Searching for ambulance...'
                : status === 'dispatched'
                ? 'Ambulance dispatched'
                : ''}
            </div>
            <div className="mb-2">
              <strong>Your Location:</strong>{' '}
              {coords ? `${coords.lat.toFixed(5)}, ${coords.lng.toFixed(5)}` : 'Detecting...'}
            </div>
            <div className="mb-2">
              <strong>Progress:</strong>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden shadow-inner">
              <div
                className={`h-5 ${status === 'dispatched' ? 'bg-hospital-blue' : 'bg-hospital-orange'} transition-all rounded-full`}
                style={{ width: progress + '%' }}
              />
            </div>
            <div className="mt-2 text-sm text-gray-500">
              Estimated arrival (simulated): {Math.max(1, Math.ceil((100 - progress) / 18))} min
            </div>
          </div>
        )}

        <div className="mt-10 text-xs text-gray-400 max-w-xl mx-auto">
          <span>
            <strong>Note:</strong> This is a demo simulation. In a real emergency, always call your local emergency number.
          </span>
        </div>
      </div>
    </div>
  )
}
