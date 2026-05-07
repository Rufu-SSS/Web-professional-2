import { useParams, Link } from "react-router-dom";
import { episodis } from "../data/episodis";
import NotFound from "./NotFound";

function EpisodiDetall() {
  const { id } = useParams();
  const episodi = episodis.find(e => e.id === parseInt(id));

  if (!episodi) {
    return <NotFound />;
  }

  return (
    <main className="pagina">
      <div className="breadcrumb">
        <Link to="/">Inici</Link>
        <span className="breadcrumb-separator">/</span>
        <Link to="/episodis">Episodis</Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-actual">{episodi.titol}</span>
      </div>

      <div className="episodi-detall">
        <div className="episodi-detall-header">
          <h1>{episodi.titol}</h1>
          <div className="episodi-detall-metadades">
            <span className="episodi-numero">{episodi.numero}</span>
            <span>📅 {episodi.dataEstrena || "Data desconeguda"}</span>
            <span>⏱️ {episodi.durada || "45 min"}</span>
            {episodi.valoracio && <span>⭐ {episodi.valoracio}/10</span>}
          </div>
        </div>

        {/* Sinopsi completa */}
        <div className="episodi-detall-sinopsi">
          <h2>📖 Sinopsi completa</h2>
          <p>{episodi.descripcio}</p>
        </div>

        {/* Personatges que apareixen */}
        {episodi.personatges && episodi.personatges.length > 0 && (
          <div className="episodi-detall-personatges">
            <h2>👥 Personatges</h2>
            <div className="episodi-detall-llistat">
              {episodi.personatges.map(personatge => (
                <Link
                  key={personatge.id}
                  to={`/personatge/${personatge.id}`}
                  className="episodi-tag"
                >
                  {personatge.nom}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Entitats que apareixen */}
        {episodi.entitats && episodi.entitats.length > 0 && (
          <div className="episodi-detall-entitats">
            <h2>🐉 Entitats</h2>
            <div className="episodi-detall-llistat">
              {episodi.entitats.map(entitat => (
                <Link
                  key={entitat.id}
                  to={`/entitat/${entitat.id}`}
                  className="episodi-tag"
                >
                  {entitat.nom}
                  {entitat.tipus && <span className="episodi-tag-tipus">({entitat.tipus})</span>}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Curiositats */}
        {episodi.curiositats && episodi.curiositats.length > 0 && (
          <div className="episodi-detall-curiositats">
            <h2>💡 Curiositats</h2>
            <ul>
              {episodi.curiositats.map((curiositat, index) => (
                <li key={index}>{curiositat}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Botó de retorn */}
        <div className="episodi-detall-actions">
          <Link to="/episodis" className="episodi-detall-tornar">
            ← Tornar als episodis
          </Link>
        </div>
      </div>
    </main>
  );
}

export default EpisodiDetall;