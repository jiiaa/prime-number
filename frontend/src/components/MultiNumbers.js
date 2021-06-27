import React, { useState } from 'react';
import primeService from '../services/primeNumber';

const MultiNumbers = () => {
  const [numberMulti, setNumberMulti] = useState('');
  const [result, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const action = 'sumandcheck';
    const numberParam = `numbers=${numberMulti}`;
    try {
      const res = await primeService.getNumberValidated(action, numberParam);
      setResult(res.data);
    } catch (err) {
      console.error((err.status));
      setErrorMessage(err.message);
      setTimeout(() => {setErrorMessage('');}, 4000);
    }
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
          value={numberMulti}
          onChange={(e) => setNumberMulti(e.target.value)}
        />
        <input type="submit" value="Check" />
      </form>
      <div className="result">
        <div>The sum of the numbers: {result.result}</div>
        <div>Prime number: {result.isPrime ? 'Yes': 'Not'}</div>
      </div>
      {errorMessage &&
        <div className="error">
          <div>Something went wrong...</div>
          <div>{errorMessage}</div>
          <div>Please try again later.</div>
        </div>
      }
    </div>
  );
};

export default MultiNumbers;