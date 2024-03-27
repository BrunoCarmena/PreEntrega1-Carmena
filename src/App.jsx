import './App.css';
import { getProducts } from './asynmock';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/NavBar/Navbar';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {

  const [products, setproducts] = useState([]);


  useEffect(() => {
    let ignore=false;
    !ignore && getProducts().then((products) =>{
      setproducts(products)
    });
    return (() => {
      ignore = true;
    })
  }, []);

  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a Rosario3D"} />} />
          <Route path='/products' element={<ItemDetailContainer />} />
          <Route path='/products/:Id' element={<ItemDetailContainer />} />
          <Route path='/category/:Category' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

