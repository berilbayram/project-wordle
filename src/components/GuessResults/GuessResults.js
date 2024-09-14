import React from 'react';
import Guess from '../Guess/Guess';

import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        const guess = guesses[index];
        return (
          <Guess answer={answer} key={index} value={guess ? guess.value : ''} />
        );
      })}
    </div>
  );
}

export default GuessResults;
