import { personatges } from '../data/personatges';
import PersonatgeCard from '../components/PersonatgeCard';

function Personatges() {
  return (
    <main className="pagina">
      <h1>Personatges — Temporada 1</h1>
      <div className="grid">
        {personatges.map(p => <PersonatgeCard key={p.id} personatge={p} />)}
      </div>
    </main>
  );
}

export default Personatges;