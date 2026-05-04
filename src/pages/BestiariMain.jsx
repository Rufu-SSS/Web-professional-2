import { Link } from "react-router-dom";

function BestiariMain() {
  return (
    <main className="pagina">
      <h1>Bestiari</h1>
      <p className="subtitol">Explora totes les criatures sobrenaturals</p>

      {/* Bloc principal - Totes les temporades */}
      <Link to="/bestiari/complet" className="opcio-card-principal">
        <h2>📖 Bestiari complet</h2>
        <p>Totes les criatures de totes les temporades</p>
        <span className="badge-complet">Temporada 1 + Temporada 2</span>
      </Link>

      <div className="opcions-bestiary">
        <Link to="/bestiari/temporada1" className="opcio-card">
          <h2>Temporada 1</h2>
          <p>Les criatures que van aparèixer a la primera temporada</p>
        </Link>

        <Link to="/bestiari/temporada2" className="opcio-card">
          <h2>Temporada 2</h2>
          <p>Les criatures que van aparèixer a la segona temporada</p>
        </Link>
      </div>

      <div className="info-box">
        <h3>Què trobaràs aquí?</h3>
        <p>
          Fantasmes, dimonis, esperits venjadors i altres criatures 
          sobrenaturals que els germans Winchester van enfrontar.
        </p>
      </div>
    </main>
  );
}

export default BestiariMain;