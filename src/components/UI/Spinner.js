import React from 'react';
import './Spinner.css';

const Spinner = () => {
  return (
    <div
      class='loader'
      style={{
        display: 'block',
        margin: 'auto',
      }}
    >
      Loading...
    </div>
  );
};

export default Spinner;
