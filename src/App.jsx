import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/NavBar/Navbar';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a Rosario3D"} />} />
          <Route path='/products' element={<ItemListContainer />} />
          <Route path='/product/:Id' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

