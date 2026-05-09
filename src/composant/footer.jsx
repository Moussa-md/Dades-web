import logo from "../images/Logo.png";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Footer() {
    return (
      <div className="Footer">
        <a href="/">
        <img src={logo} alt="logo" className="App-logo" />
        </a>
        <a className="Site-Name2" href="/">
            <span className="dades">Dades</span>
          <span className="web"> Web</span>
        </a>
        <p>
            Tous droits réservés par Dades web &copy; 2026
        </p>
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