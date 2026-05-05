// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PersonatgesMain from './pages/PersonatgesMain';
import Personatges from './pages/Personatges';
import Personatges2 from './pages/Personatges2';
import PersonatgesComplet from './pages/PersonatgesComplet';
import BestiariMain from './pages/BestiariMain';
import Bestiari from './pages/Bestiari';
import Bestiari2 from './pages/Bestiari2';
import BestiariComplet from './pages/BestiariComplet';
import Episodis from "./pages/Episodis";
import NotFound from './pages/NotFound'; // ← IMPORTANT: afegeix aquesta línia
import ScrollToTopButton from "./components/ScrollToTopButton";
import { FiltreProvider } from './context/FiltreContext';
<<<<<<< HEAD
import Favorits from './pages/Favorits';
=======
import Episodis from "./pages/Episodis";
>>>>>>> 1369e5f1d6f50de20e9fb37e21948764995a7ff2

function App() {
  return (
    <BrowserRouter>
      <FiltreProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Personatges */}
          <Route path="/personatges" element={<PersonatgesMain />} />
          <Route path="/personatges/temporada1" element={<Personatges />} />
          <Route path="/personatges/temporada2" element={<Personatges2 />} />
          <Route path="/personatges/complet" element={<PersonatgesComplet />} />
          
<<<<<<< HEAD
          {/* Episodis */}
=======
<<<<<<< HEAD
          {/* Episodis */}
=======
          {/* Episodis - DESCOMENTAT */}
>>>>>>> 4ae931d5d606cf4613b96d60ceeda068ee6add74
>>>>>>> 1369e5f1d6f50de20e9fb37e21948764995a7ff2
          <Route path="/episodis" element={<Episodis />} />

          {/* Bestiari */}
          <Route path="/bestiari" element={<BestiariMain />} />
          <Route path="/bestiari/temporada1" element={<Bestiari />} />
          <Route path="/bestiari/temporada2" element={<Bestiari2 />} />
          <Route path="/bestiari/complet" element={<BestiariComplet />} />
          
<<<<<<< HEAD
          <Route path="/favorits" element={<Favorits />} />

=======
>>>>>>> 1369e5f1d6f50de20e9fb37e21948764995a7ff2
          {/* Rota 404 - SEMPRE L'ÚLTIMA */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollToTopButton />
      </FiltreProvider>
    </BrowserRouter>
  );
}

export default App;