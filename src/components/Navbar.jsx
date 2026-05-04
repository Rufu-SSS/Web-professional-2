import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import '../styles/Navbar.css';

// Component auxiliar que calcula la posició automàticament
function DropdownMenu({ links, onClose, triggerRef }) {
  if (!triggerRef.current) return null;
  const rect = triggerRef.current.getBoundingClientRect();

  return createPortal(
    <ul
      className="dropdown-menu dropdown-menu-portal"
      style={{
        top:  rect.bottom + "px",
        left: rect.left + "px",
      }}
    >
      {links.map(l => (
        <li key={l.to}>
          <Link to={l.to} onClick={onClose}>{l.text}</Link>
        </li>
      ))}
    </ul>,
    document.body
  );
}

function Navbar() {
  const [obrirPersonatges, setObrirPersonatges] = useState(false);
  const [obrirBestiari, setObrirBestiari]       = useState(false);

  const refPersonatges = useRef(null);
  const refBestiari    = useRef(null);

  return (
    <nav className="navbar">
      <span className="navbar-logo">🚗 Supernatural</span>
      <ul>
        <li>
          <Link to="/">Inici</Link>
        </li>

        {/* Desplegable Personatges */}
        <li
          ref={refPersonatges}
          className="dropdown"
          onMouseEnter={() => setObrirPersonatges(true)}
          onMouseLeave={() => setObrirPersonatges(false)}
        >
          <span className="dropdown-toggle">Personatges ▾</span>
          {obrirPersonatges && (
            <DropdownMenu
              triggerRef={refPersonatges}
              onClose={() => setObrirPersonatges(false)}
              links={[
                { to: "/personatges",  text: "Temporada 1" },
                { to: "/personatges2", text: "Temporada 2" },
              ]}
            />
          )}
        </li>

        {/* Desplegable Bestiari */}
        <li
          ref={refBestiari}
          className="dropdown"
          onMouseEnter={() => setObrirBestiari(true)}
          onMouseLeave={() => setObrirBestiari(false)}
        >
          <span className="dropdown-toggle">Bestiari ▾</span>
          {obrirBestiari && (
            <DropdownMenu
              triggerRef={refBestiari}
              onClose={() => setObrirBestiari(false)}
              links={[
                { to: "/bestiari",  text: "Temporada 1" },
                { to: "/bestiari2", text: "Temporada 2" },
              ]}
            />
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;