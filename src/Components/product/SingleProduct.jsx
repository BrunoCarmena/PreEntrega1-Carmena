import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProduct } from '../../asyncMock';

const SingleProduct = () => {

  const { prodId } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(getProduct(prodId));
  }, [prodId]);
  return (
    <>
     <div>
        <h1>Single Prod {prodId}</h1>
        <h3>Nombre: {product.nombre}</h3>
        <img src={product.imageUrl} alt={product.nombre} />
        <p>{product.descripcion}</p>
        <p>{product.categoria}</p>
        <p>Precio $ {product.precio}</p>
      </div> 
    </>
  )
}

export default SingleProduct

