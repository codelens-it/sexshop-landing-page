import { useState, useEffect, useRef } from 'react';
import sliderImages from '@/data/sliderImages';
import { useWindowSize } from '@/hooks/useWindowSize';
import './slider.css';

const Slider = ({ autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const timeoutRef = useRef(null);
  const { isMobile, isTablet, isDesktop } = useWindowSize();

  // Limpieza del timeout
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Autoplay corregido sin arguments.callee
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

  // Navegación
  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % sliderImages.length);
  };

  const goToPrev = () => {
    setCurrentIndex(prev => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Manejo de eventos táctiles mejorado
  const handleTouchStart = (e) => {
    if (isMobile || isTablet) {
      setTouchStart(e.targetTouches[0].clientX);
      if (autoPlay && timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  };

  const handleTouchMove = (e) => {
    if (isMobile || isTablet) {
      setTouchEnd(e.targetTouches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    if (!isMobile && !isTablet) return;
    if (!touchStart || !touchEnd) return;
    
    const threshold = 50;
    if (touchStart - touchEnd > threshold) {
      goToNext();
    } else if (touchEnd - touchStart > threshold) {
      goToPrev();
    }

    // Reinicio seguro del autoplay
    if (autoPlay) {
      const restartAutoPlay = () => {
        goToNext();
        timeoutRef.current = setTimeout(restartAutoPlay, interval);
      };
      timeoutRef.current = setTimeout(restartAutoPlay, interval);
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  // Selección de imagen responsiva
  const getImageSource = (image) => {
    if (isDesktop) return image.desktopUrl || image.url;
    if (isTablet) return image.tabletUrl || image.mobileUrl || image.url;
    return image.mobileUrl || image.url;
  };

  return (
    <div 
      className="slider-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="slider">
        {sliderImages.map((image, index) => (
          <div 
            key={image.id}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            aria-hidden={index !== currentIndex}
          >
            <img
              src={getImageSource(image)}
              alt={image.alt}
              className={`slide-image ${isDesktop ? 'desktop' : isTablet ? 'tablet' : 'mobile'}`}
              loading="lazy"
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
            aria-label={`Ir a la imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Flechas de navegación */}
      <button 
        className="slider-arrow prev" 
        onClick={goToPrev}
        aria-label="Anterior"
      >
        &lt;
      </button>
      <button 
        className="slider-arrow next" 
        onClick={goToNext}
        aria-label="Siguiente"
      >
        &gt;
      </button>
    </div>
  );
};

export default Slider;