import { useParams} from 'react-router-dom';
import { useEffect } from 'react';
import './ContatosD.css';

function ContatosD() {
  const { id } = useParams();

  useEffect(() => {
    console.log("Página de lista carregada");
    return () => {
      console.log("Saindo da página de lista");
    };
  }, []);

  const contatos = JSON.parse(localStorage.getItem('contatos')) || [];
  const contato = contatos.find(p => p.id === Number(id));

  return (
    <div className="Contato-detalhes">
      <h2>{contato.nome}</h2>
      <p>{contato.email}</p>
    </div>
  );
}

export default ContatosD;