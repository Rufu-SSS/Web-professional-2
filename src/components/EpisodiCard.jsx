import { useState } from "react";
import { Link } from "react-router-dom";

function EpisodiCard({ episodi }) {
  const [expandit, setExpandit] = useState(false);

  const obtenirResumSenseSpoiler = (descripcio) => {
    if (descripcio.length <= 120) return descripcio;
    const primerPunt = descripcio.indexOf(".");
    if (primerPunt > 0 && primerPunt <= 120) {
      return descripcio.substring(0, primerPunt + 1);
    }
    return descripcio.substring(0, 120) + "...";
  };

  const handleExpandirClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandit(!expandit);
  };

  const handleTagClick = (e) => {
    e.stopPropagation(); // Atura la propagació al Link pare
  };

  return (
    <Link to={`/episodis/${episodi.id}`} className="episodi-card-link">
      <div className={`episodi-card ${expandit ? "expandit" : ""}`}>
        <div className="episodi-card-header">
          <div className="episodi-numero">{episodi.numero}</div>
          <div className="episodi-info-principal">
            <h3>{episodi.titol}</h3>
            <div className="episodi-metadades">
              <span>📅 {episodi.dataEstrena || "Data desconeguda"}</span>
              <span>⏱️ {episodi.durada || "45 min"}</span>
              {episodi.valoracio && <span>⭐ {episodi.valoracio}</span>}
            </div>
          </div>
          <button 
            className="episodi-expandir-btn"
            onClick={handleExpandirClick}
            aria-label={expandit ? "Tancar" : "Veure més"}
          >
            {expandit ? "▲" : "▼"}
          </button>
        </div>

        <div className="episodi-resum">
          <p className="episodi-descripcio">{obtenirResumSenseSpoiler(episodi.descripcio)}</p>
        </div>

        {expandit && (
          <div className="episodi-expandit" onClick={(e) => e.preventDefault()}>
            <div className="episodi-sinopsi">
              <h4>📖 Sinopsi completa</h4>
              <p>{episodi.descripcio}</p>
            </div>

            {episodi.personatges && episodi.personatges.length > 0 && (
              <div className="episodi-personatges">
                <h4>👥 Personatges</h4>
                <div className="episodi-llistat">
                  {episodi.personatges.map(personatge => (
                    <Link 
                      key={personatge.id} 
                      to={`/personatge/${personatge.id}`}
                      className="episodi-tag"
                      onClick={handleTagClick}
                    >
                      {personatge.nom}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {episodi.entitats && episodi.entitats.length > 0 && (
              <div className="episodi-entitats">
                <h4>🐉 Entitats / Bestiari</h4>
                <div className="episodi-llistat">
                  {episodi.entitats.map(entitat => (
                    <Link 
                      key={entitat.id} 
                      to={`/entitat/${entitat.id}`}
                      className="episodi-tag"
                      onClick={handleTagClick}
                    >
                      {entitat.nom}
                      {entitat.tipus && <span className="episodi-tag-tipus">({entitat.tipus})</span>}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {episodi.curiositats && episodi.curiositats.length > 0 && (
              <div className="episodi-curiositats">
                <h4>💡 Curiositats</h4>
                <ul>
                  {episodi.curiositats.map((curiositat, index) => (
                    <li key={index}>{curiositat}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}

export default EpisodiCard;