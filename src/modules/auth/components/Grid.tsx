import React from 'react';

// Details of the picture/Video 
const pictureData = [
  {
    id: 1,
    image: 'image1.jpg',
    eventName: "The Undergraduate Student Summit '22",
    date: 'February, 2022'
  },
  {
    id: 2,
    image: 'image1.jpg',
    eventName: "The Undergraduate Student Summit '22",
    date: 'February, 2022'
  },
  {
    id: 3,
    image: 'image1.jpg',
    eventName: "The Undergraduate Student Summit '22",
    date: 'February, 2022'
  },
  {
    id: 1,
    image: 'image1.jpg',
    eventName: "The Undergraduate Student Summit '22",
    date: 'February, 2022'
  },
  // Add more picture data here...
];

const GridOfPictures: React.FC = () => {
  return (
    <div className="grid-container">
      {pictureData.map((picture) => (
        <div key={picture.id} className="grid-item">
          <img src={picture.image} alt={`Picture ${picture.id}`} />
          <p>{picture.eventName}</p>
        </div>
      ))}
    </div>
  );
};

export default GridOfPictures;
