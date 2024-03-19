import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Navbar from './Components/NavBar/Navbar'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'





function App() {

  return (
    <div className='app'>
    <BrowserRouter>
      <Navbar />
    <Routes>
    <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a Rosario3D"} />} />
    <Route element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
