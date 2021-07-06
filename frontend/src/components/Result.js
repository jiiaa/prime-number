import React from 'react';

const Result = ({ sum, isPrime, showResult, multi }) => {
  return (
    <div className="result">
      {multi &&
        <div className="result-multi">
          <span className="label">Sum of the numbers: </span>
          <span className="result-sum">{sum}</span>
        </div>
      }
      <div className="result-both">
        <span className="label">Prime number: </span>
        <span className="result-prime">
          { showResult === 'hidden' ? '-' : isPrime
            ? <span className="green">Yes</span>
            : <span className="red">Not</span>
          }
        </span>
      </div>
    </div>
  );
};

export default Result;
