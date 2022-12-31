import { useEffect, useState } from "react";
import AlunoForm from "../../components/AlunoForm";
import AlunoItem from "../../components/AlunoItem";
import acharMediana from "../../utils/acharMediana";

export default function Home()
{
  const [alunos, setAlunos] = useState([
    {
      nome: 'arthur', 
      nota: 5
    }, 
    {
      nome: 'sara', 
      nota: 500
    },
    {
      nome: 'joao', 
      nota: 10
    },
    {
      nome: 'ernesto', 
      nota: 1
    },
    {
      nome: 'olga', 
      nota: 8
    },
    {
      nome: 'valentinho', 
      nota: 500
    }
  ]);
  const [mediana, setMediana] = useState(-1);

  useEffect(() => {
    const novaMediana = acharMediana(alunos.reduce((acc, curr) => {
      return [...acc, Number(curr.nota)];
    }, []));
    setMediana(novaMediana);
  }, [alunos]);

  return(
      <div className='page'>
        <h1>Listagem de alunos</h1>
        <p>Adicione os alunos e descubra o valor da mediana das notas</p>
        <AlunoForm onPush={(aluno) => {setAlunos([...alunos, aluno])}} />
        { alunos.map((aluno) => {
          return(
            <AlunoItem { ...aluno } isMediana={ mediana===aluno.nota } />
          );
        }) }
      </div>
  );
}