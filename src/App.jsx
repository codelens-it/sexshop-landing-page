import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Loader from './components/loader/Loader';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {loading && <Loader />} {/* Muestra el loader mientras loading sea true */}
      
      <Navbar/>
    <Hero />
      <About />
    <Footer/>
    </div>
  )
}

export default App
