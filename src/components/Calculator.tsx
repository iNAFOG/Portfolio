'use client'
import { useState } from 'react'

interface CalculatorProps {
  isOpen: boolean
  onClose: () => void
}

export default function Calculator({ isOpen, onClose }: CalculatorProps) {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState<string | null>(null)
  const [operation, setOperation] = useState<string | null>(null)
  const [waitingForNewValue, setWaitingForNewValue] = useState(false)

  const inputNumber = (num: string) => {
    if (waitingForNewValue) {
      setDisplay(num)
      setWaitingForNewValue(false)
    } else {
      setDisplay(display === '0' ? num : display + num)
    }
  }

  const inputOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(display)
    } else if (operation) {
      const currentValue = previousValue || '0'
      const newValue = calculate(parseFloat(currentValue), inputValue, operation)
      
      setDisplay(String(newValue))
      setPreviousValue(String(newValue))
    }

    setWaitingForNewValue(true)
    setOperation(nextOperation)
  }

  const calculate = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
      case '+':
        return firstValue + secondValue
      case '-':
        return firstValue - secondValue
      case '×':
        return firstValue * secondValue
      case '÷':
        return firstValue / secondValue
      case '=':
        return secondValue
      default:
        return secondValue
    }
  }

  const performCalculation = () => {
    const inputValue = parseFloat(display)

    if (previousValue !== null && operation) {
      const newValue = calculate(parseFloat(previousValue), inputValue, operation)
      setDisplay(String(newValue))
      setPreviousValue(null)
      setOperation(null)
      setWaitingForNewValue(true)
    }
  }

  const clear = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForNewValue(false)
  }

  const clearEntry = () => {
    setDisplay('0')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl w-80">
        {/* Calculator Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-white text-lg font-semibold">Calculator</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white text-xl"
          >
            ×
          </button>
        </div>

        {/* Calculator Display */}
        <div className="bg-black rounded-lg p-4 mb-4">
          <div className="text-white text-right text-2xl font-mono overflow-hidden">
            {display}
          </div>
        </div>

        {/* Calculator Buttons */}
        <div className="grid grid-cols-4 gap-3">
          {/* Row 1 */}
          <button onClick={clear} className="calc-btn bg-gray-600 col-span-2">AC</button>
          <button onClick={clearEntry} className="calc-btn bg-gray-600">CE</button>
          <button onClick={() => inputOperation('÷')} className="calc-btn bg-orange-500">÷</button>

          {/* Row 2 */}
          <button onClick={() => inputNumber('7')} className="calc-btn bg-gray-700">7</button>
          <button onClick={() => inputNumber('8')} className="calc-btn bg-gray-700">8</button>
          <button onClick={() => inputNumber('9')} className="calc-btn bg-gray-700">9</button>
          <button onClick={() => inputOperation('×')} className="calc-btn bg-orange-500">×</button>

          {/* Row 3 */}
          <button onClick={() => inputNumber('4')} className="calc-btn bg-gray-700">4</button>
          <button onClick={() => inputNumber('5')} className="calc-btn bg-gray-700">5</button>
          <button onClick={() => inputNumber('6')} className="calc-btn bg-gray-700">6</button>
          <button onClick={() => inputOperation('-')} className="calc-btn bg-orange-500">-</button>

          {/* Row 4 */}
          <button onClick={() => inputNumber('1')} className="calc-btn bg-gray-700">1</button>
          <button onClick={() => inputNumber('2')} className="calc-btn bg-gray-700">2</button>
          <button onClick={() => inputNumber('3')} className="calc-btn bg-gray-700">3</button>
          <button onClick={() => inputOperation('+')} className="calc-btn bg-orange-500">+</button>

          {/* Row 5 */}
          <button onClick={() => inputNumber('0')} className="calc-btn bg-gray-700 col-span-2">0</button>
          <button onClick={() => inputNumber('.')} className="calc-btn bg-gray-700">.</button>
          <button onClick={performCalculation} className="calc-btn bg-orange-500">=</button>
        </div>
      </div>
    </div>
  )
}