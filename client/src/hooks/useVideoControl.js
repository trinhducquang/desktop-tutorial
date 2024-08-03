import { useState, useRef } from 'react';

const useVideoControl = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const videoRefs = useRef({}); 

   
    const handleMouseEnter = (key) => {
        const video = videoRefs.current[key];
        if (video && !isPlaying) {
            video.muted = false;
            video.play();
        }
    };

    
    const handleMouseLeave = (key) => {
        const video = videoRefs.current[key];
        if (video && !isPlaying) {
            video.pause();
            video.muted = true;
        }
    };

 
    const handleVideoClick = (key) => {
        const video = videoRefs.current[key];
        if (video) {
            if (isPlaying) {
                video.pause();
                video.muted = true;
            } else {
                video.play();
                video.muted = false;
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleFullscreenClick = () => {
        if (isFullscreen) {
            document.exitFullscreen();
        } else {
            const firstVideo = Object.values(videoRefs.current)[0];
            if (firstVideo) {
                firstVideo.requestFullscreen();
            }
        }
        setIsFullscreen(!isFullscreen);
    };


    const setVideoRef = (key) => (element) => {
        videoRefs.current[key] = element;
    };
    
    return {
        videoRefs,
        isPlaying,
        isFullscreen,
        handleMouseEnter,
        handleMouseLeave,
        handleVideoClick,
        handleFullscreenClick,
        setVideoRef 
    };
};

export default useVideoControl;
