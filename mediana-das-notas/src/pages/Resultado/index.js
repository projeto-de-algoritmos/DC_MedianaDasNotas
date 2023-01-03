import { useEffect, useState } from "react";
import AlunoForm from "../../components/AlunoForm";
import AlunoItem from "../../components/AlunoItem";
import acharMediana from "../../utils/acharMediana";

export default function Home()
{
  const [alunos, setAlunos] = useState([
    {
      nome: 'luke skywalker', 
      nota: 6
    }, 
    {
      nome: 'leia organa', 
      nota: 5
    },
    {
      nome: 'yoda', 
      nota: 10
    },
    {
      nome: 'chewbacca', 
      nota: 1
    },
    {
      nome: 'din djarin', 
      nota: 8
    },
    {
      nome: 'han solo', 
      nota: 3
    }, 
    {
      nome: 'obi-wan kenobi', 
      nota: 7
    },
    {
      nome: 'darth vader',
      nota: 4
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
        <AlunoForm onPush={(aluno) => {setAlunos([aluno, ...alunos])}} />
        { alunos.map((aluno) => {
          return(
            <AlunoItem { ...aluno } isMediana={ mediana===Number(aluno.nota) } />
          );
        }) }
      </div>
  );
}