import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Personatges from './pages/Personatges';
import Bestiari from './pages/Bestiari';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personatges" element={<Personatges />} />
        <Route path="/bestiari" element={<Bestiari />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;