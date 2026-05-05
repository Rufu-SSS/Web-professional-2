import { useFavorits } from "../hooks/useFavorits";

function EntitatCard({ criatura }) {
  const { esFavorit, toggleFavorit } = useFavorits("favoritsEntitats");

  return (
    <div className="card">
      <button 
        className={`favorit-btn ${esFavorit(criatura.id) ? "actiu" : ""}`}
        onClick={() => toggleFavorit(criatura.id)}
        aria-label={esFavorit(criatura.id) ? "Eliminar de favorits" : "Afegir a favorits"}
      >
        {esFavorit(criatura.id) ? "★" : "☆"}
      </button>
      <img 
        src={criatura.imatge} 
        alt={criatura.nom} 
        loading="lazy"
      />
      <div className="card-info">
        <h2>{criatura.nom}</h2>
        <div className="badges">
          <span className="badge">Temporada {criatura.temporada}</span>
          {criatura.tipus?.map(t => (
            <span key={t} className="badge tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EntitatCard;