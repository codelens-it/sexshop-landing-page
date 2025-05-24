import './navbar.css'
import { useWindowSize } from '@/hooks/useWindowSize';
import { useState, useEffect } from 'react';

const Navbar = () => {

  const { isDesktop } = useWindowSize()
  const [isMenuInvisible, setIsMenuInvisible] = useState(false)

  useEffect(() => {
    if (isDesktop) {
      setIsMenuInvisible(false)
    }
    else setIsMenuInvisible(true)
  }, [isDesktop])


  return (
    <nav id='navbar' className={`${!isDesktop && !isMenuInvisible && 'open-menu'}`}>
      <div className='logo-container'>
        <img className='nav-logo' src="/logo/logo.svg" alt="Logo" />
      </div>
      <button className={`menu-button ${!isMenuInvisible && 'open-menu'}`} onClick={() => setIsMenuInvisible(!isMenuInvisible)}>
        <img src={`/icons/${isMenuInvisible ? 'burger-menu.svg' : 'close-menu.svg'}`} alt='icono de menú' className='burger-menu' />
      </button>
      <div className={`menu-list-container ${isMenuInvisible && 'invisible'}`}>
        <ul className="menu-list">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#nosotros">Sobre nosotros</a></li>
          <li><a href="#catalogo">Catálogo</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;