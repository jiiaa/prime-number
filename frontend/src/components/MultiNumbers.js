import React, { useState } from 'react';
import primeService from '../services/primeNumber';

const MultiNumbers = () => {
  const [numberMulti, setNumberMulti] = useState(''); // Form input
  const [result, setResult] = useState({ result: '-', isPrime: '' }); // Result object from the backend
  const [showResult, setShowResult] = useState ('hidden'); // Hide result when input changing
  const [errorGet, setErrorGet] = useState(false); // Show/hide error element
  const [errorMessage, setErrorMessage] = useState(''); // Error message from the backend

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const nonDigit = /[^0-9,]/; // Create a regex string
    setShowResult('hidden'); // Hide result when input changes
    setResult({ result: '-', isPrime: '' });

    if (nonDigit.test(inputValue)) {
      setErrorMessage('Only numbers and commas allowed');
      setErrorGet(true);
      setTimeout(() => {
        setErrorMessage('');
        setErrorGet(false);
      }, 4000);
    } else {
      setNumberMulti(inputValue);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Remove all whitespace characters
    const numberString = numberMulti.replaceAll(/\s/g, '');
    const action = 'sumandcheck';
    const numberParam = `numbers=${numberString}`;
    try {
      const res = await primeService.getNumberValidated(action, numberParam);
      setShowResult ('show');
      setResult(res.data);
    } catch (err) {
      setShowResult('hidden'),
      setErrorGet(true);
      if (err.response.data.message) {
        setErrorMessage(err.response.data.message);
      }
      setTimeout(() => {
        setErrorGet(false);
        setErrorMessage('');
      }, 5000);
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
          onChange={handleInputChange}
        />
        <input type="submit" value="Check" />
      </form>
      <div className="result">
        <div className="result-multi">
          <span className="label">The sum of the numbers:</span>
          <span className="result-sum"> {result.result}</span>
        </div>
        <div className="prime-multi">
          <span className="label">Prime number:</span>
          <span className="result-prime"> { showResult === 'hidden'
            ? '-' : result.isPrime
              ? <span className="green">Yes</span>
              : <span className="red">Not</span>
          }</span>
        </div>
      </div>
      {errorGet &&
        <div className="error">
          <div>Oooops...</div>
          {errorMessage && <strong>{errorMessage}</strong>}
          <div>Please try again.</div>
        </div>
      }
    </div>
  );
};

export default MultiNumbers;