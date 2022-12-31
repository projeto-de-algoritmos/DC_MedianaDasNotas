import { useState } from "react"
import Input from "../Input"
import './styles.css';

export default function AlunoForm({onPush}) {
  const [alunoValue, setAlunoValue] = useState({});

  return (
    <div className='aluno-form'>
      <Input value={ alunoValue.nome } label='Nome' placeholder='Nome do Aluno' onChange={(value) => { setAlunoValue({ ...alunoValue, nome: value }) }} />
      <Input type='number' value={ alunoValue.nota } label='Nota' placeholder='Nota do Aluno' onChange={(value) => { setAlunoValue({ ...alunoValue, nota: value }) }} />
      <button disabled={ !alunoValue.nome || !alunoValue.nota } onClick={() => {
        onPush(alunoValue);
        setAlunoValue({nome: '', nota: ''});
      }}>Adicionar</button>
    </div>
  )
}