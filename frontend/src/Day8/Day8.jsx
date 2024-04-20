import React, { useState } from 'react';


const CheckboxList = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: 'Dogs', checked: false },
    { id: 2, label: 'Cats', checked: false },
    { id: 3, label: 'Cows', checked: false },
    { id: 4, label: 'Deers', checked: false },
  ]);

  // Function to handle individual checkbox selection
  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index].checked = !updatedCheckboxes[index].checked;
    setCheckboxes(updatedCheckboxes);
  };

  // Function to handle "Select All" button click
  const handleSelectAll = () => {
    const updatedCheckboxes = checkboxes.map((checkbox) => ({
      ...checkbox,
      checked: true,
    }));
    setCheckboxes(updatedCheckboxes);
  };

  return (
    <>
    <h1>Day 8 </h1>
      <div data-testid="checkbox-container">
        {checkboxes.map((checkbox, index) => (
          <div key={checkbox.id}>
            <input
              data-testid={`checkbox-${index + 1}`}
              type="checkbox"
              checked={checkbox.checked}
              onChange={() => handleCheckboxChange(index)}
            />
            {checkbox.label}
          </div>
        ))}
      </div>
      <button data-testid="button" onClick={handleSelectAll}>
        Select All
      </button>
    </>
  );
};

export default CheckboxList;

