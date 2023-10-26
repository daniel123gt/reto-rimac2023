import ButtonArrow from '../../icons/ButtonArrow'
import { type ListOfSteps } from '../../../models/types/types'
import Dots from '../../icons/Dots'

import './styles.scss'

interface Props {
  steps: ListOfSteps

}
const Steps = (props: Props): JSX.Element => {
  const stepsBar = props.steps
  console.log(stepsBar)
  return (
    <div className='steps '>
      <div className='steps__content container-rimac'>
        <div>
          <ButtonArrow/>
        </div>
        <div className='steps__content__text'>
          <p>
            Paso 1 de 2
          </p>
        </div>
        <div className='steps__content__progressbar'>
          <div className='steps__content__progressbar__line'>

          </div>
        </div>
      </div>
      <div className='steps__content--desk container-rimac'>
        <div className='steps__content--desk step'>
          <span>1</span>
          <p>Planes y coberturas</p>
        </div>
        <Dots/>
        <div className='steps__content--desk step'>
          <span>2</span>
          <p>Resumen</p>
        </div>
      </div>
    </div>
  )
}

export default Steps
