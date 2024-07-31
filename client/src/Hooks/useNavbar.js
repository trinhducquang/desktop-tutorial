import { useEffect, useState } from 'react';

const useNavbar = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInItemSection, setIsInItemSection] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVideoInView, setIsVideoInView] = useState(false);
  const [isImgInView, setIsImgInView] = useState(false);

  useEffect(() => {
    const handleWheel = (event) => {
      if (isInItemSection) {
        return;
      }
      if (event.deltaY > 0) {
        setCurrentSlide((prev) => prev + 1);
      } else {
        setCurrentSlide((prev) => prev - 1);
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentSlide, isInItemSection]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      const videoContent = document.querySelector('.video-content');
      const imgContent = document.querySelector('.img-content');

      if (videoContent && imgContent) {
        const videoRect = videoContent.getBoundingClientRect();
        const imgRect = imgContent.getBoundingClientRect();

        setIsVideoInView(videoRect.top <= window.innerHeight && videoRect.bottom >= 0);
        setIsImgInView(imgRect.top <= window.innerHeight && imgRect.bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleChange = (index) => {
    setCurrentSlide(index);
  };

  const handleMouseEnter = () => setIsInItemSection(true);
  const handleMouseLeave = () => setIsInItemSection(false);

  return {
    currentSlide,
    scrollPosition,
    isVideoInView,
    isImgInView,
    handleChange,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export default useNavbar;