import React, { useState, useEffect } from "react";
import './App.css'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Loader from './components/loader/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      // Simula que la página se carga después de 3 segundos
      setTimeout(() => {
          setLoading(false);
      }, 3000);
  }, []);

  return (
    <div>
      {loading && <Loader />} {/* Muestra el loader mientras loading sea true */}
      
      <Hero />
      <About />
    </div>
  )
}

export default App
