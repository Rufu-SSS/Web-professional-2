import { Link } from "react-router-dom";

function PersonatgesMain() {
  return (
    <main className="pagina">
      <h1>Personatges</h1>
      <p className="subtitol">Coneix tots els personatges de Supernatural</p>

      {/* Bloc principal - Compendio complet */}
      <Link to="/personatges/complet" className="opcio-card-principal">
        <h2>📖 Compendio complet</h2>
        <p>Tots els personatges de totes les temporades</p>
        <span className="badge-complet">Temporada 1 + Temporada 2</span>
      </Link>

      <div className="opcions-personatges">
        <Link to="/personatges/temporada1" className="opcio-card">
          <h2>Temporada 1</h2>
          <p>Els personatges que van aparèixer a la primera temporada</p>
        </Link>

        <Link to="/personatges/temporada2" className="opcio-card">
          <h2>Temporada 2</h2>
          <p>Els personatges que van aparèixer a la segona temporada</p>
        </Link>
      </div>

      <div className="info-box">
        <h3>Personatges principals</h3>
        <p>
          Sam i Dean Winchester, el seu pare John, l'caçador Bobby Singer 
          i altres aliats i enemics que van marcar la sèrie.
        </p>
      </div>
    </main>
  );
}

export default PersonatgesMain;