import { useState } from "react";
import { entitats } from "../data/entitats";
import EntitatCard from "../components/EntitatCard";

// Filtra només les entitats de temporada 2
const entitatT2 = entitats.filter(e => e.temporada === 2);

function Bestiari2() {
  const [filtreActiu, setFiltreActiu] = useState("Tots");
  const [tagActiu, setTagActiu]       = useState("Tots");
  const [cerca, setCerca]             = useState("");

  const tipus = ["Tots", ...new Set(entitatT2.flatMap(e => e.tipus))];
  const tags  = ["Tots", ...new Set(entitatT2.flatMap(e => e.tags))];

  const entitatsFiltrades = entitatT2.filter(e => {
    const coincideixTipus = filtreActiu === "Tots" || e.tipus.includes(filtreActiu);
    const coincideixTag   = tagActiu   === "Tots" || e.tags.includes(tagActiu);
    const coincideixCerca = e.nom.toLowerCase().includes(cerca.toLowerCase());
    return coincideixTipus && coincideixTag && coincideixCerca;
  });

  return (
    <main className="pagina">
      <h1>Bestiari — Temporada 2</h1>

      {/* Buscador */}
      <input
        className="cercador"
        type="text"
        placeholder="Cerca una criatura..."
        value={cerca}
        onChange={e => setCerca(e.target.value)}
      />

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

export default Bestiari2;