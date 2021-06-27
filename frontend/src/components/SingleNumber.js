import React, { useState } from 'react';
import primeService from '../services/primeNumber';

const SingleNumber = () => {
  const [numberSingle, setNumberSingle] = useState('');
  const [result, setResult] = useState('');
  const [errorGet, setErrorGet] = useState(false);
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
      setErrorGet(true);
      if (err.response.data.message) {
        setErrorMessage(err.response.data.message);
      }
      setTimeout(() => {
        setErrorGet(false);
        setErrorMessage('');
      }, 4000);
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
          {result === true ?
            ' Yes' :
            ' Not'}
        </div>
      </div>
      {errorGet &&
        <div className="error">
          <div>Something went wrong...</div>
          {errorMessage && <strong>{errorMessage}</strong>}
          <div>Please try again later.</div>
        </div>
      }
    </div>
  );
};

export default SingleNumber;