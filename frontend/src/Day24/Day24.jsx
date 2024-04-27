const Day24 = () => {
	const handleClick = () => {
	  console.log('Clicked!');
	};
  
	return (
        <>
        <h1>Day 24 </h1>
	  <button onClick={handleClick} data-testid="button">
		Click me!
	  </button></>
	);
  };
  
  export default Day24;
  