# Wordle Clone

A simple Wordle game clone built with React. This project allows users to guess a 5-letter word within 6 attempts, following the rules of the popular Wordle game.

## Features

- Interactive game board
- On-screen keyboard
- Real-time feedback on guesses
- Displays win/loss messages
- Option to start a new game

## Demo

Include a live link here if deployed, e.g., [Live Demo](https://your-deployment-link.com)

## Project Structure

```
wordle-clone/
├── public/
├── src/
│   ├── components/
│   │   ├── GameBoard/
│   │   │   ├── index.js
│   │   │   └── index.css
│   │   ├── KeyBoard/
│   │   │   ├── index.js
│   │   │   └── index.css
│   │   ├── Message/
│   │   │   ├── index.js
│   │   │   └── index.css
│   │   └── gameLogic/
│   │       ├── index.js
│   ├── App.js
│   ├── App.css
│   └── index.css
├── package.json
└── README.md
```

##  Installation & Running the Project

1. **Clone the Repository**

```bash
https://github.com/your-username/wordle-clone.git
cd wordle-clone
```

2. **Install Dependencies**

```bash
npm install
```

3. **Run the Project**

```bash
npm start
```

## How to Play

- Guess the 5-letter word within 6 attempts.
- Type your guess using the on-screen keyboard.
- Press **ENTER** to submit your guess.
- Use **BACKSPACE** to delete the last letter.
- The cells will change color to indicate:
  - **Green**: Correct letter in the correct position.
  - **Yellow**: Correct letter in the wrong position.
  - **Gray**: Incorrect letter.

## Game Logic

- **Words:** The game selects a random word from the list: `REACT`, `REDUX`, `HOOKS`, `STATE`, `PROPS`.
- **Guess Check:** The `checkGuess` function evaluates the guess for correctness.
- **Win Condition:** Guessing the word correctly.
- **Lose Condition:** Using all 6 attempts without guessing the word.

## Technologies Used

- React
- JavaScript
- CSS

## Future Improvements

- Add a larger word bank
- Add animations and sound effects
---

