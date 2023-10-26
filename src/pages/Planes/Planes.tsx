import Steps from '../../components/atom/Steps/Steps'
import CheckCard from '../../components/atom/CheckCard/CheckCard'
import Card from '../../components/molecule/Card/Card'
import Button from '../../components/atom/Button/Button'
import { type ListOfSteps } from '../../models/types/types'

import AddUser from '../../assets/AddUser.svg'
import Protection from '../../assets/Protection.svg'
import Hospital from '../../assets/HospitalLight.svg'
import Home from '../../assets/HomeLight.svg'

import HospitalIcon from '../../components/icons/Hospital'
import LaptopIcon from '../../components/icons/Laptop'
import MedicalIcon from '../../components/icons/MedicalAtention'
import ButtonBack from '../../components/icons/ButtonBack'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import './styles.scss'
import { useEffect, useState } from 'react'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

const listSteps: ListOfSteps = [{
  number: 1,
  text: 'Paso 1'
}]

const Planes: React.FC = () => {
  const [planes, setPlanes] = useState([])
  const getPlanes = async (): Promise<void> => {
    const response = await fetch('https://rimac-front-end-challenge.netlify.app/api/plans.json', {
      method: 'GET'
    })
    const data = await response.json()
    setPlanes(data.list)
    console.log(planes.list)
  }
  const onChangePlan = (e: any): void => {

  }
  useEffect(() => {
    getPlanes()
  }, [])

  return (
    <>
      <div className='planes'>
        <Steps steps={listSteps}/>
        <div className='planes__buttonback container-rimac'>
          <ButtonBack/>
          <p>Volver</p>
        </div>
        <div className='planes__title grid-rimac container-rimac'>
          <h1>Rocío ¿Para quién deseas cotizar?</h1>
          <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
        </div>
        <div className='planes__checkcards grid-rimac container-rimac'>
          <div className='planes__checkcards__content'>
            <CheckCard name='option' value='1'>
              <div className='planes__checkcards__card'>
              <div className='planes__checkcards__card__head'>
                <img src={Protection} alt="icono opcion 2" />
                <p>Para mí</p>
              </div>
              <div className='planes__checkcards__card__body'>
                <p>Cotiza tu seguro de salud y agrega familiares si así lo deseas.</p>
              </div>
              </div>
            </CheckCard>
            <CheckCard name='option' value='2'>
                <div className='planes__checkcards__card'>
                    <div className='planes__checkcards__card__head'>
                      <img src={AddUser} alt="icono opcion 2" />
                      <p>Para alguien más</p>
                    </div>
                    <div className='planes__checkcards__card__body'>
                      <p>Realiza una cotización para uno de tus familiares o cualquier persona.</p>
                    </div>
                </div>
            </CheckCard>
          </div>
        </div>
        <div className='container-rimac grid-rimac'>
          <div className='planes__cardlist '>
            <Carousel responsive={responsive} containerClass='carousel-cards '>
              {planes.length > 0 && planes?.map((item, index) => (
                <Card key={index}>
                <div className='planes__cardlist__head'>
                  <div>
                    <p className='planes__cardlist__title'>{item?.name}</p>
                    <div className='planes__cardlist__subtitle'>
                      <span>Costo del plan</span>
                      <p>${item?.price} al mes</p>
                    </div>
                  </div>
                  <img src={Home} alt="icono plan" />
                </div>
                <div className='planes__cardlist__body'>
                  <ul>
                    {item?.description?.map((desc, jindex) => (
                      <li key={jindex}>
                        {jindex === 0 && (
                          <MedicalIcon/>
                        )}
                        {jindex === 1 && (
                          <LaptopIcon/>
                        )}
                        {jindex === 2 && (
                          <HospitalIcon/>
                        )}
                        <p>{desc}</p>
                      </li>
                    ))}
                  </ul>
                  <Button variant='red' text='Seleccionar plan' typeButton='button'/>
                </div>
              </Card>
              ))}

            </Carousel>

          </div>
        </div>
      </div>
    </>
  )
}

export default Planes
