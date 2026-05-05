import { useSearchParams } from "react-router-dom";
import { personatges } from "../data/personatges";
import { entitats } from "../data/entitats";
import { episodis } from "../data/episodis";
import PersonatgeCard from "../components/PersonatgeCard";
import EntitatCard from "../components/EntitatCard";
import EpisodiCard from "../components/EpisodiCard";
import "../styles/episodis.css";

function CercaGlobal() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const q = query.toLowerCase();

  const personatgesTrobats = personatges.filter(p =>
    p.nom.toLowerCase().includes(q) ||
    p.descripcio.toLowerCase().includes(q) ||
    p.rol.toLowerCase().includes(q)
  );

  const entitatsTrobades = entitats.filter(e =>
    e.nom.toLowerCase().includes(q) ||
    e.descripcio.toLowerCase().includes(q) ||
    e.tipus.some(t => t.toLowerCase().includes(q))
  );

  const episodisTrobats = episodis.filter(e =>
    e.titol.toLowerCase().includes(q) ||
    e.descripcio.toLowerCase().includes(q)
  );

  const totalResultats = personatgesTrobats.length + entitatsTrobades.length + episodisTrobats.length;

  if (!query) {
    return (
      <main className="pagina">
        <h1>Cerca global</h1>
        <p className="resultats">Escriu alguna cosa al cercador del navbar per buscar.</p>
      </main>
    );
  }

  return (
    <main className="pagina">
      <h1>Resultats per "{query}"</h1>
      <p className="resultats">{totalResultats} resultat{totalResultats !== 1 ? "s" : ""} trobat{totalResultats !== 1 ? "s" : ""}</p>

      {/* Personatges */}
      {personatgesTrobats.length > 0 && (
        <section>
          <h2 className="seccio-titol">Personatges ({personatgesTrobats.length})</h2>
          <div className="grid">
            {personatgesTrobats.map(p => (
              <PersonatgeCard key={p.id} personatge={p} />
            ))}
          </div>
        </section>
      )}

      {/* Entitats / Bestiari */}
      {entitatsTrobades.length > 0 && (
        <section>
          <h2 className="seccio-titol">Bestiari ({entitatsTrobades.length})</h2>
          <div className="grid">
            {entitatsTrobades.map(e => (
              <EntitatCard key={e.id} criatura={e} />
            ))}
          </div>
        </section>
      )}

      {/* Episodis */}
      {episodisTrobats.length > 0 && (
        <section>
          <h2 className="seccio-titol">Episodis ({episodisTrobats.length})</h2>
          <div className="episodis-llista">
            {episodisTrobats.map(e => (
              <EpisodiCard key={e.id} episodi={e} />
            ))}
          </div>
        </section>
      )}

      {/* Cap resultat */}
      {totalResultats === 0 && (
        <p className="resultats">No s'ha trobat res per "{query}".</p>
      )}
    </main>
  );
}

export default CercaGlobal;