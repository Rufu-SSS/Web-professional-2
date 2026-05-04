import { useState } from "react";

function PersonatgeCard({ personatge }) {
  const [mostrarDescripcio, setMostrarDescripcio] = useState(false);

  if (!personatge) {
    return <div>Error: personatge no definit</div>;
  }

  return (
    <div className="card">
      <img 
        src={personatge.imatge}
        alt={personatge.nom}
        loading="lazy"
        onError={(e) => {
          console.error("❌ Error carregant imatge:", personatge.imatge);
          e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
          e.target.onerror = null;
        }}
      />
      <div className="card-info">
        <h2>{personatge.nom}</h2>
        
        {personatge.actor && (
          <p className="actor">🎭 {personatge.actor}</p>
        )}
        
        <p className="rol">
          <strong>Rol:</strong> {personatge.rol}
        </p>
        
        {/* Badges de temporada */}
        <div className="badges">
          {personatge.temporada?.map(t => (
            <span key={t} className="badge">Temporada {t}</span>
          ))}
        </div>
        
        {/* Descripció (toggle) */}
        {personatge.descripcio && (
          <div className="descripcio">
            <button 
              className="descripcio-btn"
              onClick={() => setMostrarDescripcio(!mostrarDescripcio)}
            >
              {mostrarDescripcio ? "📖 Amagar descripció" : "📖 Mostrar descripció"}
            </button>
            {mostrarDescripcio && (
              <p className="descripcio-text">{personatge.descripcio}</p>
            )}
          </div>
        )}
        
        {/* Habilitats */}
        {personatge.habilitats && personatge.habilitats.length > 0 && (
          <div className="habilitats">
            <strong>⚔️ Habilitats:</strong>
            <ul>
              {personatge.habilitats.map((hab, i) => (
                <li key={i}>{hab}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonatgeCard;