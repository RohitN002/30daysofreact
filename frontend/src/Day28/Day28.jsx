import { useState } from "react";

export default function Day28() {
	return (
		<>
			<h1>Toggle Switch</h1>
			<ToggleButton />
		</>
	);
}

const ToggleButton = () => {
	const [isToggled, setIsToggled] = useState(true);

	const buttonStyle = {
		backgroundColor: isToggled ? "black" : "lightgray",
		color: isToggled ? "white" : "black",
	}

	const handleToggle = () => {
		setIsToggled(!isToggled);
	}

	return (
		<>
        <h1> Day 28 </h1>
			<button id="toggle" onClick={handleToggle} style={buttonStyle}>{isToggled ? "on" : "off"}</button>
		</>
	)
}