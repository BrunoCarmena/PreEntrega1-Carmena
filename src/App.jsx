import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import './navbar.css'
import Categorias from './components/Categorias'

function App() {

  return (
    <>
      <div>
      <Navbar />
      <Categorias />
      <ItemListContainer  greeting="¡Bienvenido a la Tienda de Impresiones en 3D!" />
      </div>
    </>
  )
}


export default App
