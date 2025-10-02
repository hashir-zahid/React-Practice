import { useState, useEffect } from 'react'
import React from 'react'

function useCurrency(currency) {
  const [data, setData] = useState({})

  useEffect(() => 
  ('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json')
  .then((res) => res.json())
  .then((res) => setData(res[currency]))
  )

  return data
}

export default useCurrency