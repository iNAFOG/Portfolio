'use client'
import { useState } from 'react'
import Instagram from './Instagram'

export default function InstagramApp() {
  const [isInstagramOpen, setIsInstagramOpen] = useState(false)

  const openInstagram = () => {
    setIsInstagramOpen(true)
  }

  const closeInstagram = () => {
    setIsInstagramOpen(false)
  }

  return (
    <>
      {/* Instagram App Icon on main screen */}
      <div className="fixed top-100 left-170">
        <div 
          className="w-16 h-16 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 shadow-lg"
          onClick={openInstagram}
        >
          <img 
            src="/instagram.svg" 
            alt="Instagram" 
            className="w-30 h-30"
          />
        </div>
        {/* App label */}
        <div className="text-center mt-1">
          <span className="text-white text-xs font-medium drop-shadow-md">Instagram</span>
        </div>
      </div>

      {/* Instagram Profile Modal */}
      <Instagram 
        isOpen={isInstagramOpen} 
        onClose={closeInstagram} 
      />
    </>
  )
}