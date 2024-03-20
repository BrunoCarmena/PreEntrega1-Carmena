import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const ItemDetailContainer = ({ products }) => {

    const navigate = useNavigate();
    const categoria = useParams().categoria;

    const [products, setProducts] = useState([]);


    useEffect(() => {
        getProducts()
            .then((data) => {
                if (categoria) {
                    const filteredProducts = data.filter((products) => products.categoria.toLowerCase().includes(categoria));
                    setProducts(filteredProducts);
                }
                else {
                    setProducts(data);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [categoria]);


    const clickHandler = (id) => {
        navigate(`/detalle/${id}`);
    };


    return (
        <>
            <div className='itemDetalle'>
                <h1 className='nombreDetalle'>Nombre: {products.nombre}</h1>
                <img className='imgDetalle' src={products.imageUrl} alt={products.nombre} />
                <p className='descripcionDetalle'>{products.descripcion}</p>
                <p className='precioDetalle'>Precio $ {products.precio}</p>
                <button className="btnDetalle" onClick={()=>clickHandler(products.id)}>Ver Detalle</button>
            </div>
        </>
    )
}

export default ItemDetailContainer
