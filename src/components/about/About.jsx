import "./about.css";
import BtnContact from "../btnContact/BtnContact";

const About = () => {
    return (
        <section className="about section" id="about">
            <h2>Sobre Nosotros</h2>
            <div className="about-container">
                <picture className="about-img">
                    <img src="/imgs/about-img.svg" alt="Imagen descriptiva" />
                </picture>
                <div className="about-content">
                    <h3>Déjanos mostrarte cómo el placer puede ser parte de tu vida diaria</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra nisi ex, ac blandit lorem semper vitae. Suspendisse a sodales risus. Aliquam sed lorem et est ornare mollis. Nullam hendrerit metus nisl, ut luctus ante aliquam sit amet. Pellentesque metus eros, pulvinar eu magna eu, blandit pulvinar ex. Mauris et arcu sapien. Donec pretium turpis id arcu porta, ac cursus mi dapibus. Donec in lacus quis massa suscipit bibendum. Class aptent taciti sociosqu ad litora torquent per conubia </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra nisi ex, ac blandit lorem semper vitae. Suspendisse a sodales risus. Aliquam sed lorem et est ornare mollis. Nullam hendrerit metus nisl, ut luctus ante aliquam sit amet. Pellentesque metus eros, pulvinar eu magna eu, blandit pulvinar ex. Mauris et arcu sapien. Donec pretium turpis id arcu porta, ac cursus mi dapibus. Donec in lacus quis massa suscipit bibendum. Class aptent taciti sociosqu ad litora torquent per conubia </p>
                    <div>
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