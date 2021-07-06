import React from 'react';

const Error = ({ message }) => {
  return (
    <div className="error">
      <div>Oooops...</div>
      {message && <strong>{message}</strong>}
      <div>Try again, please.</div>
    </div>
  );
};

export default Error;