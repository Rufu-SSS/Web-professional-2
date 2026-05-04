import { Link } from "react-router-dom";

function PersonatgesMain() {
  return (
    <main className="pagina">
      <h1>📋 Personatges</h1>
      <p className="subtitol">Selecciona quina temporada vols explorar</p>

      {/* Bloc principal - Compendio complet */}
      <Link to="/personatges/complet" className="opcio-card-principal">
        <h2>📖 Arxiu de personatges</h2>
        <p>Tots els personatges de totes les temporades</p>
        <span className="badge-complet">Temporada 1 + Temporada 2</span>
      </Link>

      <div className="opcions-personatges">
        <Link to="/personatges/temporada1" className="opcio-card">
          <h2>🎭 Temporada 1</h2>
          <p>Els personatges que van aparèixer a la primera temporada</p>
          <span className="badge-temporada">T1 - 2005</span>
        </Link>

        <Link to="/personatges/temporada2" className="opcio-card">
          <h2>🎭 Temporada 2</h2>
          <p>Els personatges que van aparèixer a la segona temporada</p>
          <span className="badge-temporada">T2 - 2006</span>
        </Link>
      </div>

      <div className="info-box">
        <h3>📌 Què és això?</h3>
        <p>
          Aquesta és la pàgina de selecció. Tria una opció per veure els personatges 
          de la temporada que vulguis. Pots accedir directament des del menú.
        </p>
      </div>
    </main>
  );
}

export default PersonatgesMain;