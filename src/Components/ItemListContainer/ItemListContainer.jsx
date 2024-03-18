import React from 'react'

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={containerStyle}>

      <h1 style={tituloStyle}>{greeting}</h1>

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

export default ItemListContainer //
