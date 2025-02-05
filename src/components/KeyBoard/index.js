import "./index.css"

const KEYS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"],
]

function Keyboard({ onKeyPress }) {
  return (
    <div className="keyboard">
      {KEYS.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((key) => (
            <button key={key} onClick={() => onKeyPress(key)} className={`key ${key.length > 1 ? "wide-key" : ""}`}>
              {key === "BACKSPACE" ? "←" : key}
            </button>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Keyboard

