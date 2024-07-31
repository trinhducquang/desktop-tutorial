import { useState, useRef } from 'react';

const useVideoControl = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (!isPlaying && videoRef.current) {
            videoRef.current.muted = false;
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (!isPlaying && videoRef.current) {
            videoRef.current.pause();
            videoRef.current.muted = true;
        }
    };

    const handleVideoClick = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                videoRef.current.muted = true;
            } else {
                videoRef.current.play();
                videoRef.current.muted = false;
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleFullscreenClick = () => {
        if (videoRef.current) {
            if (isFullscreen) {
                document.exitFullscreen();
            } else {
                videoRef.current.requestFullscreen();
            }
            setIsFullscreen(!isFullscreen);
        }
    };

    return {
        videoRef,
        isPlaying,
        isFullscreen,
        handleMouseEnter,
        handleMouseLeave,
        handleVideoClick,
        handleFullscreenClick
    };
    
    
};

export default useVideoControl;
