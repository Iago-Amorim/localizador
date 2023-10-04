import './App.css'
import Footer from './component/Footer'
import Infromacao from './component/Informacao'
import Procura from './component/Procura'

import { useState } from 'react'

function App() {

  const [lista, setLista] = useState({})

  return (
    <div className='App'>
      <Procura setLista={ setLista } />
      <Infromacao dados={ lista } />
      <Footer />
    </div>
  )
}

export default App
