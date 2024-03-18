import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Navbar from './Components/NavBar/Navbar'
import Products from './Components/Products/Products'




function App() {

  return (
    <div className='app'>
    <BrowserRouter>
      <Navbar />
    <Routes>
    <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a Rosario3D"} />} />
    <Route exact path='/products' element={<Products/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
