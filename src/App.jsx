import { useState } from 'react'
import './App.css'
import Hero from './components/hero/Hero'
import About from './components/about/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero />
    <About />
    </>
  )
}

export default App
