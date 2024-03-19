import {useState, useEffect} from 'react'
import { getProducts } from '../../asynmock'
import itemList from '../ItemList//itemList'

const ItemListContainer = ({ greeting }) => {

  const {products, setProducts} = useState([]);


  useEffect(() => {
    getProducts()
    .then(response => {

      setProducts(response)
    })
    .catchç(error => {
      console.error(error)})
      
  }, [])

  return (
    <div style={containerStyle}>

      <h1 style={tituloStyle}>{greeting}</h1>

      <itemList products={products}/>
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
