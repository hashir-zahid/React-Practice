import React, { useId } from 'react'
import './InputBox.css'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency,
    disabled = false,
}) {
    const amountId = useId()

    return (
        <div className='container'>
            <div className="box1">
                <label htmlFor={amountId}>
                    {label}
                </label>
                <input
                    type="number"
                    id={amountId}
                    placeholder='Amount'
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    disabled={disabled}
                />
            </div>
            <div className="box2">
                <p>Currency Type</p>
                <select
                    value={selectCurrency}
                    onChange={(e) => {
                        onAmountChange && onAmountChange(Number(e.target.value))
                        onCurrencyChange(e.target.value)
                    }}
                >

                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}


                </select>
            </div>
        </div>
    )
}

export default InputBox
