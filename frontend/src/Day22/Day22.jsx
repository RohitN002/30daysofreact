import React, { useState, useEffect } from 'react';

function Day22() {
  // Initialize the count state with the value from local storage or default to 0
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem('count');
    return storedCount ? parseInt(storedCount, 10) : 0;
  });

  // Update local storage whenever the count changes
  useEffect(() => {
    localStorage.setItem('count', count.toString());
  }, [count]);

  return (
    <div>
      <h2 data-testid="count-id">Count: {count}</h2>
      <button data-testid="inc-id" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button data-testid="dec-id" onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
}

export default Day22;
