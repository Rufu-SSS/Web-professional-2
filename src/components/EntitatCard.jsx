function EntitatCard({ criatura }) {
  return (
    <div className="card criatura">
      <img src={criatura.imatge} alt={criatura.nom} />
      <div className="card-info">
        <h2>{criatura.nom}</h2>

        {/* Tipus principals */}
        <div className="badges">
          {criatura.tipus.map((t, i) => (
            <span key={i} className="badge">{t}</span>
          ))}
        </div>

        <p>{criatura.descripcio}</p>
        <p><b>💀 Com matar-la:</b> {criatura.comMatar}</p>
        <p><b>📺 Apareix a:</b> {criatura.apareixA}</p>

        {/* Tags transversals */}
        <div className="badges tags">
          {criatura.tags.map((t, i) => (
            <span key={i} className="badge tag">{t}</span>
          ))}
        </div>

      </div>
    </div>
  );
}

export default EntitatCard;