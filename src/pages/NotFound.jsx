// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="pagina not-found">
      <div className="not-found-content">
        <h1>🛣️ 404</h1>
        <h2>Carretera perduda</h2>
        <p>La pàgina que busques no existeix... o potser és un fantasma.</p>
        <p className="citacio">"Els fantasmes no tenen pàgines web." — Dean Winchester</p>
        <Link to="/" className="tornar-btn">
          🚗 Tornar a l'Impala
        </Link>
      </div>
    </main>
  );
}

export default NotFound;