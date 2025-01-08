import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { image: 'https://via.placeholder.com/1200x500', text: 'Featured Product 1' },
    { image: 'https://via.placeholder.com/1200x500', text: 'Summer Sale 2025' },
    { image: 'https://via.placeholder.com/1200x500', text: 'New Arrivals' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <img
        src={slides[currentIndex].image}
        alt="Hero"
        className="w-full h-[500px] object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">
        <p>{slides[currentIndex].text}</p>
      </div>
    </div>
  );
};

export default HeroSection;
