import React, { useState, useEffect } from "react";
import "./loader.css"; 

const Loader = () => {
  const [visibleLetters, setVisibleLetters] = useState([]);
  const word = "SEXSHOP";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < word.length) {
      const timer = setTimeout(() => {
        setVisibleLetters(prev => [...prev, word[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, 300); // 300ms entre cada letra (ajusta este valor)
      
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

    return (
        <div className="loader">
          <picture>
            <img src="loader/vibrator.svg" alt="vibr ator" />
          </picture>
          <div className="loader-text">
        {visibleLetters.map((letter, index) => (
          <span 
            key={index} 
            className="letter"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loader;