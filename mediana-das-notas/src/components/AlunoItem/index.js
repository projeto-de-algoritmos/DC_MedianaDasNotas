import './styles.css';

export default function AlunoItem({ nome, nota, isMediana }) {
  return (
    <div className={ isMediana?'active':'' }>
      <p>{ nome }</p>
      <p>{ nota }</p>
    </div>
  );
}