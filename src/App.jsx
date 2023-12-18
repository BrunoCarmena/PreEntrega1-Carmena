import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'

import './navbar.css'

function App() {

  return (
    <>
      <div>
      <Navbar />
      <ItemListContainer greeting="¡Hola, bienvenido a mi tienda en línea!" />
      </div>
    </>
  )
}

export default App
