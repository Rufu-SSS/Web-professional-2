import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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

    if (spaceBelow < menuHeight && spaceAbove > menuHeight) {
      top = rect.top - menuHeight;
    }

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
<<<<<<< HEAD
  const [obrirBestiari, setObrirBestiari] = useState(false);
  const [cerca, setCerca] = useState("");

  const refPersonatges = useRef(null);
  const refBestiari = useRef(null);
  const navigate = useNavigate();
=======
  const [obrirBestiari, setObrirBestiari]       = useState(false);
  const [cerca, setCerca]                        = useState("");

  const refPersonatges = useRef(null);
  const refBestiari    = useRef(null);
  const navigate       = useNavigate();
>>>>>>> 1369e5f1d6f50de20e9fb37e21948764995a7ff2

  const handleCerca = (e) => {
    e.preventDefault();
    if (cerca.trim()) {
      navigate(`/cerca?q=${encodeURIComponent(cerca.trim())}`);
      setCerca("");
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">🚗 Supernatural</Link>
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
                { to: "/personatges",            text: "Totes les temporades" },
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
                { to: "/bestiari",            text: "Totes les temporades" },
                { to: "/bestiari/temporada1", text: "Temporada 1" },
                { to: "/bestiari/temporada2", text: "Temporada 2" },
              ]}
            />
          )}
        </li>

<<<<<<< HEAD
        {/* Episodis */}
        <li><Link to="/episodis">Episodis</Link></li>
      </ul>
      <ul style={{ listStyle: 'none' }}>
        <li style={{ listStyle: 'none' }}><Link to="/favorits">Favorits</Link></li>
      </ul>      <form className="navbar-cerca" onSubmit={handleCerca}>
=======
<<<<<<< HEAD
        {/* Episodis */}
=======
        {/* Episodis — link directe sense desplegable */}
>>>>>>> 4ae931d5d606cf4613b96d60ceeda068ee6add74
        <li><Link to="/episodis">Episodis</Link></li>
      </ul>

      {/* Cerca global — fora del ul per no interferir amb els dropdowns */}
      <form className="navbar-cerca" onSubmit={handleCerca}>
>>>>>>> 1369e5f1d6f50de20e9fb37e21948764995a7ff2
        <input
          type="text"
          placeholder="Cerca..."
          value={cerca}
          onChange={e => setCerca(e.target.value)}
          className="navbar-cerca-input"
        />
        <button type="submit" className="navbar-cerca-btn">🔍</button>
      </form>
    </nav>
  );
}

export default Navbar;