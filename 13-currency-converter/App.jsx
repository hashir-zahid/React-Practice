import { useState } from 'react'
import { useCurrency } from './useCurrency'
import InputBox from './InputBox'
import './App.css'

function App() {
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("pkr")
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmont] = useState(0)

  const currencyInfo = useCurrency(from)

  const options = Object.keys(currencyInfo)

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
            onCurrencyChange={(currency) => setAmount(amount)}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
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
            selectCurrency={from}
            amountDisable
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
