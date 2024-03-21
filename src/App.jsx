import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/NavBar/Navbar';
import { getProducts } from './asynmock';
import { useEffect, useState } from 'react';
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
          <Route path='/products' element={<ItemListContainer />} />
          <Route path='/product/:Id' element={<ItemDetailContainer />} />
          <Route path='/category/:Category' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

