import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState("")
  const [size, setSize] = useState(8)
  const [isNumber, setIsNumber] = useState(false)
  const [isSpecial, setIsSpecial] = useState(false)

  const handleGenerate = () => {
    let pass = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let specialCharacters = "!@#$%^&*?~"
    let numbers = "1234567890"

    for (let i = 0; i < size; i++) {
      if (isNumber && isSpecial) {
        characters = characters + numbers + specialCharacters
        let randomIndex = Math.floor(Math.random() * characters.length);
        pass += characters[randomIndex];
      }
      else if (isSpecial) {
        characters = characters + specialCharacters
        let randomIndex = Math.floor(Math.random() * characters.length);
        pass += characters[randomIndex];
      }
      else if (isNumber) {
        characters = characters + numbers
        let randomIndex = Math.floor(Math.random() * characters.length);
        pass += characters[randomIndex];
      }
      else {
        let randomIndex = Math.floor(Math.random() * characters.length);
        pass += characters[randomIndex];
      }
    }

    setPassword(pass)
  }

  const handleCopy = (e) => {
    navigator.clipboard.writeText(password);


    const btn = e.target
    btn.innerText = "Copied!"

    setTimeout(() => {
      btn.innerText = "Copy"
    }, 2000);
  };


  return (
    <div className="container">
      <h2>Password Generator</h2>
      <div className="input">
        <input type="text" className="inp" maxLength="20" value={password} disabled />
        <button className="btn" onClick={(e) => handleCopy(e)}>Copy</button>
      </div>

      <div className="range-container">
        <input
          type="range"
          min="8"
          max="20"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        <label>{size}</label>
      </div>

      <div className="options">
        <label>
          <input
            type="checkbox"
            checked={isNumber}
            onChange={() => setIsNumber(!isNumber)}
          />
          Numbers
        </label>

        <label>
          <input
            type="checkbox"
            checked={isSpecial}
            onChange={() => setIsSpecial(!isSpecial)}
          />
          Special Characters
        </label>
      </div>

      <button className="generate-btn" onClick={handleGenerate}>Generate</button>
    </div>
  )
}

export default App
