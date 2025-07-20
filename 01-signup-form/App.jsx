import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [sign, setSign] = useState('Sign up')

  const handleSignin = () => {
    setSign('Sign in')
  }
  const handleSignup = () => {
    setSign('Sign up')
  }

  return (
    <>
      <div className="container">
        <h1>{sign}</h1>

        {sign === 'Sign up' && (
          <input type="text" placeholder="Enter Username" className="input-field" />
        )}

        <input type="text" placeholder="Enter Email" className="input-field" />
        <input type="text" placeholder="Enter Password" className="input-field" />

        {sign === 'Sign up' ? (
          <p>
            Have an account? <button onClick={handleSignin} className="link-button">Sign in</button>
          </p>
        ) : (
          <p>
            Already have an account? <button onClick={handleSignup} className="link-button">Sign up</button>
          </p>
        )}

        <button className="main-button">{sign}</button>
      </div>
    </>
  )
}

export default App
