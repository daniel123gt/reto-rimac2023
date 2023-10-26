import Arrow from '../../icons/Arrow'

import './styles.scss'

interface Props {
  type: string
  name: string
  label: string
  required: boolean
}
const InputSelect = (props: Props): JSX.Element => {
  return (
    <div className='inputselect'>
        <div className='inputselect__dropdown'>
            <Arrow/>
            <select name="docType" id="docType">
                <option value="1">DNI</option>
                <option value="2">CE</option>
            </select>
        </div>
        <div className='inputselect__textfield'>
            <label htmlFor={props.name}>
                {props.label}
            </label>
            <input type={props.type} name={props.name} id={props.name} required={props.required}/>
        </div>

    </div>
  )
}

export default InputSelect
