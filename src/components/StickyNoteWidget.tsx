'use client'
import { useState } from 'react'

export default function StickyNoteWidget() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [hoveredPokemon, setHoveredPokemon] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const aboutText = `hi, i'm prasoon 👋 a pre-final year undergrad in engineering who spends way too much time writing debug code that sometimes works (eventually 😅). i vibe with music, games, and all things tech — from ai & coding to web dev experiments.

when i'm not writing broken code, i'm watching sports or esports and cheering like it's finals day.

oh and yeah, my fav pokémon crew is wooper, piplup, and oshawott.

welcome to my little corner of the internet!`

  const pokemonLinks = {
    wooper: '/wooper.gif',
    piplup: '/piplup.gif', 
    oshawott: '/oshawott.gif'
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  const handlePokemonClick = (e: React.MouseEvent, pokemonName: string) => {
    e.stopPropagation() // Prevent the sticky note from closing
    setHoveredPokemon(null) // Hide the hover preview immediately
    window.open(pokemonLinks[pokemonName as keyof typeof pokemonLinks], '_blank')
  }

  const handlePokemonMouseLeave = () => {
    setHoveredPokemon(null)
  }

  const renderTextWithLinks = (text: string) => {
    // Split by pokemon names and create clickable links
    const parts = text.split(/(wooper|piplup|oshawott)/gi)
    
    return parts.map((part, index) => {
      const lowerPart = part.toLowerCase()
      if (lowerPart === 'wooper' || lowerPart === 'piplup' || lowerPart === 'oshawott') {
        return (
          <span
            key={index}
            className="text-blue-600 underline cursor-pointer hover:text-blue-800 font-semibold"
            onMouseEnter={() => setHoveredPokemon(lowerPart)}
            onMouseLeave={handlePokemonMouseLeave}
            onMouseMove={handleMouseMove}
            onClick={(e) => handlePokemonClick(e, lowerPart)}
          >
            {part}
          </span>
        )
      }
      return part
    })
  }

  return (
    <>
      <div className="fixed top-20 right-20 z-40">
        <div 
          className={`
            ${isExpanded ? 'w-200 h-96' : 'w-64 h-48'}
            bg-yellow-100 
            rounded-lg 
            shadow-lg 
            border-l-4 
            border-blue-400
            transition-all 
            duration-300 
            cursor-pointer
            transform 
            rotate-1
            hover:rotate-0
            hover:shadow-xl
            relative
            overflow-hidden
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

          {/* Paper lines effect */}
          <div className="absolute inset-0 top-16 pointer-events-none overflow-hidden">
            {[...Array(isExpanded ? 15 : 8)].map((_, i) => (
              <div 
                key={i}
                className="absolute left-8 right-4 border-b border-blue-200/30"
                style={{ 
                  top: `${i * 24 + 12}px`,
                  maxWidth: 'calc(100% - 3rem)'
                }}
              />
            ))}
          </div>

          {/* Sticky Note Content */}
          <div className="p-4 h-full overflow-hidden relative z-10">
            <div className={`
              text-black 
              font-handwriting 
              leading-relaxed
              whitespace-pre-line
              ${isExpanded ? 'text-base' : 'text-sm'}
              transition-all 
              duration-300
            `}>
              {isExpanded ? (
                <div className="space-y-3">
                  {aboutText.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-2">
                      {renderTextWithLinks(paragraph)}
                    </p>
                  ))}
                </div>
              ) : (
                <div>
                  <p className="mb-2">hi, i'm prasoon 👋 a pre-final year undergrad...</p>
                  <p className="text-yellow-600 italic">Click to read more →</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Hover Image Preview */}
      {hoveredPokemon && (
        <div 
          className="fixed z-50 pointer-events-none"
          style={{
            left: mousePosition.x + 15,
            top: mousePosition.y - 60,
          }}
        >
          <div className="bg-white rounded-lg shadow-xl border-2 border-gray-200 p-2">
            <img 
              src={pokemonLinks[hoveredPokemon as keyof typeof pokemonLinks]}
              alt={hoveredPokemon}
              className="w-24 h-24 object-cover rounded"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/96x96?text=Pokemon'
              }}
            />
            <p className="text-center text-xs font-semibold text-gray-700 mt-1 capitalize">
              {hoveredPokemon}
            </p>
          </div>
        </div>
      )}
    </>
  )
}