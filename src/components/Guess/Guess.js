import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
  console.log(guess)
  return (
    <p className="guess">
      {range(5).map((word, index) => {
        return (
          <span key={index} className={guess ? `cell ${guess[word].status}`: "cell"}>{guess ? guess[word].letter : undefined}</span>
        )
      })}
    </p>
  )
}

export default Guess;
