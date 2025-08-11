import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [date, setDate] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [calculatedDate, setCalculatedDate] = useState("")
  const [calculatedMonth, setCalculatedMonth] = useState("")
  const [calculatedYear, setCalculatedYear] = useState("")
  const [isCalculated, setIsCalculated] = useState(false)

  let obj = new Date(Date.now())
  let getFullYear = obj.getFullYear()
  let getMonth = obj.getMonth()
  let getDate = obj.getDate()

  useEffect(() => {
    setIsCalculated(false)
  }, [date, month, year])

  const handleDate = (value) => {
    const num = Number(value)

    if (month === 2) {
      if (num > 0 && num <= 28) setDate(num)
    }
    else if (month % 2 === 1) {
      if (num > 0 && num <= 31) setDate(num)
    }
    else {
      if (num > 0 && num <= 30) setDate(num)
    }
  }

  const calculate = () => {

    let calculateYears = parseInt(getFullYear) - year
    let calculateMonths = parseInt(getMonth) - month
    let calculateDays
    let temp
    if (getMonth === 2) {
      temp = 28 - parseInt(date)
      calculateDays = temp + parseInt(getDate)
      if (calculateDays > 30) {
        calculateMonths += temp
        calculateDays = calculateDays - 30
      }
    }

    else if (getMonth % 2 === 1) {
      temp = 31 - parseInt(date)
      calculateDays = temp + parseInt(getDate)
      if (calculateDays > 30) {
        calculateMonths += 1
        calculateDays = calculateDays - 30
      }
    }

    else {
      temp = 30 - parseInt(date)
      calculateDays = temp + parseInt(getDate)
      if (calculateDays > 30) {
        calculateMonths += 1
        calculateMonths = calculateDays - 30
      }
    }

    setCalculatedYear(calculateYears)
    setCalculatedMonth(calculateMonths)
    setCalculatedDate(calculateDays)

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
          onChange={(e) => (
            (e.target.value <= getFullYear) && setYear(e.target.value))} />
      </label>

      <label htmlFor="month">
        Month:
        <input
          id="month"
          type="number"
          value={month}
          onChange={(e) => (
            (e.target.value <= 12) && setMonth(e.target.value))}/>
      </label>

      <label htmlFor="date">
        Date:
        <input
          id="date"
          type="number"
          value={date}
          onChange={(e) => handleDate(e.target.value)}
        />
      </label>

      <button onClick={calculate} disabled={isCalculated}>Calculate</button>

      {isCalculated && <p>your age is {calculatedYear} years {calculatedMonth} months and {calculatedDate} days</p>}
    </div>
  )
}

export default App
