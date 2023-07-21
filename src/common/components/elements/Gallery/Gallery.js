"use client";

import React, { useState } from 'react';

const Gallery = ({ images }) => {
  const [startIndex, setStartIndex] = useState(0);

  const imagesToShow = 4; // Display 4 pictures on desktop
  const imagesToShowTablet = 3; // Display 3 pictures on tablet
  const imagesToShowMobile = 2; // Display 2 pictures on mobile

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - imagesToShow, 0));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + imagesToShow, images.length - imagesToShow)
    );
  };

  return (
    <div>
      <div className="gallery">
        {images.slice(startIndex, startIndex + imagesToShow).map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + startIndex + 1}`} />
        ))}
      </div>
      <div className="navigation">
        <button onClick={handlePrev} disabled={startIndex === 0}>
          Prev
        </button>
        <button onClick={handleNext} disabled={startIndex + imagesToShow >= images.length}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Gallery;
