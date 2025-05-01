import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import "./hero.css";
import BtnContact from "../btnContact/BtnContact";

const Hero = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const spanRef = useRef(null);
    const btnRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const tl = gsap.timeline({ defaults: { 
                ease: "power3.out",
                duration:1.2 
            } });
            
            tl.fromTo(titleRef.current, 
              { y: -80, opacity: 0 },
              { y: 0, opacity: 1, duration: 1.5 }
            )
            .fromTo(spanRef.current,
              { y: -60, opacity: 0 },
              { y: 1, opacity: 1.3, duration: 1 },
              "-=0.8" 
            )
            .fromTo(btnRef.current,
              { y: -40, opacity: 0 },
              { y: 0, opacity: 1, duration: 1.3 },
              "-=0.6" 
            );
            
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 }); 
  
      if (heroRef.current) {
        observer.observe(heroRef.current);
      }
  
      return () => {
        if (heroRef.current) {
          observer.unobserve(heroRef.current);
        }
      };
    }, []);

    return (
        <section className="hero" id="home" ref={heroRef}>
            <div className="hero-overlay"></div>
                <div className="hero-container">
                <h1 ref={titleRef}>Descubre el placer sin límites</h1>
                <span ref={spanRef}>La curiosidad es el primer paso. Nosotros te acompañamos en el viaje.</span>
                <div className="hero-btn" ref={btnRef}>
                    <BtnContact />
                </div>
            </div>
        </section>
    );
};

export default Hero;