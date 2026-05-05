import { useState } from "react";
import { episodis } from "../data/episodis";
import EpisodiCard from "../components/EpisodiCard";
import "../styles/episodis.css"; // ← afegeix aquesta línia

function Episodis() {
  const [temporadaActiva, setTemporadaActiva] = useState("Totes");
  const [cerca, setCerca] = useState("");

  const episodisFiltrats = episodis.filter(e => {
    const coincideixTemporada = temporadaActiva === "Totes" || e.temporada === Number(temporadaActiva);
    const coincideixCerca = e.titol.toLowerCase().includes(cerca.toLowerCase()) ||
      e.descripcio.toLowerCase().includes(cerca.toLowerCase());
    return coincideixTemporada && coincideixCerca;
  });

  return (
    <main className="pagina">
      <h1>Episodis</h1>

      {/* Buscador */}
      <input
        className="cercador"
        type="text"
        placeholder="Cerca un episodi..."
        value={cerca}
        onChange={e => setCerca(e.target.value)}
      />

      {/* Filtre temporada */}
      <p className="filtre-label">Temporada:</p>
      <div className="filtres">
        {["Totes", "1", "2"].map(t => (
          <button
            key={t}
            className={`filtre-btn ${temporadaActiva === t ? "actiu" : ""}`}
            onClick={() => setTemporadaActiva(t)}
          >
            {t === "Totes" ? "Totes" : `Temporada ${t}`}
          </button>
        ))}
      </div>

      <p className="resultats">
        {episodisFiltrats.length} episodi{episodisFiltrats.length !== 1 ? "s" : ""} trobat{episodisFiltrats.length !== 1 ? "s" : ""}
      </p>

      <div className="episodis-llista">
        {episodisFiltrats.map(e => (
          <EpisodiCard key={e.id} episodi={e} />
        ))}
      </div>
    </main>
  );
}

export default Episodis;