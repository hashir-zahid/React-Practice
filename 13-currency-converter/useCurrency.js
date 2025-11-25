import { useState, useEffect } from "react";

export function useCurrency(currency) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currency) return;

    async function dataFetch() {
      try {
        setLoading(true);
        const res = await fetch(
          https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json
        );
        const result = await res.json();
        setData(result[currency]); 
        console.log(result[currency]);
      } catch (e) {
        console.error("Error fetching rates:", e);
      } finally {
        setLoading(false);
      }
    }

    dataFetch();
  }, [currency]);

  return data;
}
