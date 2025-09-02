'use client'
import { useState } from 'react'

interface TicTacToeProps {
  isOpen: boolean
  onClose: () => void
}

type Player = 'X' | 'O' | null

export default function TicTacToe({ isOpen, onClose }: TicTacToeProps) {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X')
  const [winner, setWinner] = useState<Player | 'draw' | null>(null)

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ]

  const checkWinner = (newBoard: Player[]): Player | 'draw' | null => {
    // Check for winner
    for (const combination of winningCombinations) {
      const [a, b, c] = combination
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a]
      }
    }
    
    // Check for draw
    if (newBoard.every(cell => cell !== null)) {
      return 'draw'
    }
    
    return null
  }

  const handleCellClick = (index: number) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = currentPlayer
    setBoard(newBoard)

    const gameResult = checkWinner(newBoard)
    if (gameResult) {
      setWinner(gameResult)
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setCurrentPlayer('X')
    setWinner(null)
  }

  const getStatusMessage = () => {
    if (winner === 'draw') return "It's a Draw! 🤝"
    if (winner) return `🎉 Player ${winner} Wins!`
    return `Player ${currentPlayer}'s Turn`
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 shadow-2xl w-96">
        {/* Game Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <img 
              src="/tictactoe.svg" 
              alt="Tic Tac Toe" 
              className="w-6 h-6"
            />
            <h3 className="text-gray-800 text-lg font-bold">Tic Tac Toe</h3>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Game Status */}
        <div className="text-center mb-6">
          <p className={`text-lg font-semibold ${
            winner === 'draw' ? 'text-yellow-600' : 
            winner ? 'text-green-600' : 'text-blue-600'
          }`}>
            {getStatusMessage()}
          </p>
        </div>

        {/* Game Board */}
        <div className="grid grid-cols-3 gap-2 mb-6 bg-gray-200 p-2 rounded-lg">
          {board.map((cell, index) => (
            <button
              key={index}
              onClick={() => handleCellClick(index)}
              className={`
                w-20 h-20 bg-white rounded-lg shadow-md
                flex items-center justify-center text-3xl font-bold
                transition-all duration-200
                ${!cell && !winner ? 'hover:bg-gray-50 hover:shadow-lg cursor-pointer' : 'cursor-default'}
                ${cell === 'X' ? 'text-blue-600' : 'text-red-600'}
              `}
              disabled={!!cell || !!winner}
            >
              {cell}
            </button>
          ))}
        </div>

        {/* Game Controls */}
        <div className="flex space-x-3">
          <button
            onClick={resetGame}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200"
          >
            New Game
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200"
          >
            Close
          </button>
        </div>

        {/* Game Info */}
        <div className="mt-4 text-center text-sm text-gray-500">
          <p>Player X: Blue • Player O: Red</p>
        </div>
      </div>
    </div>
  )
}