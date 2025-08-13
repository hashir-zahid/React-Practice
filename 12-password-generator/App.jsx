import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState("")

  const handleGenerate = () => {


  }

  return (
    <div className='container'>
      <div className="input">
        <input type="text" className='inp' maxlength="20"/>
        <button className='btn'>Copy</button>
      </div>

      <input type="range" min="8" max="20" /><br />

      <input type="checkbox" />
      <label htmlFor="">Numbers</label><br />

      <input type="checkbox" />
      <label htmlFor="">Special Characters</label><br />

      <button onClick={handleGenerate}>Generate</button>
    </div>
  )
}

export default App
