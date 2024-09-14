import React from 'react';

import Banner from '../Banner/Banner';

function WonBanner({ numberOfGuesses }) {
  return (
    <Banner status="happy">
      <p>
        <strong>congratulations!</strong> Got it in{' '}
        <strong>
          {numberOfGuesses} {numberOfGuesses === 1 ? 'guess' : 'guesses'}
        </strong>
      </p>
    </Banner>
  );
}

export default WonBanner;
