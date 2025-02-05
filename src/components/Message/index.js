import "./index.css"

function Message({ gameStatus, secretWord }) {
  if (gameStatus === "playing") return null

  return (
    <div className={`message ${gameStatus}`}>
      {gameStatus === "won" ? (
        <p>Congratulations! You guessed the word!</p>
      ) : (
        <p>Game Over! The word was: {secretWord}</p>
      )}
    </div>
  )
}

export default Message

