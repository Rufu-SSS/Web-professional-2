import { useFiltre } from "../context/FiltreContext";

function Home() {
  const { temporadaActiva, setTemporadaActiva } = useFiltre();
  return (
    <main>
      {/* Imatge gran de portada */}
      <div className="hero">
        <img src="/img/impala.jpg" alt="Impala a la carretera" className="hero-img" />
        <div className="hero-text">
          <h1>Supernatural</h1>
          <p>Primera temporada — 2005</p>
          <p>Segona temporada — 2006</p>
          <p className="hero-subtitol">Dos germans. Un cotxe. I totes les criatures que hi apareixen.</p>
        </div>
      </div>

      {/* Galeria d'imatges ambientals */}
      <section className="pagina">
        <h2 className="seccio-titol">L'ambient de la sèrie</h2>
        <div className="galeria">
          <img src="/img/carretera.jpg" alt="Carretera nocturna" />
          <img src="/img/bosc.jpg" alt="Bosc fosc" />
          <img src="/img/motel.jpg" alt="Motel de carretera" />
        </div>
      </section>
      <div className="filtres">
        {["Totes", "1", "2"].map(t => (
          <button
            key={t}
            className={`filtre-btn ${temporadaActiva === t ? "actiu" : ""}`}
            onClick={() => setTemporadaActiva(t)}
          >
            {t === "Totes" ? "Totes les temporades" : `Temporada ${t}`}
          </button>
        ))}
      </div>
    </main>
  );
}

export default Home;