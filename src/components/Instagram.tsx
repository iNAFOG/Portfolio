'use client'
import { useState } from 'react'

interface InstagramProps {
  isOpen: boolean
  onClose: () => void
}

export default function Instagram({ isOpen, onClose }: InstagramProps) {
  // Your Instagram username (replace with your actual username)
  const instagramUsername = "inafog.exe"
  const instagramUrl = "https://instagram.com/inafog.exe" // Replace with your actual URL

  const copyUsername = () => {
    navigator.clipboard.writeText(`@${instagramUsername}`)
    alert('Instagram username copied to clipboard!')
  }

  const openInstagram = () => {
    window.open(instagramUrl, '_blank')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl p-6 shadow-2xl w-96 text-white">
        {/* Instagram Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <img 
              src="/instagram.svg" 
              alt="Instagram" 
              className="w-6 h-6"
            />
            <h3 className="text-white text-lg font-bold">Instagram Profile</h3>
          </div>
          <button 
            onClick={onClose}
            className="text-white/70 hover:text-white text-xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Profile Section */}
        <div className="text-center mb-6">
          <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center overflow-hidden border-2 border-white/30">
            <img 
              src="/oshawott.gif" 
              alt="Profile Picture" 
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                // Fallback to letter if GIF fails to load
                (e.target as HTMLImageElement).style.display = 'none'
                const fallback = document.createElement('span')
                fallback.textContent = instagramUsername.charAt(0).toUpperCase()
                fallback.className = 'text-2xl font-bold text-white'
                e.target.parentNode?.appendChild(fallback)
              }}
            />
          </div>
          
          <h2 className="text-xl font-bold text-white mb-1">
            @{instagramUsername}
          </h2>
          
          <p className="text-white/80 text-sm">
            Follow me on Instagram
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={openInstagram}
            className="w-full bg-white text-purple-600 py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 hover:bg-white/90"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.197-1.559l1.559-1.297c.459.551 1.143.908 1.918.908c1.377 0 2.499-1.122 2.499-2.499s-1.122-2.499-2.499-2.499c-.775 0-1.459.357-1.918.908L4.252 9.753c.749-.948 1.9-1.559 3.197-1.559c2.295 0 4.158 1.863 4.158 4.158S10.744 16.51 8.449 16.51z"/>
            </svg>
            <span>Open Instagram</span>
          </button>

          <button
            onClick={copyUsername}
            className="w-full bg-white/10 hover:bg-white/20 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 border border-white/30"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
            </svg>
            <span>Copy Username</span>
          </button>
        </div>

        {/* Info Section */}
        <div className="mt-6 p-4 bg-white/10 rounded-lg border border-white/20">
          <h4 className="text-sm font-semibold text-white mb-2">Follow for:</h4>
          <ul className="text-xs text-white/80 space-y-1">
            <li>• Coding journey & projects</li>
            <li>• Tech insights & tips</li>
            <li>• Behind-the-scenes content</li>
            <li>• Pokemon & gaming moments</li>
          </ul>
        </div>

        {/* Status */}
        <div className="mt-4 flex items-center justify-center space-x-2">
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          <span className="text-xs text-white/70">Active on Instagram</span>
        </div>
      </div>
    </div>
  )
}