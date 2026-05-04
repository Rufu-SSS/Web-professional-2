import { useState } from "react";
import { personatges } from "../data/personatges";
import PersonatgeCard from "../components/PersonatgeCard";

// Filtra només els personatges que apareixen a la temporada 2
const personatgesT2 = personatges.filter(p => p.temporada.includes(2));

function Personatges2() {
  const [rolActiu, setRolActiu] = useState("Tots");
  const [cerca, setCerca]       = useState("");

  const rols = ["Tots", ...new Set(personatgesT2.map(p => p.rol))];

  const personatgesFiltrats = personatgesT2.filter(p => {
    const coincideixRol   = rolActiu === "Tots" || p.rol === rolActiu;
    const coincideixCerca = p.nom.toLowerCase().includes(cerca.toLowerCase());
    return coincideixRol && coincideixCerca;
  });

  return (
    <main className="pagina">
      <h1>Personatges — Temporada 2</h1>

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

export default Personatges2;