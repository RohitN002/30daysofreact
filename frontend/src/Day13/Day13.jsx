import React, { useState } from 'react';

const Day13 = () => {
  // State variables for bill amount, tip percentage, and total amount
  const [billAmount, setBillAmount] = useState('');
  const [tipPercent, setTipPercent] = useState('');
  const [totalAmount, setTotalAmount] = useState('');

  // Function to handle bill amount input change
  const handleBillAmountChange = (event) => {
    setBillAmount(event.target.value);
  };

  // Function to handle tip percentage input change
  const handleTipPercentChange = (event) => {
    setTipPercent(event.target.value);
  };

  // Function to handle calculation when the button is clicked
  const calculateTotalAmount = () => {
    // Convert input values to numbers
    const bill = parseFloat(billAmount);
    const tip = parseFloat(tipPercent);

    // Check if inputs are valid numbers
    if (!isNaN(bill) && !isNaN(tip)) {
      // Calculate total amount with tip
      const total = bill + (bill * tip / 100);
      // Format total to two decimal places
      const formattedTotal = total.toFixed(2);
      // Set the total amount state
      setTotalAmount(formattedTotal);
    } else {
      // If inputs are not valid, display an error message
      setTotalAmount('Invalid input');
    }
  };

  return (
    <div>
    <h1>Day13</h1>     {/* Input field for bill amount */}

      <input
        type="number"
        id="billAmount"
        value={billAmount}
        onChange={handleBillAmountChange}
        placeholder="Bill Amount"
      />

      {/* Input field for tip percentage */}
      <input
        type="number"
        id="tipPercent"
        value={tipPercent}
        onChange={handleTipPercentChange}
        placeholder="Tip Percentage"
      />

      {/* Button to trigger calculation */}
      <button id="calculateAmount" onClick={calculateTotalAmount}>Calculate</button>

      {/* Display the total amount */}
      <div id="totalAmount">{totalAmount}</div>
    </div>
  );
}

export default Day13;
