import { useEffect } from 'react';
import Titulo from '../../components/Titulo';
import './Contatos.css';


function Contatos() {

useEffect(() => {
    console.log("Página de lista carregada");
    return () => {
      console.log("Saindo da página de lista");
    };
  }, []);
  const contatos = [
    { id: 1, nome: "Alice Santos", email: "alice@email.com" },
    { id: 2, nome: "Bruno Lima", email: "bruno@email.com" },
    { id: 3, nome: "Carla Souza", email: "carla@email.com" },
    { id: 4, nome: "Diego Martins", email: "diego@email.com" },
    { id: 5, nome: "Elaine Rocha", email: "elaine@email.com" },
    { id: 6, nome: "Fernando Dias", email: "fernando@email.com" },
    { id: 7, nome: "Gabriela Tavares", email: "gabriela@email.com" },
    { id: 8, nome: "Henrique Moraes", email: "henrique@email.com" },
    { id: 9, nome: "Isabela Costa", email: "isabela@email.com" },
    { id: 10, nome: "João Pereira", email: "joao@email.com" },
    { id: 11, nome: "Karina Melo", email: "karina@email.com" },
    { id: 12, nome: "Leonardo Cunha", email: "leonardo@email.com" },
    { id: 13, nome: "Mariana Lopes", email: "mariana@email.com" },
    { id: 14, nome: "Nicolas Barreto", email: "nicolas@email.com" },
    { id: 15, nome: "Otávio Lima", email: "otavio@email.com" },
  ];

  if (contatos.length === 0) {
    return <p>Nenhum contato cadastrado.</p>;
  }

  return (
    <div className="contatos">
      <Titulo className='titulo5'><strong>Lista de Contatos</strong></Titulo>
      <p>Total de contatos: {contatos.length}</p>

      {contatos.map((contato) => (
        <div className="contatod" key={contato.id}>
          <span>
            <strong>{contato.nome}</strong> - {contato.email}
          </span>
        </div>
      ))}
    </div>
  );

  
}

export default Contatos;


