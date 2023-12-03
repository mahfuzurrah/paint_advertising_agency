import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import agencyVideo from '../assets/video/29587026.mp4';

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleCanPlay = () => {
      // Video is ready to play
      if (video && !isPlaying) {
        // Pause the video initially
        video.pause();
      }
    };

    if (video) {
      video.addEventListener('canplay', handleCanPlay);
    }

    return () => {
      if (video) {
        video.removeEventListener('canplay', handleCanPlay);
      }
    };
  }, [isPlaying]); // Include isPlaying in the dependencies array

  const handleTogglePlay = () => {
    const video = videoRef.current;

    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="video-player-container" onClick={handleTogglePlay}>
      <video ref={videoRef} width="100%" height="100%" controls={false}>
        <source src={agencyVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={`play-pause-overlay ${!isPlaying ? 'visible' : ''}`}>
        {isPlaying ? (
          <span className="pause-icon">
            <FaPause className="icons" />
          </span>
        ) : (
          <span className="play-icon">
            <FaPlay className="icons" />
          </span>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
