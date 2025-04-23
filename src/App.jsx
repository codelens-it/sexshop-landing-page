import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='testdiv'>
      <h1>Landing page</h1>
      <h2>Test de h2</h2>
      <h3>test de  h3</h3>
      
      <button>Test común</button>
      <button className='variant-btn'>Test variant</button>
      </div>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">sobre nosotros</a></li>
        <li><a href="#">contacto</a></li>
      </ul>
    </>
  )
}

export default App
