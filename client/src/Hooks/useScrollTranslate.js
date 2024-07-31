import { useEffect, useRef } from 'react';

const useScrollTranslate = (distance) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const element = ref.current;
      if (element) {
        const translateY = Math.min(
          Math.max(scrollY - element.offsetTop + window.innerHeight / 2, 0),
          distance
        );
        element.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [distance]);

  return ref;
};

export default useScrollTranslate;
