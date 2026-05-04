import { useState, useMemo } from "react";
import { personatges } from "../data/personatges";
import PersonatgeCard from "../components/PersonatgeCard";
import { useFiltre } from "../context/FiltreContext";

function Personatges() {
  const { temporadaActiva } = useFiltre();
  const [rolActiu, setRolActiu] = useState("Tots");
  const [tagActiu, setTagActiu] = useState("Tots");
  const [cerca, setCerca] = useState("");

  // Obtenir rols i tags únics dels personatges
  const { rolsOptions, tagOptions } = useMemo(() => {
    const rolsSet = new Set();
    const tagsSet = new Set();
    personatges.forEach(p => {
      if (p.rol) rolsSet.add(p.rol);
      if (Array.isArray(p.tags)) p.tags.forEach(t => tagsSet.add(t));
    });
    return {
      rolsOptions: ["Tots", ...Array.from(rolsSet).sort()],
      tagOptions: ["Tots", ...Array.from(tagsSet).sort()]
    };
  }, []);

  const personatgesFiltrats = personatges.filter(p => {
    const coincideixTemporada = temporadaActiva === "Totes" || p.temporada === Number(temporadaActiva);
    const coincideixRol = rolActiu === "Tots" || p.rol === rolActiu;
    const coincideixTag = tagActiu === "Tots" || (p.tags && p.tags.includes(tagActiu));
    const coincideixCerca = p.nom.toLowerCase().includes(cerca.toLowerCase());
    return coincideixTemporada && coincideixRol && coincideixTag && coincideixCerca;
  });

  return (
    <main className="pagina">
      <h1>Personatges</h1>

      <input
        className="cercador"
        type="text"
        placeholder="Cerca un personatge..."
        value={cerca}
        onChange={e => setCerca(e.target.value)}
      />

      <p className="filtre-label">Rol:</p>
      <div className="filtres">
        {rolsOptions.map(r => (
          <button
            key={r}
            className={`filtre-btn ${rolActiu === r ? "actiu" : ""}`}
            onClick={() => setRolActiu(r)}
          >
            {r}
          </button>
        ))}
      </div>

      <p className="filtre-label">Tags:</p>
      <div className="filtres">
        {tagOptions.map(t => (
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