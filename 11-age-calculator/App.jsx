import { useState } from 'react'
import './App.css'

function App() {
  const [date, setDate] = useState()
  const [month, setMonth] = useState()
  const [year, setYear] = useState()
  const [age, setAge] = useState(false)

  const calculate = () => {
    let obj = new Date(Date.now())
    let y = obj.getFullYear()
    let m = obj.getMonth()
    let d = obj.getDate()

    let cy = y - year
    let cm = m - month
    let cd = d - date

    setYear(cy)
    setMonth(cm)
    setDate(cd)

    setAge(true)
    
  }

  return (
    <div className="container">
      <input type="number" value={date} onChange={(e) => setDate(e.target.value)} />

      <input type="number" value={month} onChange={(e) => setMonth(e.target.value)} />

      <input type="number" value={year} onChange={(e) => setYear(e.target.value)} />

      <button onClick={calculate}>Calculate</button>

      {age && <p>your age is {year} years {month} months and {date} days</p>}
    </div>
  )
}

export default App
