import React, { useState } from 'react';

const Day16= () => {
  // State variables for input values and conversion result
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [conversionResult, setConversionResult] = useState('');

  // Function to handle input value change for 'From' currency
  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value.toUpperCase());
  };

  // Function to handle input value change for 'To' currency
  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value.toUpperCase());
  };

  // Function to handle conversion
  const handleConvert = () => {
    // Fetch exchange rates from the API
    fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`)
      .then(response => response.json())
      .then(data => {
        // Retrieve the exchange rate for the 'To' currency
        const rate = data.rates[toCurrency];
        // Calculate the conversion result
        const convertedValue = 1 * rate; // Convert 1 unit of 'From' currency to 'To' currency
        // Update the conversion result state
        setConversionResult(convertedValue);
      })
      .catch(error => {
        console.error('Error fetching exchange rates:', error);
      });
  };

  return (
    <div>
    <h1> Day 16 </h1>
      {/* Input field for 'From' currency */}
      <input
        type="text"
        id="from"
        maxLength="3"
        placeholder="From: e.g., USD"
        value={fromCurrency}
        onChange={handleFromCurrencyChange}
      />

      {/* Input field for 'To' currency */}
      <input
        type="text"
        id="to"
        maxLength="3"
        placeholder="To: e.g., EUR"
        value={toCurrency}
        onChange={handleToCurrencyChange}
      />

      {/* Convert button */}
      <button id="convert" onClick={handleConvert}>Convert</button>

      {/* Display area for conversion result */}
      <div id="currencyValue">{conversionResult}</div>
    </div>
  );
}

export default Day16;
