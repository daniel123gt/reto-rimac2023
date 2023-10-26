import { type ReactNode } from 'react'
import './styles.scss'
interface Props {
  name: string
  value: string
  children: ReactNode
}
const CheckCard = (props: Props): JSX.Element => {
  return (
    <div className='checkcard'>
        <label htmlFor={props.name + props.value}>
            <div>
                {props.children}
            </div>
            <input type='radio' name={props.name} id={props.name + props.value} value={props.value}/>
            <span className='checkcard__check'></span>
            <span className='checkcard__box'></span>
        </label>
    </div>
  )
}

export default CheckCard
