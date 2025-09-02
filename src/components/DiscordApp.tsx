'use client'
import { useState } from 'react'
import Discord from './Discord'

export default function DiscordApp() {
  const [isDiscordOpen, setIsDiscordOpen] = useState(false)

  const openDiscord = () => {
    setIsDiscordOpen(true)
  }

  const closeDiscord = () => {
    setIsDiscordOpen(false)
  }

  return (
    <>
      {/* Discord App Icon on main screen */}
      <div className="fixed top-100 left-150 ">
        <div 
          className="w-16 h-16 bg-white rounded-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 shadow-lg"
          onClick={openDiscord}
        >
          <img 
            src="/discord.svg" 
            alt="Discord" 
            className="w-16 h-16"
          />
        </div>
        {/* App label */}
        <div className="text-center mt-1">
          <span className="text-white text-xs font-medium drop-shadow-md">Discord</span>
        </div>
      </div>

      {/* Discord Profile Modal */}
      <Discord 
        isOpen={isDiscordOpen} 
        onClose={closeDiscord} 
      />
    </>
  )
}