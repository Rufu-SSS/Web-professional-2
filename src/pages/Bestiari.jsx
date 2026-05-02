import { entitats } from "../data/entitats";
import EntitatCard from "../components/EntitatCard";

function Bestiari() {
  return (
    <main className="pagina">
      <h1>Bestiari — Temporada 1</h1>
      <div className="grid">
        {entitats.map(c => <EntitatCard key={c.id} criatura={c} />)}    
        </div>
        </main>
  );
}

export default Bestiari;