import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Contatos from './pages/contatos1/Contatos';
import Header from './components/header/Header';
import ContatosD from './components/contatosdetal/ContatosD';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="/contatos/:id" element={<ContatosD />} />
      </Routes>

    </Router>
  );
}


export default App;
