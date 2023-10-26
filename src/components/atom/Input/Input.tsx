import './styles.scss'
interface Props {
  type: string
  name: string
  label: string
  required: boolean
}
const Input = (props: Props): JSX.Element => {
  return (
    <div className='input'>
        <label htmlFor={props.name}>
            {props.label}
        </label>
        <input type={props.type} name={props.name} id={props.name} required={props.required}/>
    </div>
  )
}

export default Input
