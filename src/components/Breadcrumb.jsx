import { Link, useLocation } from "react-router-dom";

function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(x => x);

  // Mapeig de noms llegibles
  const nomsMap = {
    "personatges": "Personatges",
    "bestiari": "Bestiari",
    "episodis": "Episodis",
    "favorits": "⭐ Favorits",
    "complet": "Complet",
    "temporada1": "Temporada 1",
    "temporada2": "Temporada 2"
  };

  if (pathnames.length === 0) return null;

  return (
    <div className="breadcrumb">
      <Link to="/">Inici</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const nomLlegible = nomsMap[name] || name;

        return (
          <span key={routeTo}>
            <span className="breadcrumb-separator"> › </span>
            {isLast ? (
              <span className="breadcrumb-actual">{nomLlegible}</span>
            ) : (
              <Link to={routeTo}>{nomLlegible}</Link>
            )}
          </span>
        );
      })}
    </div>
  );
}

export default Breadcrumb;