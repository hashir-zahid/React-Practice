import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [date, setDate] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [dateCal, setDateCal] = useState("")
  const [monthCal, setMonthCal] = useState("")
  const [yearCal, setYearCal] = useState("")
  const [age, setAge] = useState(false)

  useEffect(() => {
    setAge(false)
  }, [date, month, year])

  const calculate = () => {
    let obj = new Date(Date.now())
    let y = obj.getFullYear()
    let m = obj.getMonth()
    let d = obj.getDate()

    let cy = parseInt(y) - year
    let cm = parseInt(m) - month
    let cd
    let h
    if (m === 2) {
      h = 28 - parseInt(date)
      cd = h + parseInt(d)
      if (cd > 30) {
        cm += 1
        cd = cd - 30
      }
    }

    else if (m % 2 === 1) {
      h = 31 - parseInt(date)
      cd = h + parseInt(d)
      if (cd > 30) {
        cm += 1
        cd = cd - 30
      }
    }

    else {
      h = 30 - parseInt(date)
      cd = h + parseInt(d)
      if (cd > 30) {
        cm += 1
        cd = cd - 30
      }
    }

    setYearCal(cy)
    setMonthCal(cm)
    setDateCal(cd)

    setAge(true)

  }

  return (
    <div className="container">
      <label htmlFor="date">
        Date:
        <input id='date' type="number" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>

      <label htmlFor="month">
        Month:
        <input id='month' type="number" value={month} onChange={(e) => setMonth(e.target.value)} />
      </label>


      <label htmlFor="year">
        Year:
        <input id='year' type="number" value={year} onChange={(e) => setYear(e.target.value)} />
      </label>

      <button onClick={calculate} disabled={age}>Calculate</button>

      {age && <p>your age is {yearCal} years {monthCal} months and {dateCal} days</p>}
    </div>
  )
}

export default App
