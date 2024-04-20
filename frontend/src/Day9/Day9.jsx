import React, { useState, useEffect } from 'react';

function TimerApp() {
  const [seconds, setSeconds] = useState(0);
  const [inputSeconds, setInputSeconds] = useState('');
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (timerRunning) {
      intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [timerRunning]); 

  const handleStart = () => {
    if (inputSeconds > 0) {
      setTimerRunning(true);
      setInputSeconds('');
    }
  };

  const handleStop = () => {
    setTimerRunning(false);
  };

  const handleChange = event => {
    setInputSeconds(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1>Day 9</h1>
      <input
        id="seconds-input"
        type="number"
        value={inputSeconds}
        onChange={handleChange}
        className="mb-4 p-2 border border-gray-400 rounded"
        placeholder="Enter seconds"
        disabled={timerRunning}
      />
      <div id="timer" className="text-4xl font-bold mb-4">
        {seconds}
      </div>
      <div>
        <button
          id="start"
          onClick={handleStart}
          className={`mr-2 px-4 py-2 bg-blue-500 text-white rounded ${
            timerRunning ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={timerRunning}
        >
          Start
        </button>
        <button
          id="stop"
          onClick={handleStop}
          className={`px-4 py-2 bg-red-500 text-white rounded ${
            !timerRunning ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={!timerRunning}
        >
          Stop
        </button>
      </div>
    </div>
  );
}

export default TimerApp;
