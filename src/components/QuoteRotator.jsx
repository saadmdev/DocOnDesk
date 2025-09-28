import React, { useEffect, useState } from 'react'

export default function QuoteRotator({ quotes, interval = 5000, className = "" }) {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI(prev => (prev + 1) % quotes.length), interval)
    return () => clearInterval(t)
  }, [quotes, interval])

  return (
    <div className={`text-center ${className}`}>
      "{quotes[i]}"
    </div>
  )
}
