import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Navbar from './Components/NavBar/Navbar'
import Products from './Components/Products/Products'
import SingleProduct from './Components/product/SingleProduct'




function App() {

  return (
    <div className='app'>
    <BrowserRouter>
      <Navbar />
    <Routes>
    <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a Rosario3D"} />} />
    <Route exact path='/products' element={<Products/>}/>
    <Route exact path="/product/:prodId" element={<SingleProduct/>} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
