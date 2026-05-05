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
        <span className="breadcrumb-separator">/</span>
        <Link to="/personatges">Personatges</Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-actual">{personatge.nom}</span>
      </div>

      <div className="personatge-detall">
        <h1>{personatge.nom}</h1>
        
        <div className="personatge-info">
          <p><strong>ID:</strong> {personatge.id}</p>
          {/* Aquí pots afegir més informació del personatge */}
        </div>

        <Link to="/personatges" className="episodi-detall-tornar">
          ← Tornar als personatges
        </Link>
      </div>
    </main>
  );
}

export default PersonatgeDetall;