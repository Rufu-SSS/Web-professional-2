import { useState } from "react";
import { personatges } from "../data/personatges";
import PersonatgeCard from "../components/PersonatgeCard";

function Personatges() {
  const [rolActiu, setRolActiu]         = useState("Tots");
  const [temporadaActiva, setTemporada] = useState("Totes");
  const [cerca, setCerca]               = useState("");

  // Valors únics per als filtres
  const rols       = ["Tots", ...new Set(personatges.map(p => p.rol))];
  const temporades = ["Totes", "1", "2"];

  // Filtra per rol, temporada i cerca
  const personatgesFiltrats = personatges.filter(p => {
    const coincideixRol       = rolActiu === "Tots"   || p.rol === rolActiu;
    const coincideixTemporada = temporadaActiva === "Totes" || p.temporada.includes(Number(temporadaActiva));
    const coincideixCerca     = p.nom.toLowerCase().includes(cerca.toLowerCase());
    return coincideixRol && coincideixTemporada && coincideixCerca;
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