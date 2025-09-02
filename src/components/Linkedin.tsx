'use client'
import { useState } from 'react'

interface LinkedInProps {
  isOpen: boolean
  onClose: () => void
}

export default function LinkedIn({ isOpen, onClose }: LinkedInProps) {
  // Your LinkedIn username (replace with your actual username)
  const linkedinUsername = "inafxg"
  const linkedinUrl = "https://linkedin.com/in/inafxg" // Replace with your actual URL

  const copyUsername = () => {
    navigator.clipboard.writeText(linkedinUsername)
    alert('LinkedIn username copied to clipboard!')
  }

  const openLinkedIn = () => {
    window.open(linkedinUrl, '_blank')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#0077B5] rounded-2xl p-6 shadow-2xl w-96 text-white">
        {/* LinkedIn Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <img 
              src="/linkedin.svg" 
              alt="LinkedIn" 
              className="w-6 h-6"
            />
            <h3 className="text-white text-lg font-bold">LinkedIn Profile</h3>
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
                fallback.textContent = linkedinUsername.charAt(0).toUpperCase()
                fallback.className = 'text-2xl font-bold text-white'
                e.target.parentNode?.appendChild(fallback)
              }}
            />
          </div>
          
          <h2 className="text-xl font-bold text-white mb-1">
            {linkedinUsername}
          </h2>
          
          <p className="text-white/80 text-sm">
            Engineering Student | Developer
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={openLinkedIn}
            className="w-full bg-white text-[#0077B5] py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 hover:bg-white/90"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>View LinkedIn Profile</span>
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
          <h4 className="text-sm font-semibold text-white mb-2">Connect for:</h4>
          <ul className="text-xs text-white/80 space-y-1">
            <li>• Professional networking</li>
            <li>• Project collaborations</li>
            <li>• Career opportunities</li>
            <li>• Tech industry insights</li>
          </ul>
        </div>

        {/* Status */}
        <div className="mt-4 flex items-center justify-center space-x-2">
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          <span className="text-xs text-white/70">Open to opportunities</span>
        </div>
      </div>
    </div>
  )
}