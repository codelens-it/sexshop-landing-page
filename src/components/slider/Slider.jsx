import { useState, useEffect, useRef } from 'react';
import sliderImages from '@/data/sliderImages';
import { useWindowSize } from '@/hooks/useWindowSize';
import './slider.css';

const Slider = ({ autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!autoPlay) return;

    const playNextSlide = () => {
      goToNext();
      timeoutRef.current = setTimeout(playNextSlide, interval);
    };

    timeoutRef.current = setTimeout(playNextSlide, interval);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, autoPlay, interval]);

  const goToNext = () => {
    setCurrentIndex(prev => 
      prev === sliderImages.length - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container" ref={sliderRef}>
      <div className="slider">
        {sliderImages.map((image, index) => (
        <div 
         key={image.id}
         className={`slide ${index === currentIndex ? 'active' : ''}`}
         aria-hidden={index !== currentIndex}
       >
         <img
           src={image.url}
           alt={image.alt}
           className="slide-image"
         />
       </div>
        ))}
      </div>
      
      <div className="slider-bullets">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            className={`bullet ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;