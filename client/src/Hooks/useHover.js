import { useState } from 'react';

const useHover = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return {
    hovered,
    handleMouseEnter,
    handleMouseLeave
  };
};

export default useHover;
