import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className='page'>
      <h1>Mediana das Notas</h1>
      <p>Este projeto visa aplicar o algoritmo de mediana das medianas utilizando o contexto de um sistema que deseja indicar a mediana das notas dos alunos de uma escola. <br /> <br /> A listagem já está inicializada com alguns alunos e conforme novos são adicionados o algoritmo recalcula e deixa destacada a nota na página.</p>
      <Link to='/resultado'>Iniciar</Link>
    </div>
  );
}