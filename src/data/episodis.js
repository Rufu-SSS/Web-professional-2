export const episodis = [
  // ── TEMPORADA 1 ──────────────────────────────────────────────────────────
  { 
    id: 1, temporada: 1, numero: "T1E01", titol: "Pilot",
    descripcio: "Sam i Dean Winchester es reuneixen per buscar el seu pare desaparegut i s'enfronten a la Dona en Blanc.",
    dataEstrena: "13 de setembre de 2005", durada: "45 min", valoracio: "8.5",
    personatges: [
      { id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" },
      { id: 3, nom: "John Winchester" }, { id: 4, nom: "Jessica Moore" }
    ],
    entitats: [{ id: 1, nom: "Dona de Blanc", tipus: "Fantasma" }],
    curiositats: ["L'episodi pilot va ser filmat a Los Angeles", "La cançó 'Carry On Wayward Son' encara no sonava"]
  },
  { 
    id: 2, temporada: 1, numero: "T1E02", titol: "Wendigo",
    descripcio: "Els germans investiguen la desaparició de campistes en un bosc de Colorado causada per un Wendigo.",
    dataEstrena: "20 de setembre de 2005", durada: "45 min", valoracio: "7.8",
    personatges: [
      { id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" },
      { id: 5, nom: "Haley Collins" }
    ],
    entitats: [{ id: 2, nom: "Wendigo", tipus: "Criatura" }],
    curiositats: ["El Wendigo és una criatura de la mitologia algonquina", "Primer episodi filmat a Vancouver"]
  },
  { 
    id: 3, temporada: 1, numero: "T1E03", titol: "Dead in the Water",
    descripcio: "Un esperit misteriós mata persones en un llac d'un petit poble de Wisconsin.",
    dataEstrena: "27 de setembre de 2005", durada: "45 min", valoracio: "7.5",
    personatges: [{ id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" }],
    entitats: [{ id: 3, nom: "Esperit venjatiu", tipus: "Fantasma" }],
    curiositats: ["Dean mostra connexió especial amb nens que han patit traumes"]
  },
  { 
    id: 4, temporada: 1, numero: "T1E04", titol: "Phantom Traveler",
    descripcio: "Un dimoni causa accidents d'avió possessionant passatgers amb por a volar.",
    dataEstrena: "4 d'octubre de 2005", durada: "45 min", valoracio: "7.2",
    personatges: [
      { id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" },
      { id: 6, nom: "Jerry Panowski" }
    ],
    entitats: [{ id: 4, nom: "Dimoni", tipus: "Esperit corrupte" }],
    curiositats: ["Primera aparició d'un dimoni a la sèrie", "Dean té por de volar"]
  },
  { 
    id: 5, temporada: 1, numero: "T1E05", titol: "Bloody Mary",
    descripcio: "La llegenda de Bloody Mary cobra vida i mata persones que guarden secrets de mort.",
    dataEstrena: "11 d'octubre de 2005", durada: "45 min", valoracio: "7.9",
    personatges: [
      { id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" },
      { id: 7, nom: "Charlie" }
    ],
    entitats: [{ id: 5, nom: "Bloody Mary", tipus: "Esperit llegendari" }],
    curiositats: ["Sam revela el seu secret sobre la mort de Jessica", "Basada en la llegenda urbana clàssica"]
  },
  { 
    id: 6, temporada: 1, numero: "T1E06", titol: "Skin",
    descripcio: "Un cambiaformes pren l'aparença de Dean per cometre crims i el converteix en fugitiu.",
    dataEstrena: "18 d'octubre de 2005", durada: "45 min", valoracio: "8.0",
    personatges: [
      { id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" },
      { id: 8, nom: "Zach" }
    ],
    entitats: [{ id: 6, nom: "Cambiaformes", tipus: "Mutant" }],
    curiositats: ["Primera vegada que Dean és buscat per l'FBI", "Els cambiaformes deixen la seva pell en despullar-se"]
  },
  { 
    id: 7, temporada: 1, numero: "T1E07", titol: "Hook Man",
    descripcio: "L'esperit d'un assassí amb un ganxo mata parelles joves en llocs apartats.",
    dataEstrena: "25 d'octubre de 2005", durada: "45 min", valoracio: "7.3",
    personatges: [{ id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" }],
    entitats: [{ id: 7, nom: "Hook Man", tipus: "Esperit venjatiu" }],
    curiositats: ["Basat en la llegenda urbana del 'Home del Ganxo'", "L'arma és un ganxo de carnisser"]
  },
  { 
    id: 8, temporada: 1, numero: "T1E08", titol: "Bugs",
    descripcio: "Una plaga d'insectes s'apodera d'una urbanització construïda sobre terres natives americanes.",
    dataEstrena: "8 de novembre de 2005", durada: "45 min", valoracio: "6.5",
    personatges: [{ id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" }],
    entitats: [{ id: 8, nom: "Maledicció índia", tipus: "Maledicció" }],
    curiositats: ["Considerat un dels pitjors episodis pels fans", "Va requerir 20.000 insectes reals"]
  },
  { 
    id: 9, temporada: 1, numero: "T1E09", titol: "Home",
    descripcio: "Els Winchester tornen a la seva casa de Lawrence per investigar activitat paranormal.",
    dataEstrena: "15 de novembre de 2005", durada: "45 min", valoracio: "8.2",
    personatges: [
      { id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" },
      { id: 9, nom: "Missouri Moseley" }
    ],
    entitats: [{ id: 9, nom: "Poltergeist", tipus: "Esperit" }],
    curiositats: ["Primera aparició de Missouri Moseley", "Revelen que Mary Winchester és un fantasma protector"]
  },
  { 
    id: 10, temporada: 1, numero: "T1E10", titol: "Asylum",
    descripcio: "Un asil abandonat allotja les ànimes torturades dels seus antics pacients.",
    dataEstrena: "22 de novembre de 2005", durada: "45 min", valoracio: "8.1",
    personatges: [{ id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" }],
    entitats: [{ id: 10, nom: "Dr. Ellicott", tipus: "Esperit" }],
    curiositats: ["Dean revela el seu resentiment cap a John", "Final alternatiu on Dean mata Sam"]
  },
  { 
    id: 11, temporada: 1, numero: "T1E11", titol: "Scarecrow",
    descripcio: "Un déu pagà en forma d'espantaocells rep sacrificis humans d'una comunitat rural.",
    dataEstrena: "10 de gener de 2006", durada: "45 min", valoracio: "8.3",
    personatges: [
      { id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" },
      { id: 10, nom: "Meg Masters" }
    ],
    entitats: [{ id: 11, nom: "Déu pagà", tipus: "Deïtat" }],
    curiositats: ["Primera aparició de Meg", "Sam i Dean treballen per separat per primer cop"]
  },
  { 
    id: 12, temporada: 1, numero: "T1E12", titol: "Faith",
    descripcio: "Dean és guarit per un curandero que utilitza un Reaper per curar malalts a canvi de vides alienes.",
    dataEstrena: "17 de gener de 2006", durada: "45 min", valoracio: "8.7",
    personatges: [
      { id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" },
      { id: 11, nom: "Layla Rourke" }
    ],
    entitats: [{ id: 12, nom: "Reaper", tipus: "Àngel de la mort" }],
    curiositats: ["Dean experimenta la culpa del supervivent", "Primera referència als àngels"]
  },
  { 
    id: 13, temporada: 1, numero: "T1E13", titol: "Route 666",
    descripcio: "Un camió fantasma mata persones racistes a Missouri, guiat per un esperit venjatiu.",
    dataEstrena: "24 de gener de 2006", durada: "45 min", valoracio: "7.0",
    personatges: [
      { id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" },
      { id: 12, nom: "Cassie Robinson" }
    ],
    entitats: [{ id: 13, nom: "Camió fantasma", tipus: "Objecte posseït" }],
    curiositats: ["Dean va tenir una relació interracial amb Cassie", "Tracta temes de racisme"]
  },
  { 
    id: 14, temporada: 1, numero: "T1E14", titol: "Nightmare",
    descripcio: "Sam té visions d'un noi amb poders psíquics que mata la seva família.",
    dataEstrena: "31 de gener de 2006", durada: "45 min", valoracio: "8.0",
    personatges: [
      { id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" },
      { id: 13, nom: "Max Miller" }
    ],
    entitats: [{ id: 4, nom: "Azazel", tipus: "Dimoni d'ulls grocs" }],
    curiositats: ["Sam descobreix els seus poders psíquics", "Azazel apareix a les visions"]
  },
  { 
    id: 15, temporada: 1, numero: "T1E15", titol: "The Benders",
    descripcio: "Els Winchester descobreixen que el monstre que busquen és humà: una família que caça persones.",
    dataEstrena: "7 de febrer de 2006", durada: "45 min", valoracio: "7.9",
    personatges: [{ id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" }],
    entitats: [], // Són humans normals
    curiositats: ["El monstre més terrorífic és humà", "No hi ha elements sobrenaturals reals"]
  },
  { 
    id: 16, temporada: 1, numero: "T1E16", titol: "Shadow",
    descripcio: "Meg torna i utilitza criatures de les ombres per atrapar els Winchester i el seu pare.",
    dataEstrena: "28 de febrer de 2006", durada: "45 min", valoracio: "8.1",
    personatges: [
      { id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" },
      { id: 3, nom: "John Winchester" }, { id: 10, nom: "Meg Masters" }
    ],
    entitats: [{ id: 14, nom: "Daevas", tipus: "Criatures d'ombra" }],
    curiositats: ["Reunió dels Winchester", "John revela que Meg és un dimoni"]
  },
  { 
    id: 17, temporada: 1, numero: "T1E17", titol: "Hell House",
    descripcio: "Una llegenda urbana cobra vida real gràcies a la creença col·lectiva d'internet.",
    dataEstrena: "30 de març de 2006", durada: "45 min", valoracio: "7.6",
    personatges: [
      { id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" },
      { id: 14, nom: "Ed Zeddmore" }, { id: 15, nom: "Harry Spangler" }
    ],
    entitats: [{ id: 15, nom: "Tulpa", tipus: "Manifestació" }],
    curiositats: ["Primera aparició de Hell Hounds (caçadors aficionats)", "El poder de la creença crea monstres"]
  },
  { 
    id: 18, temporada: 1, numero: "T1E18", titol: "Something Wicked",
    descripcio: "Una Shtriga que s'alimenta de nens porta Dean a reviure un trauma del passat.",
    dataEstrena: "6 d'abril de 2006", durada: "45 min", valoracio: "8.4",
    personatges: [
      { id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" },
      { id: 16, nom: "Michael" }
    ],
    entitats: [{ id: 16, nom: "Shtriga", tipus: "Bruixa vampírica" }],
    curiositats: ["Flashback de Dean de nen", "Revelen que John va deixar els nens sols"]
  },
  { 
    id: 19, temporada: 1, numero: "T1E19", titol: "Provenance",
    descripcio: "Un quadre antic allotja l'esperit d'una nena assassina que mata els seus propietaris.",
    dataEstrena: "13 d'abril de 2006", durada: "45 min", valoracio: "7.4",
    personatges: [{ id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" }],
    entitats: [{ id: 17, nom: "Sarah", tipus: "Esperit infantil" }],
    curiositats: ["Sam s'enamora de Sarah", "El quadre va ser pintat per a l'episodi"]
  },
  { 
    id: 20, temporada: 1, numero: "T1E20", titol: "Dead Man's Blood",
    descripcio: "Els Winchester s'uneixen al seu pare per caçar vampirs i obtenir el Colt.",
    dataEstrena: "20 d'abril de 2006", durada: "45 min", valoracio: "8.2",
    personatges: [
      { id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" },
      { id: 3, nom: "John Winchester" }
    ],
    entitats: [{ id: 18, nom: "Vampirs", tipus: "No-morts" }],
    curiositats: ["Descobreixen el Colt (pistola que pot matar qualsevol cosa)", "Diferent dels vampirs tradicionals"]
  },
  { 
    id: 21, temporada: 1, numero: "T1E21", titol: "Salvation",
    descripcio: "Els Winchester localitzen Azazel i fan plans per enfrontar-se al dimoni d'ulls grocs.",
    dataEstrena: "27 d'abril de 2006", durada: "45 min", valoracio: "8.6",
    personatges: [
      { id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" },
      { id: 3, nom: "John Winchester" }
    ],
    entitats: [{ id: 4, nom: "Azazel", tipus: "Dimoni d'ulls grocs" }],
    curiositats: ["Prepels per la batalla final", "Jessica apareix a una visió de Sam"]
  },
  { 
    id: 22, temporada: 1, numero: "T1E22", titol: "Devil's Trap",
    descripcio: "Azazel posseeix John Winchester i els Germans s'enfronten al seu pitjor enemic.",
    dataEstrena: "4 de maig de 2006", durada: "45 min", valoracio: "9.0",
    personatges: [
      { id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" },
      { id: 3, nom: "John Winchester" }
    ],
    entitats: [{ id: 4, nom: "Azazel", tipus: "Dimoni d'ulls grocs" }],
    curiositats: ["John es sacrifica per Dean", "Final amb cliffhanger del camió"]
  },

  // ── TEMPORADA 2 ──────────────────────────────────────────────────────────
  { 
    id: 23, temporada: 2, numero: "T2E01", titol: "In My Time of Dying",
    descripcio: "Dean lluita entre la vida i la mort mentre John pren una decisió devastadora per salvar-lo.",
    dataEstrena: "28 de setembre de 2006", durada: "45 min", valoracio: "9.1",
    personatges: [
      { id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" },
      { id: 3, nom: "John Winchester" }, { id: 17, nom: "Tessa" }
    ],
    entitats: [{ id: 12, nom: "Reaper", tipus: "Àngel de la mort" }],
    curiositats: ["John es sacrifica pel Colt", "Dean té una experiència propera a la mort"]
  },
  { 
    id: 24, temporada: 2, numero: "T2E02", titol: "Everybody Loves a Clown",
    descripcio: "Els germans investiguen un pallasso sobrenatural que mata els pares de nens innocents.",
    dataEstrena: "5 d'octubre de 2006", durada: "45 min", valoracio: "7.8",
    personatges: [
      { id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" },
      { id: 18, nom: "Ellen Harvelle" }, { id: 19, nom: "Jo Harvelle" }
    ],
    entitats: [{ id: 19, nom: "Rakshasa", tipus: "Dimoni pallasso" }],
    curiositats: ["Primera aparició de Ellen i Jo", "Dean no supera la mort de John"]
  },
  { 
    id: 25, temporada: 2, numero: "T2E03", titol: "Bloodlust",
    descripcio: "Els Winchester descobreixen un clan de vampirs que intenten viure sense matar humans.",
    dataEstrena: "12 d'octubre de 2006", durada: "45 min", valoracio: "8.3",
    personatges: [
      { id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" },
      { id: 20, nom: "Gordon Walker" }
    ],
    entitats: [{ id: 18, nom: "Vampirs", tipus: "No-morts" }],
    curiositats: ["Primers vampirs 'bons'", "Gordon es converteix en antagonista"]
  },
  { 
    id: 26, temporada: 2, numero: "T2E04", titol: "Children Shouldn't Play with Dead Things",
    descripcio: "Un noi ressuscita la seva nòvia morta amb màgia negra amb conseqüències terribles.",
    dataEstrena: "19 d'octubre de 2006", durada: "45 min", valoracio: "7.7",
    personatges: [{ id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" }],
    entitats: [{ id: 20, nom: "Zombie", tipus: "No-morts" }],
    curiositats: ["Dean plora per primera vegada per John"]
  },
  { 
    id: 27, temporada: 2, numero: "T2E05", titol: "Simon Said",
    descripcio: "Sam coneix un altre nen psíquic amb el poder de controlar la ment de les persones.",
    dataEstrena: "26 d'octubre de 2006", durada: "45 min", valoracio: "8.0",
    personatges: [
      { id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" },
      { id: 21, nom: "Andy Gallagher" }
    ],
    entitats: [{ id: 4, nom: "Azazel", tipus: "Dimoni d'ulls grocs" }],
    curiositats: ["Sam coneix un altre nen especial", "El poder de la persuasió"]
  },
  { 
    id: 28, temporada: 2, numero: "T2E06", titol: "No Exit",
    descripcio: "Jo Harvelle s'uneix als Winchester per investigar l'esperit del primer assassí en sèrie dels EUA.",
    dataEstrena: "2 de novembre de 2006", durada: "45 min", valoracio: "7.6",
    personatges: [
      { id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" },
      { id: 19, nom: "Jo Harvelle" }
    ],
    entitats: [{ id: 21, nom: "H.H. Holmes", tipus: "Esperit" }],
    curiositats: ["Basat en un assassí en sèrie real", "Primera cacera de Jo"]
  },
  { 
    id: 29, temporada: 2, numero: "T2E07", titol: "The Usual Suspects",
    descripcio: "Dean és arrestat per assassinat mentre investiga un fantasma que guia les víctimes cap a la veritat.",
    dataEstrena: "9 de novembre de 2006", durada: "45 min", valoracio: "8.2",
    personatges: [
      { id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" },
      { id: 22, nom: "Diana Ballard" }
    ],
    entitats: [{ id: 10, nom: "Esperit", tipus: "Fantasma" }],
    curiositats: ["Henriksen comença a perseguir els Winchester", "Narració no lineal"]
  },
  { 
    id: 30, temporada: 2, numero: "T2E08", titol: "Crossroad Blues",
    descripcio: "Els Winchester descobreixen dimonis de les cruïlles que fan pactes a canvi d'ànimes.",
    dataEstrena: "16 de novembre de 2006", durada: "45 min", valoracio: "8.5",
    personatges: [{ id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" }],
    entitats: [{ id: 22, nom: "Dimoni de cruïlla", tipus: "Dimoni" }],
    curiositats: ["Inspirat en Robert Johnson (guitarrista)", "Dean sap que pot reviure John"]
  },
  { 
    id: 31, temporada: 2, numero: "T2E09", titol: "Croatoan",
    descripcio: "Un virus demoníac transforma els habitants d'un poble en assassins violents.",
    dataEstrena: "7 de desembre de 2006", durada: "45 min", valoracio: "8.1",
    personatges: [{ id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" }],
    entitats: [{ id: 4, nom: "Azazel", tipus: "Dimoni d'ulls grocs" }],
    curiositats: ["Referència a la colònia perduda de Roanoke", "Sam és immune al virus"]
  },
  { 
    id: 32, temporada: 2, numero: "T2E10", titol: "Hunted",
    descripcio: "Sam és caçat per un caçador que vol eliminar tots els nens psíquics d'Azazel.",
    dataEstrena: "11 de gener de 2007", durada: "45 min", valoracio: "8.3",
    personatges: [
      { id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" },
      { id: 20, nom: "Gordon Walker" }, { id: 23, nom: "Ava Wilson" }
    ],
    entitats: [{ id: 4, nom: "Azazel", tipus: "Dimoni d'ulls grocs" }],
    curiositats: ["Gordon es torna boig", "Sam confia en Dean"]
  },
  { 
    id: 33, temporada: 2, numero: "T2E11", titol: "Playthings",
    descripcio: "Un hotel antic allotja esperits que es manifesten a través de les joguines d'una nena.",
    dataEstrena: "18 de gener de 2007", durada: "45 min", valoracio: "7.5",
    personatges: [{ id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" }],
    entitats: [{ id: 24, nom: "Esperits protectors", tipus: "Fantasma" }],
    curiositats: ["Episodi més atmosfèric", "Joguines posseïdes"]
  },
  { 
    id: 34, temporada: 2, numero: "T2E12", titol: "Nightshifter",
    descripcio: "Un cambiaformes atrapa Dean en un banc i el converteix de nou en fugitiu del FBI.",
    dataEstrena: "25 de gener de 2007", durada: "45 min", valoracio: "8.8",
    personatges: [
      { id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" },
      { id: 22, nom: "Diana Ballard" }
    ],
    entitats: [{ id: 6, nom: "Cambiaformes", tipus: "Mutant" }],
    curiositats: ["Dean es disfressa de Ronald", "La cançó 'Renegade' sona al final"]
  },
  { 
    id: 35, temporada: 2, numero: "T2E13", titol: "Houses of the Holy",
    descripcio: "Un àngel sembla ordenar assassinats, però els Winchester dubten de la seva existència.",
    dataEstrena: "1 de febrer de 2007", durada: "45 min", valoracio: "8.0",
    personatges: [{ id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" }],
    entitats: [{ id: 25, nom: "Àngel", tipus: "Ésser celestial" }],
    curiositats: ["Debat sobre l'existència dels àngels", "Sam creu en àngels, Dean no"]
  },
  { 
    id: 36, temporada: 2, numero: "T2E14", titol: "Born Under a Bad Sign",
    descripcio: "Sam és posseït per Meg i ataca Dean i altres caçadors sense recordar res.",
    dataEstrena: "8 de febrer de 2007", durada: "45 min", valoracio: "8.7",
    personatges: [
      { id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" },
      { id: 10, nom: "Meg Masters" }, { id: 18, nom: "Ellen Harvelle" }
    ],
    entitats: [{ id: 4, nom: "Meg", tipus: "Dimoni" }],
    curiositats: ["Sam posseït és terrorífic", "Meg sobreviu"]
  },
  { 
    id: 37, temporada: 2, numero: "T2E15", titol: "Tall Tales",
    descripcio: "El Trickster manipula la realitat al voltant dels Winchester creant situacions absurdes.",
    dataEstrena: "15 de febrer de 2007", durada: "45 min", valoracio: "8.9",
    personatges: [
      { id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" },
      { id: 24, nom: "Trickster" }
    ],
    entitats: [{ id: 26, nom: "Trickster", tipus: "Ésser mitològic" }],
    curiositats: ["Episodi còmic", "Narració exagerada des de diferents punts de vista"]
  },
  { 
    id: 38, temporada: 2, numero: "T2E16", titol: "Roadkill",
    descripcio: "Una dona atrapada en un bucle temporal reviu la nit del seu accident cada any.",
    dataEstrena: "15 de març de 2007", durada: "45 min", valoracio: "8.1",
    personatges: [{ id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" }],
    entitats: [{ id: 27, nom: "Esperit perdut", tipus: "Fantasma" }],
    curiositats: ["Final emotiu", "La dona no sabia que estava morta"]
  },
  { 
    id: 39, temporada: 2, numero: "T2E17", titol: "Heart",
    descripcio: "Sam s'enamora d'una noia que descobreix que és una llicantrop sense saber-ho.",
    dataEstrena: "22 de març de 2007", durada: "45 min", valoracio: "8.4",
    personatges: [
      { id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" },
      { id: 25, nom: "Madison" }
    ],
    entitats: [{ id: 28, nom: "Home Llop", tipus: "Licantrop" }],
    curiositats: ["Sam ha de matar la noia que estima", "Final tràgic"]
  },
  { 
    id: 40, temporada: 2, numero: "T2E18", titol: "Hollywood Babylon",
    descripcio: "Els Winchester investiguen morts misterioses al plató d'una pel·lícula de terror a Hollywood.",
    dataEstrena: "19 d'abril de 2007", durada: "45 min", valoracio: "7.4",
    personatges: [{ id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" }],
    entitats: [{ id: 29, nom: "Esperit envejós", tipus: "Fantasma" }],
    curiositats: ["Sàtira de Hollywood", "Referències a pel·lícules de terror"]
  },
  { 
    id: 41, temporada: 2, numero: "T2E19", titol: "Folsom Prison Blues",
    descripcio: "Dean i Sam es deixen arrestar per investigar un esperit assassí dins d'una presó.",
    dataEstrena: "26 d'abril de 2007", durada: "45 min", valoracio: "8.0",
    personatges: [
      { id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" },
      { id: 27, nom: "Deacon" }
    ],
    entitats: [{ id: 30, nom: "Esperit presoner", tipus: "Fantasma" }],
    curiositats: ["Henriksen gairebé els atrapar", "Els caçadors ajuden des de dins"]
  },
  { 
    id: 42, temporada: 2, numero: "T2E20", titol: "What Is and What Should Never Be",
    descripcio: "Una Djinn atrapa Dean en una realitat alternativa on la seva mare mai no va morir.",
    dataEstrena: "3 de maig de 2007", durada: "45 min", valoracio: "9.2",
    personatges: [
      { id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" },
      { id: 4, nom: "Jessica Moore" }
    ],
    entitats: [{ id: 31, nom: "Djinn", tipus: "Geni" }],
    curiositats: ["Dean vol quedar-se a la realitat falsa", "Final on Dean escull la realitat real"]
  },
  { 
    id: 43, temporada: 2, numero: "T2E21", titol: "All Hell Breaks Loose (Part 1)",
    descripcio: "Azazel rapta tots els nens psíquics i els enfronta en un poble abandonat.",
    dataEstrena: "10 de maig de 2007", durada: "45 min", valoracio: "9.3",
    personatges: [
      { id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" },
      { id: 21, nom: "Andy Gallagher" }, { id: 23, nom: "Ava Wilson" }
    ],
    entitats: [{ id: 4, nom: "Azazel", tipus: "Dimoni d'ulls grocs" }],
    curiositats: ["Sam mor apunyalat per Jake", "Dean destrossat"]
  },
  { 
    id: 44, temporada: 2, numero: "T2E22", titol: "All Hell Breaks Loose (Part 2)",
    descripcio: "Dean fa un pacte amb un dimoni per salvar Sam i les portes de l'infern s'obren.",
    dataEstrena: "17 de maig de 2007", durada: "45 min", valoracio: "9.5",
    personatges: [
      { id: 1, nom: "Sam Winchester" }, { id: 2, nom: "Dean Winchester" },
      { id: 28, nom: "Jake Talley" }
    ],
    entitats: [{ id: 4, nom: "Azazel", tipus: "Dimoni d'ulls grocs" }, { id: 32, nom: "Exèrcit Demoníac", tipus: "Dimonis" }],
    curiositats: ["Dean ven la seva ànima per Sam", "Azazel mor", "Portes de l'infern s'obren", "Final de temporada èpic"]
  }
];