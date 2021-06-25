import React, { useState } from 'react';

const SingleNumber = () => {
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(number);
  };

  return (
    <div className="single-number">
      <form onSubmit={handleSubmit}>
        <label htmlFor="number">Enter number</label>
        <input
          type="number"
          name="number"
          id="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <input type="submit" value="check" />
      </form>
      <div className="result">
      </div>
    </div>
  );
};

export default SingleNumber;