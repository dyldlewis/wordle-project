import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import TextInput from '../TextInput/TextInput';
import Board from '../Board/Board';
import { checkGuess } from '../../game-helpers';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [words, setWords] = React.useState([])
  const [isWinner, setIsWinner] = React.useState(false)

  const assesWord = (guess) => {
    const checkedGuess = checkGuess(guess, answer)
    if (guess === answer) {
      setIsWinner(true)
    }
    setWords([...words, checkedGuess])
  }

  return (
    <>
      <Board guesses={words} />
      <TextInput assesWord={assesWord} isWinner={isWinner}/>
      {(isWinner || words.length === 6) && <Banner isWinner={isWinner} guessCounter={words.length} winningWord={answer}/>}
    </>
  )
}

export default Game;
