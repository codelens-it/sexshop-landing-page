import './navbar.css'
import { useWindowSize } from '../../hooks/useWindowSize';

const Navbar = () => {

  const sizes = useWindowSize()
  console.log(sizes)

  return (
    <nav id='navbar'>
      <div className='logo-container'>
        <img className='nav-logo' src="/logo/logo.svg" alt="Logo" />
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