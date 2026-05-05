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
        <span className="breadcrumb-separator">/</span>
        <Link to="/bestiari">Bestiari</Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-actual">{entitat.nom}</span>
      </div>

      <div className="entitat-detall">
        <h1>{entitat.nom}</h1>
        
        <div className="entitat-info">
          <p><strong>Tipus:</strong> {entitat.tipus}</p>
          {/* Aquí pots afegir més informació de l'entitat */}
        </div>

        <Link to="/bestiari" className="episodi-detall-tornar">
          ← Tornar al bestiari
        </Link>
      </div>
    </main>
  );
}

export default EntitatDetall;