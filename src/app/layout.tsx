import type { Metadata } from 'next'
import './globals.css'
import TimeWidget from '@/components/TimeWidget'
import WeatherWidget from '@/components/WeatherWidget'
import StatsWidget from '@/components/EventWidget'
import StickyNoteWidget from '@/components/StickyNoteWidget'

export const metadata: Metadata = {
  title: 'Portfolio - iPad Edition',
  description: 'A modern portfolio website with iPad-inspired design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
          {children}
          
          {/* Widgets */}
          <TimeWidget />
          <WeatherWidget />
          <StatsWidget />
          <StickyNoteWidget />
          
          {/* iPad-style Dock */}
          <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50">
            {/* Dock Container */}
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-white/30">
              {/* App Icons Container */}
              <div className="flex space-x-4">
                
                {/* Home/Portfolio Icon with Spotify SVG */}
                <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 overflow-hidden">
                  <img 
                    src="/spotify.svg" 
                    alt="Spotify" 
                    className="w-11 h-11"
                  />
                </div>

                {/* Projects Icon */}
                <div className="w-14 h-14 bg-inherit rounded-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 overflow-hidden">
                  <img 
                    src="/aboutme.svg" 
                    alt="About Me" 
                    className="w-12 h-12"
                  />
                </div>

                {/* About Icon */}
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 overflow-hidden">
                  <img 
                    src="/project.svg" 
                    alt="Projects" 
                    className="w-12 h-12"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}

/* Add this to your existing globals.css */


