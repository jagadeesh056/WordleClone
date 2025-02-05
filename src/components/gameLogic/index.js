export function checkGuess(guess, secretWord) {
    const result = Array(5).fill("absent")
    const secretLetters = secretWord.split("")
  
    // First, check for correct letters
    for (let i = 0; i < 5; i++) {
      if (guess[i] === secretWord[i]) {
        result[i] = "correct"
        secretLetters[i] = ""
      }
    }
  
    // Then, check for present letters
    for (let i = 0; i < 5; i++) {
      if (result[i] === "correct") continue
      const index = secretLetters.indexOf(guess[i])
      if (index !== -1) {
        result[i] = "present"
        secretLetters[index] = ""
      }
    }
  
    return result
  }
  
  