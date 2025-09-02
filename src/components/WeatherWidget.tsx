'use client'
import { useState, useEffect } from 'react'
import Widget from './Widget'

const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API}&q=auto:ip`

function getWeatherEmoji(condition: string): string {
  const map: Record<string, string> = {
    Sunny: "☀️",
    Clear: "🌙",
    "Partly cloudy": "⛅",
    Cloudy: "☁️",
    Overcast: "☁️",
    Mist: "🌫️",
    Fog: "🌫️",
    "Patchy rain possible": "🌦️",
    "Light rain": "🌧️",
    "Moderate rain": "🌧️",
    "Heavy rain": "⛈️",
    Thunderstorm: "⛈️",
    Snow: "❄️",
    "Light snow": "🌨️",
    "Moderate snow": "🌨️",
    "Heavy snow": "❄️",
    Sleet: "🌨️",
    Hail: "🌨️",
    "Blowing snow": "🌬️❄️"
  }

  return map[condition] || "🌍"
}

// Function to get background color based on time
function getTimeBasedBackground(): string {
  const hour = new Date().getHours()
  
  if (hour >= 5 && hour < 8) {
    // Early morning (5-8 AM) - Sunrise colors
    return "bg-gradient-to-br from-orange-300/40 to-yellow-200/40"
  } else if (hour >= 8 && hour < 12) {
    // Morning (8-12 PM) - Bright morning
    return "bg-gradient-to-br from-blue-200/40 to-cyan-100/40"
  } else if (hour >= 12 && hour < 17) {
    // Afternoon (12-5 PM) - Sunny day
    return "bg-gradient-to-br from-yellow-200/40 to-orange-100/40"
  } else if (hour >= 17 && hour < 20) {
    // Evening (5-8 PM) - Sunset colors
    return "bg-gradient-to-br from-purple-300/40 to-pink-200/40"
  } else if (hour >= 20 && hour < 22) {
    // Night (8-10 PM) - Twilight
    return "bg-gradient-to-br from-indigo-400/40 to-purple-300/40"
  } else {
    // Late night/Early morning (10 PM - 5 AM) - Dark night
    return "bg-gradient-to-br from-slate-700/60 to-blue-900/60"
  }
}

interface WeatherData {
  city: string
  temperature: number
  condition: string
  emoji: string
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData>({
    city: 'Loading...',
    temperature: 0,
    condition: 'Loading...',
    emoji: '🌤️',
  })
  
  // State to track current time for background updates
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(url)
        
        if (!response.ok) {
          throw new Error('Weather API request failed')
        }
        
        const data = await response.json()
        
        setWeather({
          city: data.location.name,
          temperature: Math.round(data.current.temp_c),
          condition: data.current.condition.text,
          emoji: getWeatherEmoji(data.current.condition.text)
        })
        
      } catch (error) {
        console.error('Error fetching weather data:', error)
        setWeather({
          city: 'Cant Access',
          temperature: 22,
          condition: 'Cant Access',
          emoji: '❌'
        })
      }
    }

    fetchWeather()
  }, [])

  // Update time every minute to refresh background if needed
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed top-55 left-20">
      <div className={`
        w-40 h-40
        ${getTimeBasedBackground()}
        backdrop-blur-md 
        rounded-2xl 
        p-4 
        shadow-lg 
        border 
        border-white/30
      `}>
        <div className="text-left h-full flex flex-col justify-center">
          <div className="text-white text-sm font-medium mb-1 drop-shadow-md font-sans">
            {weather.city}
          </div>
          <div className="text-white font-sans text-4xl drop-shadow-md">
            {weather.temperature}°C
          </div>
          <div className="text-2xl mb-2">{weather.emoji}</div>
          <div className="text-white/90 text-base drop-shadow-md">{weather.condition}</div>
        </div>
      </div>
    </div>
  )
}