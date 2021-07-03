import React, { useState } from 'react';
import primeService from '../services/primeNumber';

const SingleNumber = () => {
  const [numberSingle, setNumberSingle] = useState(''); // Form input
  const [result, setResult] = useState(''); // Result from the backend
  const [showResult, setShowResult] = useState ('hidden'); // Hide result when no result
  const [errorGet, setErrorGet] = useState(false); // Show/hide error element
  const [errorMessage, setErrorMessage] = useState(''); // Error message from the backend

  const handleInputChange = async (e) => {
    setShowResult('hidden'); // Hide result when input changes
    setResult('');
    setNumberSingle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult(false); // Default value is false
    setErrorMessage('');
    const action = 'checkprime';
    const numberParam = `number=${numberSingle}`;
    try {
      const res = await primeService.getNumberValidated(action, numberParam);
      setShowResult('show');
      setResult(res.data.isPrime);
    } catch (err) {
      setShowResult('hidden');
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
          onChange={handleInputChange}
        />
        <input type="submit" value="Check" />
      </form>
      <div className="result">
        <span className="label">Prime number:</span>
        <span className="result-prime"> { showResult === 'hidden'
          ? '-' : result
            ? <span className="green">Yes</span>
            : <span className="red">Not</span>
        }</span>
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