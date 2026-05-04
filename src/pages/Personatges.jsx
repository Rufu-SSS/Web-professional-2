import { useState } from "react";
import { personatges } from "../data/personatges";
import PersonatgeCard from "../components/PersonatgeCard";
import { useFiltre } from "../context/FiltreContext";

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
      <h1>Personatges</h1>

      {/* Buscador */}
      <input
        className="cercador"
        type="text"
        placeholder="Cerca un personatge..."
        value={cerca}
        onChange={e => setCerca(e.target.value)}
      />

      {/* Filtre per rol */}
      <p className="filtre-label">Rol:</p>
      <div className="filtres">
        {rols.map(r => (
          <button
            key={r}
            className={`filtre-btn ${rolActiu === r ? "actiu" : ""}`}
            onClick={() => setRolActiu(r)}
          >
            {r}
          </button>
        ))}
      </div>

      {/* Filtre per temporada */}
      <p className="filtre-label">Temporada:</p>
      <div className="filtres">
        {temporades.map(t => (
          <button
            key={t}
            className={`filtre-btn ${temporadaActiva === t ? "actiu" : ""}`}
            onClick={() => setTemporada(t)}
          >
            {t === "Totes" ? "Totes" : `T${t}`}
          </button>
        ))}
      </div>

      {/* Resum de resultats */}
      <p className="resultats">
        {personatgesFiltrats.length} personatge{personatgesFiltrats.length !== 1 ? "s" : ""} trobat{personatgesFiltrats.length !== 1 ? "s" : ""}
      </p>

      <div className="grid">
        {personatgesFiltrats.map(p => (
          <PersonatgeCard key={p.id} personatge={p} />
        ))}
      </div>
    </main>
  );
}

export default Personatges;