import React from 'react';

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, settentativeGuess] = React.useState('');
  // add guess to list of guesses
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(tentativeGuess);
    handleSubmitGuess(tentativeGuess);
    settentativeGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        required
        disabled={gameStatus !== 'running'}
        type="text"
        value={tentativeGuess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          settentativeGuess(nextGuess);
        }}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
      />
    </form>
  );
}

export default GuessInput;
