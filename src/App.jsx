import { useState, Suspense, lazy, useEffect } from 'react'
import './App.css'
import Navbar from '@/components/navbar/Navbar'
import Loader from '@/components/loader/Loader';

const Hero = lazy(() => import('./components/hero/Hero'));
const About = lazy(() => import('./components/about/About'));
const Footer = lazy(() => import('./components/footer/Footer'));

function App() {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false)
    }, 3000) 
    return () => clearTimeout(timer)
  }, [])


  return (
    <div>
      <Navbar/>
      <Suspense fallback={null}>
        {showLoader ? (
          <div className="full-page-loader">
            <Loader />
          </div>
        ) : (
          <>
            <Hero />
            <About />
            <Footer />
          </>
        )}
      </Suspense>
    </div>
  )
}

export default App
