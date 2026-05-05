import { personatges } from "../data/personatges";
import { entitats } from "../data/entitats";
import { useFavorits } from "../hooks/useFavorits";
import PersonatgeCard from "../components/PersonatgeCard";
import EntitatCard from "../components/EntitatCard";

function Favorits() {
  const { favorits: favoritsPersonatges } = useFavorits("favoritsPersonatges");
  const { favorits: favoritsEntitats } = useFavorits("favoritsEntitats");

  const personatgesFavorits = personatges.filter(p => favoritsPersonatges.includes(p.id));
  const entitatsFavorits = entitats.filter(e => favoritsEntitats.includes(e.id));

  const totalFavorits = personatgesFavorits.length + entitatsFavorits.length;

  return (
    <main className="pagina">
      <h1>⭐ Els teus favorits</h1>
      
      {totalFavorits === 0 && (
        <div className="info-box">
          <p>Encara no tens favorits. Fes clic a l'estrella ⭐ de qualsevol personatge o criatura per guardar-los aquí!</p>
        </div>
      )}

      {personatgesFavorits.length > 0 && (
        <>
          <h2>👥 Personatges ({personatgesFavorits.length})</h2>
          <div className="grid">
            {personatgesFavorits.map(p => (
              <PersonatgeCard key={p.id} personatge={p} />
            ))}
          </div>
        </>
      )}

      {entitatsFavorits.length > 0 && (
        <>
          <h2>🐉 Criatures ({entitatsFavorits.length})</h2>
          <div className="grid">
            {entitatsFavorits.map(e => (
              <EntitatCard key={e.id} criatura={e} />
            ))}
          </div>
        </>
      )}
    </main>
  );
}

export default Favorits;