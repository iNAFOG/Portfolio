'use client'
import { useState } from 'react'
import TicTacToe from './TicTacToe.tsx'

export default function TicTacToeApp() {
  const [isGameOpen, setIsGameOpen] = useState(false)

  const openGame = () => {
    setIsGameOpen(true)
  }

  const closeGame = () => {
    setIsGameOpen(false)
  }

  return (
    <>
      {/* Tic Tac Toe App Icon on main screen */}
      <div className="fixed top-80 left-40 z-40">
        <div 
          className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 shadow-lg"
          onClick={openGame}
        >
          <img 
            src="/tictactoe.svg" 
            alt="Tic Tac Toe" 
            className="w-10 h-10"
          />
        </div>
        {/* App label */}
        <div className="text-center mt-1">
          <span className="text-white text-xs font-medium drop-shadow-md">Tic Tac Toe</span>
        </div>
      </div>

      {/* Tic Tac Toe Game Modal */}
      <TicTacToe 
        isOpen={isGameOpen} 
        onClose={closeGame} 
      />
    </>
  )
}