import { checkGuess } from "../gameLogic"
import "./index.css"

function GameBoard({ guesses, currentGuess, secretWord }) {
  const rows = Array(6).fill(null)

  return (
    <div className="game-board">
      {rows.map((_, rowIndex) => (
        <div key={rowIndex} className="row">
          {Array(5)
            .fill(null)
            .map((_, colIndex) => {
              const letter =
                guesses[rowIndex]?.[colIndex] || (rowIndex === guesses.length ? currentGuess[colIndex] : "")
              const status = guesses[rowIndex] ? checkGuess(guesses[rowIndex], secretWord)[colIndex] : ""

              return (
                <div key={colIndex} className={`cell ${status}`}>
                  {letter}
                </div>
              )
            })}
        </div>
      ))}
    </div>
  )
}

export default GameBoard

