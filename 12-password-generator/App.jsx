import { useState } from 'react'
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

  const handleCopy = () => {
    navigator.clipboard.writeText(password);

    const toast = document.getElementsByClassName("toast");
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  };


  return (
    <div className='container'>
      <div className='toast'>Password is copied!</div>
      <div className="input">
        <input type="text" className='inp' maxLength="20" value={password} disabled />
        <button className='btn' onClick={handleCopy}>Copy</button>
      </div>

      <input
        type="range"
        min="8"
        max="20"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />
      <label>{size}</label>
      <br />

      <input type="checkbox"
        checked={isNumber}
        onChange={() => setIsNumber(!isNumber)}
      />
      <label htmlFor="">Numbers</label>
      <br />

      <input type="checkbox"
        checked={isSpecial}
        onChange={() => setIsSpecial(!isSpecial)}
      />
      <label htmlFor="">Special Characters</label>
      <br />

      <button onClick={handleGenerate}>Generate</button>
    </div>
  )
}

export default App
