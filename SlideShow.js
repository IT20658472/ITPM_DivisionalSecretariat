import React, { useState, useEffect } from "react";
import '../Styles/SlideShow.css'
import slide1 from "../images/sildeshow1.jpg";
import slide2 from "../images/sildeshow2.jpg";
import slide3 from "../images/sildeshow3.jpg";


const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [slide1, slide2, slide3];

  // Automatically change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide, images.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  return (
    <div className="slideshow-container">
      <img src={images[currentSlide]} alt={`Slide ${currentSlide}`} />
      <div>
        <button className="prev" onClick={handlePrevSlide}>  &#10094;</button>
        <button className="next" onClick={handleNextSlide}> &#10095;</button>
      </div>
    </div>
  );
};

export default Slideshow;
