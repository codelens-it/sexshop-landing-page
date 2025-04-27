import './navbar.css'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const tabletMedia = '768'
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= tabletMedia)
      return   
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  })

  return (
    <nav id='navbar'>
      <div className='logo-container open-menu'>
        <img className='nav-logo' src="/public/logo/logo.svg" alt="Logo" />
      </div>
      <button className='menu-button'><img src='/icons/burger-menu.svg' alt='icono de menú' className='burger-menu' /></button>
      <div className="menu-list-container">
        <ul className="menu-list">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Sobre nosotros</a></li>
          <li><a href="#">Catálogo</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar;