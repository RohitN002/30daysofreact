import React, { useState } from 'react';

const Day15 = () => {
  // State variable for the current palette
  const [currentPalette, setCurrentPalette] = useState([]);

  // State variable for saved palettes
  const [savedPalettes, setSavedPalettes] = useState([]);

  // Function to generate a random color
  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
  };

  // Function to generate a random color palette
  const generatePalette = () => {
    const newPalette = [];
    for (let i = 0; i < 5; i++) {
      newPalette.push(generateRandomColor());
    }
    setCurrentPalette(newPalette);
  };

  // Function to save the current palette
  const savePalette = () => {
    setSavedPalettes([...savedPalettes, currentPalette]);
  };

  // Function to delete a saved palette
  const deletePalette = (index) => {
    const updatedPalettes = [...savedPalettes];
    updatedPalettes.splice(index, 1);
    setSavedPalettes(updatedPalettes);
  };

  return (
    <div>
        <h1>Day 15</h1>
      {/* Generate button */}  
      <button id="generate" onClick={generatePalette}>Generate</button>
      
      {/* Display area for the current palette */}
      <div id="current-palette">
        {currentPalette.map((color, index) => (
          <div key={index} className="color-block" style={{ backgroundColor: color }}>{color}</div>
        ))}
        <button id="save" onClick={savePalette}>Save</button>
      </div>

      {/* Saved palettes section */}
      <div id="saved-palettes">
        {savedPalettes.map((palette, index) => (
          <div key={index} className="saved-palette">
            {palette.map((color, index) => (
              <div key={index} className="color-block" style={{ backgroundColor: color }}>{color}</div>
            ))}
            <button className="delete-palette-button" onClick={() => deletePalette(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Day15;
