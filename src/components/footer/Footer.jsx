import './footer.css'

const Footer = () => {

  return (
    <footer>
      <div className="footer-first-row">
        <section className="footer-logo-slogan">
          <div className='footer-logo-container'>
            <img className='nav-logo' src="/logo/logo.svg" alt="Logo Footer" />
          </div>
          <span>Donde tu imaginación cobra vida.</span>
        </section>
        <section className="footer-social-container">
          <span>Síguenos en nuestras redes</span>
          <div className="social-links">
            <a href='#'><img className="icon" src="/social/facebook-icon.svg" alt="Botón de Facebook" /></a>
            <a href='#'><img className="icon" src="/social/instagram-icon.svg" alt="Botón de Instagram" /></a>
          </div>
        </section>
        <nav className="footer-navbar">
          <ul className="menu-list">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Catálogo</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
      </div>
      <div className="footer-second-row"><span>-2025- Codelens</span></div>
    </footer>
  )
}

export default Footer;