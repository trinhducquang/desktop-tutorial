import { useState } from 'react';

const useHover = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return {
    hoveredItem,
    handleMouseEnter,
    handleMouseLeave
  };
};

export default useHover;
