import React, { useState } from 'react';
import primeService from '../services/primeNumber';

const SingleNumber = () => {
  const [numberSingle, setNumberSingle] = useState('');
  const [result, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInput = async (e) => {
    setResult('');
    setNumberSingle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult(false);
    setErrorMessage('');
    const action = 'checkprime';
    const numberParam = `number=${numberSingle}`;
    try {
      const res = await primeService.getNumberValidated(action, numberParam);
      setResult(res.data.isPrime);
    } catch (err) {
      setErrorMessage(err.message);
      setTimeout(() => {setErrorMessage('');}, 4000);
    }
  };

  return (
    <div className="single-number">
      <form onSubmit={handleSubmit}>
        <label htmlFor="number">Enter number</label>
        <input
          type="number"
          name="number"
          id="number"
          value={numberSingle}
          onChange={handleInput}
        />
        <input type="submit" value="Check" />
      </form>
      <div className="result">
        <div>Prime number:
          {result === false ?
            ' Yes' :
            ' Not'}
        </div>
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

export default SingleNumber;