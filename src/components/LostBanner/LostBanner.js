import React from 'react';
import Banner from '../Banner/Banner';

function LostBanner({ correctAnswer }) {
  return (
    <Banner status="sad">
      <p>
        Sorry, the correct answer was <strong>{correctAnswer}</strong>
      </p>
    </Banner>
  );
}

export default LostBanner;
