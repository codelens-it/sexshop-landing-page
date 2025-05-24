import { useState, Suspense, lazy, useEffect } from 'react'
import './App.css'
import Navbar from '@/components/navbar/Navbar'
import Loader from '@/components/loader/Loader';
import { CatalogProvider } from '@/context/CatalogContext'
import Seo from '@/components/seoMeta/SeoMeta';
import NewsletterModal from "@/components/newsletterModal/NewsletterModal";

const Hero = lazy(() => import('./components/hero/Hero'));
const About = lazy(() => import('./components/about/About'));
const Gallery = lazy(() => import('./components/gallery/Gallery'))
const Slider = lazy(() => import('./components/slider/Slider'));
const Contact = lazy(() => import('./components/contact/Contact'));
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
      <Seo />
      <Navbar />
      <Suspense fallback={null}>
        {showLoader ? (
          <div className="full-page-loader">
            <Loader />
          </div>
        ) : (
          <>
            <NewsletterModal />
            <Hero />
            <CatalogProvider>
              <Gallery />
            </CatalogProvider>
            <About />
            <Slider
              autoPlay={true}
              interval={4000}
            />
            <Contact />
            <Footer />
          </>
        )}
      </Suspense>
    </div>
  )
}

export default App;
