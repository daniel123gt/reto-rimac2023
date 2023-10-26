import Input from '../../atom/Input/Input'
import InputSelect from '../../atom/InputSelect/InputSelect'
import Checkbox from '../../atom/Checkbox/Checkbox'
import Button from '../../atom/Button/Button'

import './styles.scss'
import { useRef } from 'react'
import { useNavigate } from 'react-router'

interface Props {
  legend: string
}

const Form = (props: Props): JSX.Element => {
  const formel = useRef(null)
  const navigate = useNavigate()
  const getUser = async (): Promise<void> => {
    const response = await fetch('https://rimac-front-end-challenge.netlify.app/api/user.json', {
      method: 'GET'
    })
    const data = await response.json()
    console.log(data)
    localStorage.setItem('user', JSON.stringify(data))
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    localStorage.setItem('userdni', formel?.current?.querySelector('#doc').value)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    localStorage.setItem('usertlf', formel?.current?.querySelector('#tlf').value)
    navigate('/planes')
  }
  const handlSubmit = async (e: any): Promise<void> => {
    e.preventDefault()
    await getUser()
  }
  return (
    <form ref={formel} className='form' onSubmit={(e) => { void handlSubmit(e) }}>
            <legend>{props.legend}</legend>
        <fieldset>
            <InputSelect name='doc' label='Número de documento' type='text' required/>
            <Input name='tlf' label='Celular' type='tel' required/>
        </fieldset>
        <fieldset>
            <Checkbox name='check1' label='Acepto lo Política de Privacidad' required/>
            <Checkbox name='check2' label='Acepto la Política Comunicaciones Comerciales' required/>
            <a href="#">Aplican Términos y Condiciones.</a>
        </fieldset>
            <Button text='Cotiza aquí' typeButton='submit' variant='dark'/>
    </form>
  )
}

export default Form
