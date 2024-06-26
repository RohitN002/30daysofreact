import { useState } from "react";

export const useTheme = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return {
        theme,
        toggleTheme,
    };
};


const Day30 = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div
            style={{
                height: "100vh",
                transition: "0.3s ease-in",
                backgroundColor: theme === "light" ? "white" : "black",
            }}
        >
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default Day30;
