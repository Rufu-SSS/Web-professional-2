export const personatges = [
  {
    id: 1,
    nom: "Sam Winchester",
    actor: "Jared Padalecki",
    rol: "Caçador",
    temporada: [1, 2],
    descripcio: "El germà petit dels Winchester. Estudiant de dret que abandona la universitat per buscar el seu pare desaparegut.",
    habilitats: ["Intel·ligència, investigació", "Lluita cos a cos", "Coneixement de l'oculte"],
    imatge: "/img/sam.jpg"
  },
  {
    id: 2,
    nom: "Dean Winchester",
    actor: "Jensen Ackles",
    rol: "Caçador",
    temporada: [1, 2],
    descripcio: "El germà gran. Conductor de l'Impala i caçador experimentat, sarcàstic i protector.",
    habilitats: ["Combat", "Mecànica", "Armes de foc"],
    imatge: "/img/dean.jpg"
  },
  {
    id: 3,
    nom: "John Winchester",
    actor: "Jeffrey Dean Morgan",
    rol: "Caçador",
    temporada: [1, 2],
    descripcio: "El pare dels Winchester. Va convertir-se en caçador després que un dimoni matés la seva dona.",
    habilitats: ["Caça", "Estratègia", "Exorcismes"],
    imatge: "/img/john.jpg"
  },
  {
    id: 4,
    nom: "Bobby Singer",
    actor: "Jim Beaver",
    rol: "Aliat",
    temporada: [1, 2],
    descripcio: "Caçador veterà i figura paterna per als Winchester. Té un vast coneixement del sobrenatural i una biblioteca plena de llibres ocults.",
    habilitats: ["Investigació", "Mecànica", "Exorcismes", "Coneixement sobrenatural"],
    imatge: "/img/bobby.jpg"
  },
  {
    id: 5,
    nom: "Ellen Harvelle",
    actor: "Samantha Ferris",
    rol: "Aliat",
    temporada: [2],
    descripcio: "Propietària de la Roadhouse, un bar freqüentat per caçadors. Mare protectora i dona forta amb connexions al món de la caça.",
    habilitats: ["Combat", "Gestió d'informació", "Armes de foc"],
    imatge: "/img/ellen.jpg"
  },
  {
    id: 6,
    nom: "Jo Harvelle",
    actor: "Alona Tal",
    rol: "Aliat",
    temporada: [2],
    descripcio: "Filla d'Ellen. Jove i ambiciosa que vol ser caçadora com el seu pare mort. Té una relació complicada amb Dean.",
    habilitats: ["Combat", "Armes de foc", "Valentia"],
    imatge: "/img/jo.jpg"
  },
  {
    id: 7,
    nom: "Ash",
    actor: "Chad Lindberg",
    rol: "Aliat",
    temporada: [2],
    descripcio: "Geni informàtic que viu a la Roadhouse. Capaç de rastrejar activitat paranormal amb els seus programes.",
    habilitats: ["Informàtica", "Anàlisi de dades", "Rastreig sobrenatural"],
    imatge: "/img/ash.jpg"
  },
  {
    id: 8,
    nom: "Meg Masters",
    actor: "Nicki Aycox",
    rol: "Antagonista",
    temporada: [1, 2],
    descripcio: "Dimoni que posseeix una noia humana. Serveix Azazel i és una enemiga recurrent dels Winchester.",
    habilitats: ["Possessió", "Manipulació", "Poders infernals"],
    imatge: "/img/meg.jpg"
  },
  {
    id: 9,
    nom: "Azazel",
    actor: "Fredric Lehne",
    rol: "Antagonista",
    temporada: [1, 2],
    descripcio: "El dimoni d'ulls grocs. Responsable de la mort de Mary Winchester i amb un pla misteriós que implica nens amb poders psíquics.",
    habilitats: ["Possessió", "Poders infernals avançats", "Manipulació a llarg termini"],
    imatge: "/img/azazel.jpg"
  }
];
/*
  FENT ACTULAMENT
  useContext per compartir el filtre actiu entre pàgines 
  -> pàgina main (filtre temporades), pàgina T1 i pàgina T2 (no els cal filtre)

  EXTRA per fer
  Pàgina Episodis amb la llista de capítols per temporada
  Pàgina Cerca global que busqui alhora en personatges i entitats
  */