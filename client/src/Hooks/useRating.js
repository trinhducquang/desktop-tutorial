import { useState } from 'react';

const useRating = (initialRating = 5) => {
  const [rating, setRating] = useState(initialRating);
  
  const handleRating = (rate) => {
    setRating(rate);
  };

  return {
    rating,
    handleRating
  };
};

export default useRating;
