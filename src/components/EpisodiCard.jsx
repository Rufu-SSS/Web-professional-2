function EpisodiCard({ episodi }) {
  return (
    <div className="episodi-card">
      <span className="episodi-numero">{episodi.numero}</span>
      <div className="episodi-info">
        <h3>{episodi.titol}</h3>
        <p>{episodi.descripcio}</p>
      </div>
    </div>
  );
}

export default EpisodiCard;