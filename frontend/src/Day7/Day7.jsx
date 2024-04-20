import React, { useState, useEffect } from 'react';

function Day7() {
  

  const [currentDay, setCurrentDay] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  
  useEffect(() => {
    // Function to update current date and time
    const updateTime = () => {
      const now = new Date();
      
      // Update current day
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      setCurrentDay(daysOfWeek[now.getDay()]);

      // Update current date
      const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const formattedDate = `${monthsOfYear[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
      setCurrentDate(formattedDate);

      // Update current time
      const formattedTime = `${formatTimeUnit(now.getHours())}:${formatTimeUnit(now.getMinutes())}:${formatTimeUnit(now.getSeconds())}`;
      setCurrentTime(formattedTime);
    };

    // Update time initially
    updateTime();

    // Update time every second
    const interval = setInterval(updateTime, 1000);

    // Cleanup function to clear interval
    return () => clearInterval(interval);
  }, []);

  // Function to format time unit with leading zero
  const formatTimeUnit = (unit) => {
    return unit < 10 ? `0${unit}` : unit;
  };

  return (
    <div>
        
  <h1>Day 7 </h1>
      <div id="day"> {currentDay}</div>
      <div id="date"> {currentDate}</div>
      <div id="time"> {currentTime}</div>
    </div>
  );
}

export default Day7;
