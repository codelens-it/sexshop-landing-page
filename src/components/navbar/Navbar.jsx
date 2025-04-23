import './navbar.css'

const Navbar = () => {

  return (
    <nav id='navbar'>
      <div className='logo-container'>
      <img  className='nav-logo' src="/public/logo/logo.svg" alt="Logo" />
      </div>

    <ul className="nav-menu">
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Sobre nosotros</a></li>
      <li><a href="#">Catálogo</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
    </nav>
  )
}

export default Navbar;