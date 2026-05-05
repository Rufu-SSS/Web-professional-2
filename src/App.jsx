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
import ScrollToTopButton from "./components/ScrollToTopButton";
import { FiltreProvider } from './context/FiltreContext';
import Episodis from "./pages/Episodis";

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
          
          {/* Episodis - DESCOMENTAT */}
          <Route path="/episodis" element={<Episodis />} />

          {/* Bestiari */}
          <Route path="/bestiari" element={<BestiariMain />} />
          <Route path="/bestiari/temporada1" element={<Bestiari />} />
          <Route path="/bestiari/temporada2" element={<Bestiari2 />} />
          <Route path="/bestiari/complet" element={<BestiariComplet />} />
        </Routes>
        <ScrollToTopButton />
      </FiltreProvider>
    </BrowserRouter>
  );
}

export default App;