import React from "react";
import "./loader.css";  // Asegúrate de tener el archivo de estilo

const Loader = () => {
    return (
        <div className="loader">
          <picture>
            <img src="loader/vibrator.svg" alt="vibrator" />
          </picture>
          <div className="loader-text">
            <span>SEXSHOP</span>        
        </div>
        </div>
    );
};

export default Loader;