import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Navbar from './Components/NavBar/Navbar'



function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos a Rosario3D"} />
    </>
  )
}

export default App
