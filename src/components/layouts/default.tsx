import { type ReactNode } from 'react'
import Header from '../root/Header/Header'
import Footer from '../root/Footer/Footer'

interface Props {
  children: ReactNode
}

const Layout = (props: Props): JSX.Element => {
  return (
      <div className='content-wrap'>
      <Header/>
      {props.children}
      <Footer/>
      </div>
  )
}

export default Layout
