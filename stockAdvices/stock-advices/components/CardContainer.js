import React, { useState } from 'react';
import Card from './Card';
import styles from './../styles/styles.css';

const CardContainer = ({ cards }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 3; // Adjust the sensitivity
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  const mockData = [
    {
      text: 'Card 1 - Dog',
      imageUrl: 'https://images.unsplash.com/photo-1576611334979-6c61c36fb9d7', // Dog image
      description: 'This is a cute dog.',
    },
    {
      text: 'Card 2 - Cat',
      imageUrl: 'https://cdn2.thecatapi.com/images/MTc4OTk4Nw.jpg', // Cat image
      description: 'This is a cute cat.',
    },
    {
      text: 'Card 3 - Dog',
      imageUrl: 'https://cdn2.thedogapi.com/images/SJqBMg5Nm.jpg', // Dog image
      description: 'This is another cute dog.',
    },
    {
      text: 'Card 4 - Cat',
      imageUrl: 'https://cdn2.thecatapi.com/images/cvs.jpg', // Cat image
      description: 'This is another cute cat.',
    },
    // Add more cards as needed
  ];

  return (
    <div
      className={styles.cardContainer}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {mockData.map((card, index) => (
        <Card
          key={index}
          text={card.text}
          imageUrl={card.imageUrl}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardContainer;
