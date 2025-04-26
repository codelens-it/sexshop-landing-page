import "./hero.css";
import BtnContact from "../btnContact/BtnContact";

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-overlay"></div>
            <div className="hero-container">
                <h1>Descubre el placer sin límites</h1>
                <span>La curiosidad es el primer paso. Nosotros te acompañamos en el viaje.</span>
                <div className="hero-btn">
                    <BtnContact />
                </div>
            </div>
        </section>
    );
};

export default Hero;