import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { contactItems } from '@/data/contactData';
import ContactItem from './ContactItem';
import BtnContact from '@/components/btnContact/BtnContact';
import './contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const itemsRef = useRef([]);
  const mapRef = useRef(null);
  const btnRef = useRef(null);
  const contentRef = useRef(null);

  // Añade elementos al array de refs de manera segura
  const addToItemsRef = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Solo proceder si todas las refs están listas
    if (!sectionRef.current || !headerRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      // Animación para el encabezado
      gsap.from(headerRef.current.children, {
        x: -100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom center",
          toggleActions: "play none none none"
        }
      });

      // Animación para los items de contacto
      itemsRef.current.forEach((item, index) => {
        gsap.from(item, {
          y: 50,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none"
          }
        });
      });

      // Animación para el mapa
      gsap.from(mapRef.current, {
        x: 100,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 75%",
          end: "bottom 60%",
          toggleActions: "play none none none"
        }
      });

      // Animación para el botón
      gsap.from(btnRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
          end: "bottom 60%",
          toggleActions: "play none none none"
        }
      });

    }, sectionRef); // Contexto limitado al sectionRef

    return () => {
      ctx.revert(); // Limpieza adecuada
    };
  }, [contactItems]); // Dependencia para recalcular cuando cambien los items

  return (
    <section className="contact-section section" id="contacto" ref={sectionRef}>
      <div className="contact-header" ref={headerRef}>
        <h2>Tu curiosidad nos encanta</h2>
        <span>No hay pregunta incómoda, solo curiosidades que vale la pena explorar.</span>
      </div>
      
      <div className="contact-content" ref={contentRef}>
        <div className="contact-info-container">
          {contactItems.map((item, index) => (
            <div key={index} ref={addToItemsRef}>
              <ContactItem
                icon={item.icon}
                alt={item.alt}
                text={item.text}
              />
            </div>
          ))}
          <div ref={btnRef}>
            <BtnContact 
              backgroundColor="var(--fucsia-transparent)" 
              hoverColor="var(--fucsia-transparent)"
            />
          </div>
        </div>
        
        <div className="contact-map" ref={mapRef}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016887893533!2d-58.383759!3d-34.603734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM2JzEzLjQiUyA1OMKwMjMnMDEuNSJX!5e0!3m2!1sen!2sar!4v1234567890123!5m2!1sen!2sar"
            className="map-iframe"
            allowFullScreen=""
            loading="lazy"
            title="Ubicación en mapa"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;