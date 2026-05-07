import { Link } from "react-router-dom";
import { useFavorits } from "../hooks/useFavorits";

function EntitatCard({ criatura }) {
  const { esFavorit, toggleFavorit } = useFavorits("favoritsEntitats");

  const handleFavoritClick = (e) => {
    e.preventDefault(); // Evita que el Link navegui
    e.stopPropagation();
    toggleFavorit(criatura.id);
  };

  return (
    <Link to={`/entitat/${criatura.id}`} className="card-link">
      <div className="card">
        <button 
          className={`favorit-btn ${esFavorit(criatura.id) ? "actiu" : ""}`}
          onClick={handleFavoritClick}
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
    </Link>
  );
}

export default EntitatCard;