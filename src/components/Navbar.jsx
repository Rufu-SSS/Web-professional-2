// components/Navbar.jsx - Versió millorada

import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import '../styles/Navbar.css';

function DropdownMenu({ links, onClose, triggerRef }) {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const menuRef = useRef(null);

  useEffect(() => {
    if (!triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();
    const menuHeight = menuRef.current?.offsetHeight || 200;
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    
    let top = rect.bottom;
    let left = rect.left;
    
    // Si no hi ha espai a sota, posa'l a sobre
    if (spaceBelow < menuHeight && spaceAbove > menuHeight) {
      top = rect.top - menuHeight;
    }
    
    // Si surt per la dreta, ajusta
    const menuWidth = menuRef.current?.offsetWidth || 200;
    if (left + menuWidth > window.innerWidth) {
      left = window.innerWidth - menuWidth - 10;
    }
    
    setPosition({ top, left });
  }, [triggerRef]);

  if (!triggerRef.current) return null;

  return createPortal(
    <ul
      ref={menuRef}
      className="dropdown-menu dropdown-menu-portal"
      style={{
        position: "fixed",
        top: position.top + "px",
        left: position.left + "px",
        zIndex: 9999,
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
  const [obrirBestiari, setObrirBestiari] = useState(false);

  const refPersonatges = useRef(null);
  const refBestiari = useRef(null);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">Supernatural</Link>
      <ul>
        <li><Link to="/">Inici</Link></li>

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
                { to: "/personatges", text: "Totes les temporades" },
                { to: "/personatges/temporada1", text: "Temporada 1" },
                { to: "/personatges/temporada2", text: "Temporada 2" },
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
                { to: "/bestiari", text: "Totes les temporades" },
                { to: "/bestiari/temporada1", text: "Temporada 1" },
                { to: "/bestiari/temporada2", text: "Temporada 2" },
              ]}
            />
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;