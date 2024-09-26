import React, { useState, useEffect } from 'react';

const images = [
  {
    background: '/store.png'
  },
  {    
    background: '/store.png'
  }
];

const AnimatedFeature = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeIn(true);
      }, 1000); // Match the duration of the fade-out effect
    }, 4000); // Change image every 4 seconds to allow time for the transition
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const currentImage = images[currentImageIndex];

  return (
    <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">

      <iframe src="https://my.spline.design/iphone14procopy-f1a162c79f35a2392bdeaea13bf01849/" frameBorder="0" width="100%" height="100%" style={{ height: 60 + 'em' }}></iframe>

      <div
        className={`hidden lg:block home-feature mt-10 aspect-[6/5] max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36 fade-in ${fadeIn ? 'visible' : ''}`}
        style={{
          background: `url(${currentImage.background})`,
          backgroundSize: 'cover'
        }}
      ></div>
    </div>
  );
};

export default AnimatedFeature;
