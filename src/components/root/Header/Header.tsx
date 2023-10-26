import rimacLogo from '../../../assets/Logo.svg'
import Phone from '../../icons/Phone'
import './styles.scss'

const Header: React.FC = () => {
  return (
      <header className="container-rimac header">
        <div className='header__content'>
          <img src={rimacLogo} alt="logo rimac" />

          <div className='header__content__right'>
            <span>¡Compra por este medio!</span>
            <a href="tel:01-411-6001"> <Phone/> (01) 411 6001</a>
          </div>
        </div>
      </header>
  )
}

export default Header
