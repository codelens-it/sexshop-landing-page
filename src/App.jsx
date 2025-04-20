import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Landing page</h1>
      <h2 className='test-roboto'>Roboto regular</h2>
      <h2 className='test-roboto-bold'>Roboto bold</h2>
      <h2 className='test-roboto-italic'>Roboto italic</h2>
    </>
  )
}

export default App
