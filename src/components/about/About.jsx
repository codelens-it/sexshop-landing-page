import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./about.css";
import BtnContact from "@/components/btnContact/BtnContact";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const aboutRef = useRef(null);
    const h2Ref = useRef(null);
    const imgRef = useRef(null);
    const h3Ref = useRef(null);
    const p1Ref = useRef(null);
    const p2Ref = useRef(null);
    const btnRef = useRef(null);

   useEffect(() => {
        gsap.fromTo(h2Ref.current,
            { x: -100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: "top 70%",
                    toggleActions: "play none none none"
                }
            }
        );

        gsap.fromTo(imgRef.current,
            { x: -100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                delay: 0.2,
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: "top 70%",
                    toggleActions: "play none none none"
                }
            }
        );

        const contentTl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top 60%",
                toggleActions: "play none none none"
            }
        });

        contentTl.fromTo(h3Ref.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 }
        )
        .fromTo(p1Ref.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7 },
            "-=0.3"
        )
        .fromTo(p2Ref.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7 },
            "-=0.4"
        )
        .fromTo(btnRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 },
            "-=0.4"
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="about section" id="nosotros" ref={aboutRef}>
            <h2 ref={h2Ref}>Sobre Nosotros</h2>
            <div className="about-container">
                <picture className="about-img" ref={imgRef}>
                    <img src="/imgs/about-img.svg" alt="Imagen descriptiva" />
                </picture>
                <div className="about-content">
                    <h3 ref={h3Ref}>Déjanos mostrarte cómo el placer puede ser parte de tu vida diaria</h3>
                    <p ref={p1Ref}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra nisi ex, ac blandit lorem semper vitae. Suspendisse a sodales risus. Aliquam sed lorem et est ornare mollis. Nullam hendrerit metus nisl, ut luctus ante aliquam sit amet. Pellentesque metus eros, pulvinar eu magna eu, blandit pulvinar ex. Mauris et arcu sapien. Donec pretium turpis id arcu porta, ac cursus mi dapibus. Donec in lacus quis massa suscipit bibendum. Class aptent taciti sociosqu ad litora torquent per conubia </p>
                    <p ref={p2Ref}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra nisi ex, ac blandit lorem semper vitae. Suspendisse a sodales risus. Aliquam sed lorem et est ornare mollis. Nullam hendrerit metus nisl, ut luctus ante aliquam sit amet. Pellentesque metus eros, pulvinar eu magna eu, blandit pulvinar ex. Mauris et arcu sapien. Donec pretium turpis id arcu porta, ac cursus mi dapibus. Donec in lacus quis massa suscipit bibendum. Class aptent taciti sociosqu ad litora torquent per conubia </p>
                    <div ref={btnRef}>
                        <BtnContact 
                         backgroundColor="var( --fucsia-transparent)" 
                         hoverColor="var( --fucsia-transparent)" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;