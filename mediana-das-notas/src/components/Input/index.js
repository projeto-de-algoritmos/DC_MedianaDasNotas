import './styles.css';

export default function Input({label, placeholder, value, onChange, type}) {
  return(
    <div className='input-container'>
      <label>{ label }</label>
      <input min='0' value={ value } placeholder={ placeholder } type={ type || 'text' } onChange={ ({ target }) => { onChange(target.value) } }/>
    </div>
  )
}