import React from 'react';
import Guess from '../Guess'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function Board({ guesses }) {
  const guessRange = range(NUM_OF_GUESSES_ALLOWED)
  return (
    <div className="guess-results">
      {
        guessRange.map((index) => {
          return (
            <Guess key={index} guess={guesses[index]} />
          )
        })
      }
    </div>
  )
}

export default Board;
