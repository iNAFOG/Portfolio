'use client'
import { useState } from 'react'

export default function StickyNoteWidget() {
  const [isExpanded, setIsExpanded] = useState(false)

  const aboutText = `Hi! I'm a passionate developer who loves creating beautiful and functional web experiences. 

I specialize in React, Next.js, and modern web technologies. When I'm not coding, you can find me exploring new design trends or working on creative projects.

I believe in clean code, great user experiences, and continuous learning. Let's build something amazing together!`

  return (
    <div className="fixed top-20 right-20 z-40">
      <div 
        className={`
          ${isExpanded ? 'w-200 h-90' : 'w-64 h-48'}
          bg-yellow-100 
          rounded-lg 
          shadow-lg 
          border-l-4 
          border-yellow-400
          transition-all 
          duration-300 
          cursor-pointer
          transform 
          rotate-1
          hover:rotate-0
          hover:shadow-xl
        `}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Sticky Note Header */}
        <div className="bg-blue-200 rounded-t-lg p-3 border-b border-yellow-300">
          <div className="flex items-center justify-between">
            <h3 className="text-yellow-800 font-handwriting font-semibold text-lg">
              About Me
            </h3>
            <div className="w-4 h-4 bg-red-400 rounded-full shadow-sm"></div>
          </div>
        </div>

        {/* Sticky Note Content */}
        <div className="p-4 h-full overflow-hidden">
          <div className={`
            text-black 
            font-handwriting 
            leading-relaxed
            ${isExpanded ? 'text-base' : 'text-sm'}
            transition-all 
            duration-300
          `}>
            {isExpanded ? (
              <div className="space-y-3">
                {aboutText.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-2">
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : (
              <div>
                <p className="mb-2">Hi! I'm a passionate developer...</p>
                <p className="text-yellow-600 italic">Click to read more →</p>
              </div>
            )}
          </div>
        </div>

        {/* Paper lines effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(isExpanded ? 15 : 10)].map((_, i) => (
            <div 
              key={i}
              className="absolute left-8 right-4 border-b border-blue-200/30"
              style={{ top: `${80 + i * 24}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}