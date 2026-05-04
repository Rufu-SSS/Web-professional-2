import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

function Navbar() {
  const [obrirPersonatges, setObrirPersonatges] = useState(false);
  const [obrirBestiari, setObrirBestiari]       = useState(false);

  return (
    <nav className="navbar">
      <span className="navbar-logo">🚗 Supernatural</span>
      <ul>
        <li>
          <Link to="/">Inici</Link>
        </li>

        {/* Desplegable Personatges */}
        <li
          className="dropdown"
          onMouseEnter={() => setObrirPersonatges(true)}
          onMouseLeave={() => setObrirPersonatges(false)}
        >
          <span className="dropdown-toggle">Personatges ▾</span>
          {obrirPersonatges && (
            <ul className="dropdown-menu">
              <li><Link to="/personatges"  onClick={() => setObrirPersonatges(false)}>Temporada 1</Link></li>
              <li><Link to="/personatges2" onClick={() => setObrirPersonatges(false)}>Temporada 2</Link></li>
            </ul>
          )}
        </li>

        {/* Desplegable Bestiari */}
        <li
          className="dropdown"
          onMouseEnter={() => setObrirBestiari(true)}
          onMouseLeave={() => setObrirBestiari(false)}
        >
          <span className="dropdown-toggle">Bestiari ▾</span>
          {obrirBestiari && (
            <ul className="dropdown-menu">
              <li><Link to="/bestiari"  onClick={() => setObrirBestiari(false)}>Temporada 1</Link></li>
              <li><Link to="/bestiari2" onClick={() => setObrirBestiari(false)}>Temporada 2</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;