import { useFavorits } from "../hooks/useFavorits";

function PersonatgeCard({ personatge }) {
  const { esFavorit, toggleFavorit } = useFavorits("favoritsPersonatges");

  return (
    <div className="card">
      <button 
        className={`favorit-btn ${esFavorit(personatge.id) ? "actiu" : ""}`}
        onClick={() => toggleFavorit(personatge.id)}
        aria-label={esFavorit(personatge.id) ? "Eliminar de favorits" : "Afegir a favorits"}
      >
        {esFavorit(personatge.id) ? "★" : "☆"}
      </button>
      <img 
        src={personatge.imatge} 
        alt={personatge.nom} 
        loading="lazy"
      />
      <div className="card-info">
        <h2>{personatge.nom}</h2>
        {personatge.actor && <p className="actor">🎭 {personatge.actor}</p>}
        <p className="rol"><strong>Rol:</strong> {personatge.rol}</p>
        <div className="badges">
          {personatge.temporada?.map(t => (
            <span key={t} className="badge">Temporada {t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PersonatgeCard;