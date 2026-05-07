import { useParams, Link } from "react-router-dom";
import { entitats } from "../data/entitats";
import NotFound from "./NotFound";

function EntitatDetall() {
  const { id } = useParams();
  const entitat = entitats.find(e => e.id === parseInt(id));

  if (!entitat) {
    return <NotFound />;
  }

  return (
    <main className="pagina">
      <div className="breadcrumb">
        <Link to="/">Inici</Link>
        <span className="breadcrumb-separator">›</span>
        <Link to="/bestiari">Bestiari</Link>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-actual">{entitat.nom}</span>
      </div>

      <div className="detall-entitat">
        <div className="detall-header">
          <h1>{entitat.nom}</h1>
          <span className="detall-badge">{entitat.tipus}</span>
        </div>

        <div className="detall-contingut">
          {entitat.imatge && (
            <div className="detall-imatge">
              <img src={entitat.imatge} alt={entitat.nom} />
            </div>
          )}

          <div className="detall-info">
            <div className="detall-camp">
              <strong>🐉 Tipus:</strong>
              <span>{entitat.tipus || "No especificat"}</span>
            </div>

            <div className="detall-camp">
              <strong>🎬 Temporada:</strong>
              <span>Temporada {entitat.temporada}</span>
            </div>
          </div>
        </div>

        {entitat.descripcio && (
          <div className="detall-seccio">
            <h2>📖 Descripció</h2>
            <p>{entitat.descripcio}</p>
          </div>
        )}

        {entitat.tags && entitat.tags.length > 0 && (
          <div className="detall-seccio">
            <h2>🏷️ Etiquetes</h2>
            <div className="detall-tags">
              {entitat.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        )}

        <div className="detall-actions">
          <Link to="/bestiari" className="detall-tornar">
            ← Tornar al bestiari
          </Link>
        </div>
      </div>
    </main>
  );
}

export default EntitatDetall;