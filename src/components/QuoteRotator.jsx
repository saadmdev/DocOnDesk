import React, { useEffect, useState } from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

export default function QuoteRotator({ quotes, interval = 5000, className = "" }) {
  const [i, setI] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const t = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setI(prev => (prev + 1) % quotes.length)
        setFade(true)
      }, 300)
    }, interval)
    return () => clearInterval(t)
  }, [quotes, interval])

  return (
    <div className={`text-center relative ${className}`}>
      <div className={`transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
          <FaQuoteLeft className="text-hospital-blue text-xl sm:text-2xl opacity-60" />
          <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed px-2 sm:px-4">
            {quotes[i]}
          </p>
          <FaQuoteRight className="text-hospital-blue text-xl sm:text-2xl opacity-60" />
        </div>
        {/* Quote Indicator Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {quotes.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === i 
                  ? 'bg-hospital-cream w-6' 
                  : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
