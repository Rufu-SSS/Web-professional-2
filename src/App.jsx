import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Personatges from './pages/Personatges';
import Bestiari from './pages/Bestiari';
import Bestiari2    from "./pages/Bestiari2";
import Personatges2 from "./pages/Personatges2";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { FiltreProvider } from './context/FiltreContext';

function App() {
  return (
    <BrowserRouter>
      <FiltreProvider>  {/* ← embolcalla tot */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personatges"  element={<Personatges />} />
          <Route path="/personatges2" element={<Personatges2 />} />
          <Route path="/bestiari"     element={<Bestiari />} />
          <Route path="/bestiari2"    element={<Bestiari2 />} />
        </Routes>
        <ScrollToTopButton />
      </FiltreProvider>
    </BrowserRouter>
  );
}

export default App;