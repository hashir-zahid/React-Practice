import React, { useState, useEffect } from 'react';
import './App.css';

function CountryInfo() {
  const [countryName, setCountryName] = useState('pakistan');
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!countryName.trim()) return;

    const fetchCountryData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${countryName.trim()}`
        );
        
        if (!response.ok) {
          throw new Error('Country not found');
        }

        const data = await response.json();
        setCountryData(data[0]); // Take first result
      } catch (err) {
        setError(err.message);
        setCountryData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryData();
  }, [countryName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.countryInput.value.trim();
    if (inputValue) {
      setCountryName(inputValue);
    }
  };

  return (
    <div className="country-info-container">
      <h1>Country Information Finder</h1>
      
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          name="countryInput"
          placeholder="Enter country name"
          defaultValue="pakistan"
          className="country-input"
        />
        <button 
          type="submit"
          className="search-button"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error-message">Error: {error}</p>}

      {countryData && (
        <div className="country-details">
          <h2>{countryData.name.common}</h2>
          <p>Official Name: {countryData.name.official}</p>
          <p>Capital: {countryData.capital?.[0] || 'N/A'}</p>
          <p>Population: {countryData.population?.toLocaleString() || 'N/A'}</p>
          <p>Region: {countryData.region}</p>
          {countryData.flags?.png && (
            <img 
              src={countryData.flags.png} 
              alt={`Flag of ${countryData.name.common}`} 
              className="country-flag"
            />
          )}
        </div>
      )}
    </div>
  );
}

export default CountryInfo;
