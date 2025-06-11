import { Link } from 'react-router-dom';
import './Header.css';
import Titulo from '../Titulo.js';

function Header() {
  return (
    <nav className="header">
      <Titulo>ConectBook</Titulo>
      <Link to="/">Início</Link>
      <Link to="/contatos">Contatos</Link>
    </nav>
  );
}


export default Header;