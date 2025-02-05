import { useState, useEffect } from "react"
import GameBoard from "./components/GameBoard"
import Keyboard from "./components/KeyBoard"
import Message from "./components/Message"
import "./App.css"

const WORD_LENGTH = 5
const MAX_ATTEMPTS = 6
const WORDS = ["REACT", "REDUX", "HOOKS", "STATE", "PROPS"]

function App() {
  const [secretWord, setSecretWord] = useState("")
  const [guesses, setGuesses] = useState([])
  const [currentGuess, setCurrentGuess] = useState("")
  const [gameStatus, setGameStatus] = useState("playing")
  const [remainingAttempts, setRemainingAttempts] = useState(MAX_ATTEMPTS)

  useEffect(() => {
    newGame()
  }, [])

  const newGame = () => {
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)]
    setSecretWord(randomWord)
    setGuesses([])
    setCurrentGuess("")
    setGameStatus("playing")
    setRemainingAttempts(MAX_ATTEMPTS)
  }

  const onKeyPress = (key) => {
    if (gameStatus !== "playing") return

    if (key === "ENTER") {
      if (currentGuess.length !== WORD_LENGTH) return
      if (!WORDS.includes(currentGuess)) return

      const newGuesses = [...guesses, currentGuess]
      setGuesses(newGuesses)
      setCurrentGuess("")
      setRemainingAttempts(remainingAttempts - 1)

      if (currentGuess === secretWord) {
        setGameStatus("won")
      } else if (remainingAttempts === 1) {
        setGameStatus("lost")
      }
    } else if (key === "BACKSPACE") {
      setCurrentGuess(currentGuess.slice(0, -1))
    } else if (currentGuess.length < WORD_LENGTH) {
      setCurrentGuess(currentGuess + key)
    }
  }

  return (
    <div className="app">
      <h1>Wordle Clone</h1>
      <div className="attempts-display">Attempts remaining: {remainingAttempts}</div>
      <GameBoard guesses={guesses} currentGuess={currentGuess} secretWord={secretWord} />
      <Keyboard onKeyPress={onKeyPress} />
      <Message gameStatus={gameStatus} secretWord={secretWord} />
      <button onClick={newGame} className="new-game-button">
        New Game
      </button>
    </div>
  )
}

export default App

