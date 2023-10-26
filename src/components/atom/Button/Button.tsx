import './styles.scss'

interface Props {
  text: string
  variant: string
  typeButton?: 'button' | 'submit' | 'reset' | undefined
}
const Button = (props: Props): JSX.Element => {
  return (
    <button className={`button button--${props.variant}`} type={props.typeButton}>
        {props.text}
    </button>
  )
}

export default Button
