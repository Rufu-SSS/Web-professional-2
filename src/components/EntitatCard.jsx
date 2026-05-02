function EntitatCard({ criatura }) {
  return (
    <div className="card criatura">
      <img src={criatura.imatge} alt={criatura.nom} />
      <div className="card-info">
        <h2>{criatura.nom}</h2>
        <span className="badge">{criatura.tipus}</span>
        <p>{criatura.descripcio}</p>
        <p><b>💀 Com matar-la:</b> {criatura.comMatar}</p>
        <p><b>📺 Apareix a:</b> {criatura.apareixA}</p>
      </div>
    </div>
  );
}

export default EntitatCard;