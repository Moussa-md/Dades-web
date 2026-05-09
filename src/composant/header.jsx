import logo from "../images/Logo.png";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Header() {
    return (
      <div className="header">
        <a href="/">
        <img src={logo} alt="logo" className="App-logo" />
        </a>
        <a className="Site-Name" href="/">
            <span className="dades">Dades</span>
          <span className="web"> Web</span>
        </a>
        <nav className="nav" >

          <Link to="/">Accueil</Link>

          <Link to="/services" >Services</Link>

          <a
              href="https://Dadesweb.com"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              Boutique
          </a>

          <Link to="/about">À propos</Link>

          <Link to="/contact">Contact</Link>

        </nav>
        <div className="social-icons">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaFacebook size={28}  color="#1877F2" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={28} color="#E4405F" />
            </a>

            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={28} color="#000000" />
            </a>

        </div>
      </div>
    );
}