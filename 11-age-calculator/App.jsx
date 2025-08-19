import { useState } from 'react'
import './App.css'

function App() {
  const [date, setDate] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [calculatedDate, setCalculatedDate] = useState("")
  const [calculatedMonth, setCalculatedMonth] = useState("")
  const [calculatedYear, setCalculatedYear] = useState("")
  const [isCalculated, setIsCalculated] = useState(false)

  let today = new Date()
  let currentDay = today.getDate()
  let currentMonth = today.getMonth() + 1
  let currentYear = today.getFullYear()

  const isLeapYear = (y) => (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0)

  const daysInMonth = (m, y) => {
    if (m === 2) return isLeapYear(y) ? 29 : 28
    if ([4, 6, 9, 11].includes(m)) return 30
    return 31
  }

  const handleMonthChange = (value) => {
    const m = parseInt(value)
    if (m >= 1 && m <= 12) {
      setMonth(m)
      if (date && parseInt(date) > daysInMonth(m, year || currentYear)) {
        setDate("")
      }
    } else {
      setMonth("")
    }
  }

  const handleDateChange = (value) => {
    const d = parseInt(value)
    const m = parseInt(month)
    const y = parseInt(year) || currentYear

    if (!m) {
      setDate(value) 
      return
    }

    const maxDays = daysInMonth(m, y)
    if (d >= 1 && d <= maxDays) {
      setDate(d)
    } else {
      setDate("")
    }
  }

  const calculate = () => {
    let d = parseInt(date)
    let m = parseInt(month)
    let y = parseInt(year)

    if (!d || !m || !y) return

    let cDay = currentDay
    let cMonth = currentMonth
    let cYear = currentYear

    if (d > cDay) {
      cDay += daysInMonth(cMonth - 1, cYear)
      cMonth -= 1
    }

    if (m > cMonth) {
      cMonth += 12
      cYear -= 1
    }

    let calcDay = cDay - d
    let calcMonth = cMonth - m
    let calcYear = cYear - y

    setCalculatedDate(calcDay)
    setCalculatedMonth(calcMonth)
    setCalculatedYear(calcYear)
    setIsCalculated(true)
  }

  return (
    <div className="container">

      <label htmlFor="year">
        Year:
        <input
          id='year'
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </label>

      <label htmlFor="month">
        Month:
        <input
          id="month"
          type="number"
          value={month}
          onChange={(e) => handleMonthChange(e.target.value)}
        />
      </label>

      <label htmlFor="date">
        Date:
        <input
          id="date"
          type="number"
          value={date}
          onChange={(e) => handleDateChange(e.target.value)}
        />
      </label>

      <button onClick={calculate}>Calculate</button>

      {isCalculated && (
        <p>
          Your age is {calculatedYear} years {calculatedMonth} months and {calculatedDate} days
        </p>
      )}
    </div>
  )
}

export default App
