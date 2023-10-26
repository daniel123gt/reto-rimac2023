import Chip from '../../components/atom/Chip/Chip'
import Form from '../../components/molecule/Form/Form'

import family from '../../assets/family.png'
import './styles.scss'

const Home: React.FC = () => {
  return (
    <>
      <div className='container-rimac grid-rimac home'>
        <aside className='hero'>
          <figure>
            <img src={family} alt="Imagen lateral" />
          </figure>
        </aside>
        <main className='main'>
            <div className='main__title'>
                <Chip />
                <h1>
                Creado para ti y tu familia
                </h1>
            </div>
            <div className='main__form'>
                <Form legend='Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.'/>
            </div>
        </main>
      </div>
    </>
  )
}

export default Home
