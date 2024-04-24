import React, { useState } from 'react';

function Day27() {
  const [nameInput, setNameInput] = useState('');
  const [nameList, setNameList] = useState([]);
  const [pickedList, setPickedList] = useState([]);
  const [pickedName, setPickedName] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addNameToList();
    }
  };

  const addNameToList = () => {
    if (nameInput.trim() !== '') {
      setNameList([...nameList, nameInput.trim()]);
      setNameInput('');
    }
  };

  const pickRandomName = () => {
    if (nameList.length > 0) {
      const randomIndex = Math.floor(Math.random() * nameList.length);
      const pickedName = nameList[randomIndex];
      setPickedName(pickedName);
      // Move the picked name to the pickedList
      setPickedList([...pickedList, pickedName]);
      // Remove the picked name from the nameList
      setNameList(nameList.filter(name => name !== pickedName));
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          id="nameInput"
          placeholder="Enter a name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <div id="nameList">
          {nameList.map((name, index) => (
            <span key={index} className="name">{name}</span>
          ))}
        </div>
        <button id="pick" onClick={pickRandomName}>Pick a Name</button>
        {pickedName && (
          <div id="nameDialog">
            <div>
              <span onClick={() => setPickedName('')}>&times;</span>
              <p>Picked Name: {pickedName}</p>
            </div>
          </div>
        )}
        {/* Display area for picked names */}
        <div id="pickedList">
          {pickedList.map((name, index) => (
            <span key={index} className="name">{name}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Day27;
