function PersonatgeCard({ personatge }) {
  return (
    <div className="card">
      <img src={personatge.imatge} alt={personatge.nom} />
      <div className="card-info">
        <h2>{personatge.nom}</h2>
        <p className="actor">Interpretat per {personatge.actor}</p>
        <p>{personatge.descripcio}</p>
        <ul>
          {personatge.habilitats.map((h, i) => <li key={i}>⚔️ {h}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default PersonatgeCard;