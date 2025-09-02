'use client'
import { useState } from 'react'
import Calculator from './Calculator'

export default function CalculatorApp() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false)

  const openCalculator = () => {
    setIsCalculatorOpen(true)
  }

  const closeCalculator = () => {
    setIsCalculatorOpen(false)
  }

  return (
    <>
      {/* Calculator App Icon on main screen */}
      <div className="fixed top-50 left-150">
        <div 
          className="w-16 h-16 bg-black rounded-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 shadow-lg"
          onClick={openCalculator}
        >
          <img 
            src="/calculator.svg" 
            alt="Calculator" 
            className="w-14 h-14"
          />
        </div>
        {/* App label */}
        <div className="text-center mt-1">
          <span className="text-white text-xs font-medium drop-shadow-md">Calculator</span>
        </div>
      </div>

      {/* Calculator Modal */}
      <Calculator 
        isOpen={isCalculatorOpen} 
        onClose={closeCalculator} 
      />
    </>
  )
}