import './styles.scss'
interface Props {
  name: string
  label: string
  required: boolean
}
const Checkbox = (props: Props): JSX.Element => {
  return (
    <div className='checkbox'>
        <label htmlFor={props.name}>
            {props.label}
        <input type='checkbox' name={props.name} id={props.name} required={props.required}/>
        <span className='checkbox__check'></span>
        </label>
    </div>
  )
}

export default Checkbox
