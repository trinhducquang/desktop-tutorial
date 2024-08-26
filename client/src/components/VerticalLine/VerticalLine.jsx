import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`;

const OuterLine = styled.div`
  width: 1.5px !important;
  height: 100px;
  background-color: gray;
  position: fixed;
  top: 370px;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)}; 
  transition: opacity 0.5s ease-in-out;
`;

const InnerLine = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  animation: ${slideDown} 2s linear infinite;
`;

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { 
        setIsVisible(false); 
      } else {
        setIsVisible(true); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <OuterLine isVisible={isVisible}>
      <InnerLine />
    </OuterLine>
  );
};

export default App;
