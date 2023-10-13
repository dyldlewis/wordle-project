import React from 'react';

function TextInput({ assesWord, isWinner }) {
  const [guess, setGuess] = React.useState('')

  const handleOnSubmit = (e) => {
    e.preventDefault()
    assesWord(guess)
    setGuess('')
  }

  return (
    <form onSubmit={(e) => handleOnSubmit(e)} className="guess-input-wrapper">
      <label
        required
        htmlFor="guess-input"
      >Enter guess:</label>
      <input 
        disabled={isWinner}
        id="guess-input"
        type="text"
        value={guess}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={e => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  )
}

export default TextInput;
