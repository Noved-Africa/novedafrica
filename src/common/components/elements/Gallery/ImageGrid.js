"use client";

import React, { useState } from 'react';

const ImageGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const images = [
    'bulb.png',
    'fivePlus.png',
    'plane2.png',
    'four.png',
    'bulb.png',
    'one.png',
    'bulb.png',
    'star_1.png',
    'two.png',
    'bulb.png',
  ];
  const imagesPerPage = 5; // Display 5 images per page

  const totalPages = Math.ceil(images.length / imagesPerPage);

  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;

  const currentImages = images.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="gallery">
        {currentImages.map((image, index) => (
          <div className="image" key={index}>
            <img src={`/images/${image}`} alt={`Image ${startIndex + index + 1}`} />
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      <style jsx>{`
        .gallery {
          display: flex;
          flex-wrap: nowrap;
          overflow-x: auto;
        }

        .image {
          width: 20%;
          padding: 5px;
          box-sizing: border-box;
        }

        .image img {
          max-width: 100%;
          height: auto;
        }

        .pagination {
          margin-top: 20px;
          display: flex;
          justify-content: center;
        }

        button {
          padding: 10px 20px;
          background-color: #4A43CB;
          color: white;
          border: none;
          cursor: pointer;
          margin: 0 10px;
        }

        button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default ImageGallery;
