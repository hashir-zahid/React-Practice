import { useState } from 'react'
import { useCurrency } from './useCurrency'
import './App.css'

function App() {
  const [currency, setCurrency] = useState("usd");
  const { data, loading } = useCurrency(currency);

  return (
    <>
      <h1>currency converter</h1>
      <input
        type="text"
        value={currency}
        onChange={(e) => setCurrency(e.target.value.toLowerCase())}
      />

      {loading ? <p>Loading...</p> : <li>PKR: {data?.pkr}</li>}
    </>
  )
}

export default App
