'use client'
import { useState, useEffect } from 'react'

export default function TimeWidget() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="fixed top-20 left-20">
      <div className="bg-inherit">
        <div className="text-white text-left">
          <div className="text-[40px] font-mono font-[400]">
            {formatTime(time)}
          </div>
          <div className="text-[25px] font-sans text-black mt-1 font-[400]">
            {formatDate(time)}
          </div>
        </div>
      </div>
    </div>
  )
}