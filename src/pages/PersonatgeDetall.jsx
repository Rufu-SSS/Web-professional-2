import { useParams, Link } from "react-router-dom";
import { personatges } from "../data/personatges";
import NotFound from "./NotFound";

function PersonatgeDetall() {
  const { id } = useParams();
  const personatge = personatges.find(p => p.id === parseInt(id));

  if (!personatge) {
    return <NotFound />;
  }

  return (
    <main className="pagina">
      <div className="breadcrumb">
        <Link to="/">Inici</Link>
        <span className="breadcrumb-separator">›</span>
        <Link to="/personatges">Personatges</Link>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-actual">{personatge.nom}</span>
      </div>

      <div className="detall-personatge">
        <div className="detall-header">
          <h1>{personatge.nom}</h1>
          <span className="detall-badge">{personatge.rol}</span>
        </div>

        <div className="detall-contingut">
          {personatge.imatge && (
            <div className="detall-imatge">
              <img src={personatge.imatge} alt={personatge.nom} />
            </div>
          )}

          <div className="detall-info">
            <div className="detall-camp">
              <strong>🎭 Actor:</strong>
              <span>{personatge.actor || "No especificat"}</span>
            </div>

            <div className="detall-camp">
              <strong>📋 Rol:</strong>
              <span>{personatge.rol}</span>
            </div>

            <div className="detall-camp">
              <strong>🎬 Temporades:</strong>
              <div className="detall-tags">
                {personatge.temporada?.map(t => (
                  <span key={t} className="tag">Temporada {t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {personatge.descripcio && (
          <div className="detall-seccio">
            <h2>📖 Biografia</h2>
            <p>{personatge.descripcio}</p>
          </div>
        )}

        {personatge.habilitats && personatge.habilitats.length > 0 && (
          <div className="detall-seccio">
            <h2>⚔️ Habilitats</h2>
            <ul className="detall-llista">
              {personatge.habilitats.map((hab, i) => (
                <li key={i}>{hab}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="detall-actions">
          <Link to="/personatges" className="detall-tornar">
            ← Tornar als personatges
          </Link>
        </div>
      </div>
    </main>
  );
}

export default PersonatgeDetall;