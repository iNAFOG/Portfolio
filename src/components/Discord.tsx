'use client'
import { useState } from 'react'

interface DiscordProps {
  isOpen: boolean
  onClose: () => void
}

export default function Discord({ isOpen, onClose }: DiscordProps) {
  // Your Discord username
  const discordUsername = "inafog"

  const copyUsername = () => {
    navigator.clipboard.writeText(discordUsername)
    alert('Username copied to clipboard! You can now add me on Discord.')
  }

  const openDiscordApp = () => {
    // Try to open Discord app, fallback to web
    window.open(`https://discord.com/users/@${discordUsername}`, '_blank')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#36393f] rounded-2xl p-6 shadow-2xl w-96 text-white">
        {/* Discord Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <img 
              src="/discord.svg" 
              alt="Discord" 
              className="w-6 h-6"
            />
            <h3 className="text-white text-lg font-bold">Discord Profile</h3>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white text-xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Profile Section */}
        <div className="text-center mb-6">
          <div className="w-20 h-20 mx-auto mb-4 bg-[#5865F2] rounded-full flex items-center justify-center overflow-hidden">
            <img 
              src="/oshawott.gif" 
              alt="Oshawott Profile" 
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                // Fallback to letter if GIF fails to load
                (e.target as HTMLImageElement).style.display = 'none'
                const fallback = document.createElement('span')
                fallback.textContent = discordUsername.charAt(0).toUpperCase()
                fallback.className = 'text-2xl font-bold text-white'
                e.target.parentNode?.appendChild(fallback)
              }}
            />
          </div>
          
          <h2 className="text-xl font-bold text-white mb-1">
            {discordUsername}
          </h2>
          
          <p className="text-gray-400 text-sm">
            Click to add as friend on Discord
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={copyUsername}
            className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
            </svg>
            <span>Copy Username</span>
          </button>

          <button
            onClick={openDiscordApp}
            className="w-full bg-[#2f3136] hover:bg-[#40444b] text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>Open Discord Profile</span>
          </button>
        </div>

        {/* How to Add Friend */}
        <div className="mt-6 p-4 bg-[#2f3136] rounded-lg">
          <h4 className="text-sm font-semibold text-white mb-2">How to add me:</h4>
          <ol className="text-xs text-gray-300 space-y-1">
            <li>1. Copy my username above</li>
            <li>2. Open Discord app/website</li>
            <li>3. Go to "Add Friend" section</li>
            <li>4. Paste username and send request</li>
          </ol>
        </div>

        {/* Status */}
        <div className="mt-4 flex items-center justify-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-xs text-gray-400">Usually online</span>
        </div>
      </div>
    </div>
  )
}