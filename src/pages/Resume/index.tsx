import Steps from '../../components/atom/Steps/Steps'
import { type ListOfSteps } from '../../models/types/types'
import Card from '../../components/molecule/Card/Card'
import ButtonBack from '../../components/icons/ButtonBack'
import Family from '../../components/icons/Family'

import 'react-multi-carousel/lib/styles.css'

import './styles.scss'

const listSteps: ListOfSteps = [{
  number: 1,
  text: 'Paso 1'
}]

const Resume: React.FC = () => {
  return (
    <>
      <div className='resume'>
        <Steps steps={listSteps}/>
        <div className='container-rimac grid-rimac'>
            <div className='resume__buttonback '>
                <ButtonBack/>
                <p>Volver</p>
            </div>
        </div>
        <div>
        <div className='container-rimac grid-rimac'>
            <div className='resume__cardcont'>
                <Card>
                    <div className='resume__cardcont__head'>
                        <div>
                        <p className='resume__cardcont__title'>Precios calculados para:</p>
                        <div className='resume__cardcont__subtitle'>
                            <Family/>
                            <p>Rocio Miranda Díaz</p>
                        </div>
                        </div>
                    </div>
                    <div className='resume__cardcont__body'>
                        <div>
                            <p>Responsable de pago</p>
                            <ul>
                                <li>DNI: 444888888</li>
                                <li>Celular: 5130216147</li>
                            </ul>
                        </div>
                        <div>
                            <p>Plan elegido</p>
                            <ul>
                                <li>Plan en Casa y Clínica</li>
                                <li>Costo del Plan: $99 al mes</li>
                            </ul>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Resume
