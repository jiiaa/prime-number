import React, { useState } from 'react';
import primeService from '../services/primeNumber';
import Error from './Error';
import Result from './Result';

const SingleNumber = () => {
  const [numberSingle, setNumberSingle] = useState(''); // Form input
  const [result, setResult] = useState(''); // Result from the backend
  const [showResult, setShowResult] = useState ('hidden'); // Hide result when no result
  const [errorGet, setErrorGet] = useState(false); // Show/hide error element
  const [errorMessage, setErrorMessage] = useState(''); // Error message from the backend

  const handleInputChange = async (e) => {
    const inputValue = e.target.value;
    const nonDigit = /[^0-9]/; // Create a regex string
    setShowResult('hidden'); // Hide result when input changes
    setResult('');

    // Check if the input contains non-number characters
    if (nonDigit.test(inputValue)) {
      setErrorMessage('Only numbers allowed');
      setErrorGet(true);
      setTimeout(() => {
        setErrorMessage('');
        setErrorGet(false);
      }, 4000);
    } else {
      setNumberSingle(inputValue);
    }
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
      <Result isPrime={result} showResult={showResult} />
      {errorGet && <Error message={errorMessage} />}
    </div>
  );
};

export default SingleNumber;