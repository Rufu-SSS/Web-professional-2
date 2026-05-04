import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PersonatgesMain from './pages/PersonatgesMain';
import PersonatgesComplet from './pages/PersonatgesComplet';
import Personatges from './pages/Personatges';
import Personatges2 from './pages/Personatges2';
import BestiariMain from './pages/BestiariMain';
import BestiariComplet from './pages/BestiariComplet';
import Bestiari from './pages/Bestiari';
import Bestiari2 from './pages/Bestiari2';
import ScrollToTopButton from "./components/ScrollToTopButton";
import { FiltreProvider } from './context/FiltreContext';

function App() {
  return (
    <BrowserRouter>
      <FiltreProvider>
        <Navbar />
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />
          
          {/* Personatges - Lobby + temporades */}
          <Route path="/personatges" element={<PersonatgesMain />} />
          <Route path="/personatges/complet" element={<PersonatgesComplet />} />
          <Route path="/personatges/temporada1" element={<Personatges />} />
          <Route path="/personatges/temporada2" element={<Personatges2 />} />
          
          {/* Bestiari - Lobby + temporades */}
          <Route path="/bestiari" element={<BestiariMain />} />
          <Route path="/bestiari/complet" element={<BestiariComplet />} />
          <Route path="/bestiari/temporada1" element={<Bestiari />} />
          <Route path="/bestiari/temporada2" element={<Bestiari2 />} />
        </Routes>
        <ScrollToTopButton />
      </FiltreProvider>
    </BrowserRouter>
  );
}

export default App;