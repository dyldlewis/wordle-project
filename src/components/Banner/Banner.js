import React from 'react';

function Banner({ isWinner, guessCounter, winningWord }) {
  if (isWinner) {
    return(
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          {' '}
          <strong>{guessCounter} guesses</strong>.
        </p>
      </div>
    )
  }
  return (
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{winningWord}</strong>.</p>
    </div>
  )
}

export default Banner;
