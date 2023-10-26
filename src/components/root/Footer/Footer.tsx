import rimacLogo from '../../../assets/LogoWhite.svg'
import './styles.scss'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
    <div className='container-rimac'>
      <div className='footer__content'>
        <img src={rimacLogo} alt="logo rimac" />
        <div className='footer__content__right'>
          <span>© 2023 RIMAC Seguros y Reaseguros.</span>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
