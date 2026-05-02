import { Link } from 'react-router-dom';
//import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-logo">🚗 Supernatural</span>
      <ul>
        <li><Link to="/">Inici</Link></li>
        <li><Link to="/personatges">Personatges</Link></li>
        <li><Link to="/bestiari">Bestiari</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;