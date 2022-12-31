export default function Input({label, placeholder, value, onChange}) {
  return(
    <div>
      <label>{ label }</label>
      <input value={ value } placeholder={ placeholder } onChange={ ({ target }) => { onChange(target.value) } }/>
    </div>
  )
}