import { useState } from 'react'
import { useCurrency } from './useCurrency'
import InputBox from './InputBox'
import './App.css'

function App() {
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("pkr")
  const [amount, setAmount] = useState()
  const [convertedAmount, setConvertedAmount] = useState()

  const currencyInfo = useCurrency(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert()
        }}
      >

        <div>
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
            disabled={false}
          />

        </div>

        <div>
          <button
            type="button"
            onClick={swap}
          >
            swap
          </button>
        </div>

        <div>
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            disabled={false}
          />
        </div>

        <button type="submit">
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>

      </form>

    </div>
  )
}

export default App
