import { type ReactNode } from 'react'
import './styles.scss'

interface Props {
  children: ReactNode
}

const Card = (props: Props): JSX.Element => {
  return (
    <div className='card'>
        {props.children}
    </div>
  )
}

export default Card
