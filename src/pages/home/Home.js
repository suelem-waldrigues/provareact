import { Link } from 'react-router-dom';
import Titulo from '../../components/Titulo';
import Botao from '../../components/Botao'
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Titulo>Bem-vindo ao ConectBook!</Titulo>
      <p>Gerencie e visualize seus contatos de forma prática.</p>
      <Botao><Link to="/contatos">Visualizar Contatos</Link></Botao>
    </div>
  );
}

export default Home;
