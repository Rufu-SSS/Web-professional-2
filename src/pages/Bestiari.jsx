import { useState } from "react";
import { entitats } from "../data/entitats";
import EntitatCard from "../components/EntitatCard";

// Només T1
const entitatT1 = entitats.filter(e => e.temporada === 1);

function Bestiari() {
  const { temporadaActiva } = useFiltre(); // ← agafa el filtre global
  const [filtreActiu, setFiltreActiu] = useState("Tots");
  const [tagActiu, setTagActiu]       = useState("Tots");
  const [cerca, setCerca]             = useState("");

  // Filtra per temporada global + filtres locals
  const entitatsFiltrades = entitats.filter(e => {
    const coincideixTemporada = temporadaActiva === "Totes" || e.temporada === Number(temporadaActiva);
    const coincideixTipus     = filtreActiu === "Tots" || e.tipus.includes(filtreActiu);
    const coincideixTag       = tagActiu === "Tots"    || e.tags.includes(tagActiu);
    const coincideixCerca     = e.nom.toLowerCase().includes(cerca.toLowerCase());
    return coincideixTemporada && coincideixTipus && coincideixTag && coincideixCerca;
  });

  return (
    <main className="pagina">
      <h1>Bestiari — Temporada 1</h1>

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

export default Bestiari;