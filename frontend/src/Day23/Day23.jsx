import React, { useState } from 'react';

const Day23 = () => {
  const [number, setNumber] = useState('');
  
  const generateTable = () => {
    const inputNumber = parseInt(number);
    if (!isNaN(inputNumber) && inputNumber >= 0 && inputNumber <= 1000) {
      const multiplicationTable = [];
      for (let i = 1; i <= 20; i++) {
        multiplicationTable.push(
          <li key={i}>
            {inputNumber} x {i} = {inputNumber * i}
          </li>
        );
      }
      return multiplicationTable;
    } else {
      return <li>Please enter a valid number between 0 and 1000</li>;
    }
  };

  return (
    <div>
      <input 
        type="number" 
        id="number" 
        placeholder="Enter a number" 
        value={number} 
        onChange={(e) => setNumber(e.target.value)} 
      />
      <button 
        id="generateTable" 
        onClick={generateTable}>
        Generate Table
      </button>
      <ul id="multiplicationTable">
        {generateTable()}
      </ul>
    </div>
  );
};

export default Day23;
