import Layout from './components/layouts/default'
import Home from './pages/Home/Home.tsx'
import Planes from './pages/Planes/Planes.tsx'
import Resume from './pages/Resume/index.tsx'
import { Route, Routes } from 'react-router-dom'

import './App.scss'
const App: React.FC = () => {
  return (
    <>
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/planes' element={<Planes/>} />
        <Route path='/resumen' element={<Resume/>} />
      </Routes>
    </Layout>
    </>
  )
}

export default App
