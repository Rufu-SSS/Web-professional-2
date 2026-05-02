function Home() {
  return (
    <main>

      {/* Imatge gran de portada */}
      <div className="hero">
        <img src="/img/impala.jpg" alt="Impala a la carretera" className="hero-img" />
        <div className="hero-text">
          <h1>Supernatural</h1>
          <p>Primera temporada — 2005</p>
          <p className="hero-subtitol">Dos germans. Un cotxe. La carretera i tot allò que s'hi amaga.</p>
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

    </main>
  );
}

export default Home;