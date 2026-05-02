import { useState } from "react";
import { entitats } from "../data/entitats";
import EntitatCard from "../components/EntitatCard";

function Bestiari() {
  const [filtreActiu, setFiltreActiu] = useState("Tots");
  const [tagActiu, setTagActiu] = useState("Tots");

  // Obté tots els tipus únics
  const tipus = ["Tots", ...new Set(entitats.flatMap(e => e.tipus))];

  // Obté tots els tags únics
  const tags = ["Tots", ...new Set(entitats.flatMap(e => e.tags))];

  // Filtra per tipus i per tag alhora
  const entitatsFiltrades = entitats.filter(e => {
    const coincideixTipus = filtreActiu === "Tots" || e.tipus.includes(filtreActiu);
    const coincideixTag   = tagActiu === "Tots"    || e.tags.includes(tagActiu);
    return coincideixTipus && coincideixTag;
  });

  return (
    <main className="pagina">
      <h1>Bestiari — Temporada 1</h1>

      {/* Filtre per tipus */}
      <p className="filtre-label">Tipus:</p>
      <div className="filtres">
        {tipus.map(t => (
          <button
            key={t}
            className={`filtre-btn ${filtreActiu === t ? "actiu" : ""}`}
            onClick={() => setFiltreActiu(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Filtre per tags */}
      <p className="filtre-label">Tags:</p>
      <div className="filtres">
        {tags.map(t => (
          <button
            key={t}
            className={`filtre-btn tag ${tagActiu === t ? "actiu" : ""}`}
            onClick={() => setTagActiu(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Resum de resultats */}
      <p className="resultats">
        {entitatsFiltrades.length} criatura{entitatsFiltrades.length !== 1 ? "es" : ""} trobada{entitatsFiltrades.length !== 1 ? "es" : ""}
      </p>

      <div className="grid">
        {entitatsFiltrades.map(e => (
          <EntitatCard key={e.id} criatura={e} />
        ))}
      </div>
    </main>
  );
}

export default Bestiari;