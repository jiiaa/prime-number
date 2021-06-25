import React, { useState } from 'react';

const MultiNumbers = () => {
  const [numbers, setNumbers] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(numbers);
  };

  return (
    <div className="multi-number">
      <form onSubmit={handleSubmit}>
        <label htmlFor="numbers">Enter numbers</label>
        <input
          type="text"
          name="numbers"
          id="numbers"
          placeholder="1,2,3"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
        />
        <input type="submit" value="check" />
      </form>
      <div className="result">
      </div>
    </div>
  );
};

export default MultiNumbers;