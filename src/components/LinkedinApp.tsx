'use client'
import { useState } from 'react'
import LinkedIn from './Linkedin'

export default function LinkedInApp() {
  const [isLinkedInOpen, setIsLinkedInOpen] = useState(false)

  const openLinkedIn = () => {
    setIsLinkedInOpen(true)
  }

  const closeLinkedIn = () => {
    setIsLinkedInOpen(false)
  }

  return (
    <>
      {/* LinkedIn App Icon on main screen */}
      <div className="fixed top-100 left-190">
        <div 
          className="w-16 h-16 bg-[#0077B5] rounded-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 shadow-lg"
          onClick={openLinkedIn}
        >
          <img 
            src="/linkedin.svg" 
            alt="LinkedIn" 
            className="w-20 h-20"
          />
        </div>
        {/* App label */}
        <div className="text-center mt-1">
          <span className="text-white text-xs font-medium drop-shadow-md">LinkedIn</span>
        </div>
      </div>

      {/* LinkedIn Profile Modal */}
      <LinkedIn 
        isOpen={isLinkedInOpen} 
        onClose={closeLinkedIn} 
      />
    </>
  )
}