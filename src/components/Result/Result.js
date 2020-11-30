import React from 'react';

export default function Result(props) {
  return (
    <div>
      <h2>Result</h2>
      <p>Your tip is {Math.floor(props.amount * props.percent) / 100}</p>
    </div>
  );
}


