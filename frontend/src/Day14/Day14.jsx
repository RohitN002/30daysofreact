import React, { useState } from 'react';

const App = () => {
  // Conversion rates object
  const conversionRates = {
    centimeters: 1,
    inches: 2.54,
    feet: 30.48,
    meters: 100,
    kilometers: 100000,
    miles: 160934.4,
  };
 
  // State variables for user input and result
  const [fromUnit, setFromUnit] = useState('centimeters');
  const [toUnit, setToUnit] = useState('inches');
  const [fromValue, setFromValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  // Function to handle unit change
  const handleFromUnitChange = (event) => {
    setFromUnit(event.target.value);
  };

  const handleToUnitChange = (event) => {
    setToUnit(event.target.value);
  };

  // Function to handle input value change
  const handleValueChange = (event) => {
    setFromValue(event.target.value);
  };

  // Function to handle conversion
  const handleConvert = () => {
    // Convert input value to number
    const inputValue = parseFloat(fromValue);
    
    // Check if input value is valid number
    if (!isNaN(inputValue)) {
      // Calculate conversion result
      const result = (inputValue * conversionRates[fromUnit]) / conversionRates[toUnit];
      // Round result to three decimal places
      const roundedResult = result.toFixed(3);
      // Set the output value
      setOutputValue(roundedResult);
    } else {
      // If input value is not valid, display error message
      setOutputValue('Invalid input');
    }
  };

  return (
    <div>
      <h1>Day 14 </h1>
      {/* Select elements for unit conversion */}
      <select id="fromUnit" value={fromUnit} onChange={handleFromUnitChange}>
        {Object.keys(conversionRates).map(unit => (
          <option key={unit} value={unit}>{unit}</option>
        ))}
      </select>

      <select id="toUnit" value={toUnit} onChange={handleToUnitChange}>
        {Object.keys(conversionRates).map(unit => (
          <option key={unit} value={unit}>{unit}</option>
        ))}
      </select>

      {/* Input field for value */}
      <input type="number" id="fromValue" value={fromValue} onChange={handleValueChange} placeholder="Enter value" />

      {/* Convert button */}
      <button id="convert" onClick={handleConvert}>Convert</button>

      {/* Display area for result */}
      <div id="outputValue">{outputValue}</div>
    </div>
  );
}

export default App;
