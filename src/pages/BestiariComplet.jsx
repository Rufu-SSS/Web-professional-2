import { useState, useMemo } from "react";
import { entitats } from "../data/entitats";
import EntitatCard from "../components/EntitatCard";

function BestiariComplet() {
  const [filtreActiu, setFiltreActiu] = useState("Tots");
  const [tagActiu, setTagActiu] = useState("Tots");
  const [cerca, setCerca] = useState("");

  const { tipusOptions, tagOptions } = useMemo(() => {
    const tipusSet = new Set();
    const tagsSet = new Set();
    entitats.forEach(e => {
      if (Array.isArray(e.tipus)) e.tipus.forEach(t => tipusSet.add(t));
      if (Array.isArray(e.tags)) e.tags.forEach(t => tagsSet.add(t));
    });
    return {
      tipusOptions: ["Tots", ...Array.from(tipusSet).sort()],
      tagOptions: ["Tots", ...Array.from(tagsSet).sort()]
    };
  }, []);

  const entitatsFiltrades = entitats.filter(e => {
    const coincideixTipus = filtreActiu === "Tots" || (e.tipus && e.tipus.includes(filtreActiu));
    const coincideixTag = tagActiu === "Tots" || (e.tags && e.tags.includes(tagActiu));
    const coincideixCerca = e.nom.toLowerCase().includes(cerca.toLowerCase());
    return coincideixTipus && coincideixTag && coincideixCerca;
  });

  return (
    <main className="pagina">
      <h1>Bestiari complet - Totes les temporades</h1>

      <input
        className="cercador"
        type="text"
        placeholder="Cerca una criatura..."
        value={cerca}
        onChange={e => setCerca(e.target.value)}
      />

      <p className="filtre-label">Tipus:</p>
      <div className="filtres">
        {tipusOptions.map(t => (
          <button
            key={t}
            className={`filtre-btn ${filtreActiu === t ? "actiu" : ""}`}
            onClick={() => setFiltreActiu(t)}
          >
            {t}
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

export default BestiariComplet;