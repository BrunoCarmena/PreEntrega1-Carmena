import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';


const ItemList = ({ products }) => {

  const navigate = useNavigate();
  const categoria = useParams().categoria;

  const [products, setProducts] = useState([]);


  useEffect(() => {
    getProducts()
      .then((data) => {
        if (categoria) {
          const filteredProducts = data.filter((product) => product.categoria.toLowerCase().includes(categoria));
          setProducts(filteredProducts);
        }
        else {
          setProducts(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
});



    return (
      <>
        <div>
          {products.map(prod => <ItemDetailContainer key={prod.id} {...prod} />)}
        </div>
      </>
    )
  }

export default ItemList

