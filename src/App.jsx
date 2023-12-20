import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import './navbar.css'

function App() {

  return (
    <>
      <div>
      <Navbar />
      <ItemListContainer  greeting="¡Hola, bienvenido a mi tienda en línea!" />
      </div>
    </>
  )
}

export default App
