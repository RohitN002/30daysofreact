import React, { useState } from 'react';

const Day26 = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [daysDifference, setDaysDifference] = useState(null);
  const [error, setError] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const calculateDays = () => {
    const selectedDateObj = new Date(selectedDate);
    const currentDateObj = new Date();
    const differenceInTime = selectedDateObj.getTime() - currentDateObj.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

    if (differenceInDays < 0) {
      setError('error');
      setDaysDifference(null);
    } else {
      setError('');
      setDaysDifference(differenceInDays);
    }
  };

  return (
    <div>
        <h1> Day 26</h1>
      <input
        type="date"
        id="datePicker"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <button id="findDays" onClick={calculateDays}>Find Days</button>
      <span id="daysLeft">{daysDifference}</span>
      {error && <div id="error">error</div>}
    </div>
  );
};

export default Day26;
