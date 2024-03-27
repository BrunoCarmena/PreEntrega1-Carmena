import React from 'react';
import ItemList from '../itemList/ItemList';



const ItemListContainer = ({ greeting, products }) => {
  return (
    <div style={containerStyle}>
      <h1 style={tituloStyle}>{greeting}</h1>
      <ItemList products={products} />
    </div>
  )
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
}

const tituloStyle = {
  color: 'white',
  fontSize: '40px',
  fontWeight: 'bold',
}

export default ItemListContainer

