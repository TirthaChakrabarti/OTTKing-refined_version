import React, { useEffect, useState } from 'react';

const HeroSection = ({ videos = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to change video every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 5000); // Change video every 10 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [videos.length]);

  return (
    <div className="animation">
      {videos.map((video, index) => (
        <video
          key={index}
          className={`slides ${currentIndex === index ? 'active' : ''}`}
          src={video}
          muted
          autoPlay
          loop
        />
      ))}
      <div className="gradient-overlay"></div>
        <div className="caption">
          <p id='main-caption'>Unlimited movies, TV shows and more</p>
          <p id='sub-section'>Starts at $8. Cancel at any time.</p>
        </div>
      </div>
  );
};

export default HeroSection;
