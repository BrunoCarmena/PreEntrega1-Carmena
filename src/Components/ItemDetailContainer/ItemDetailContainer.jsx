import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProducts } from '../../asynmock';

const ItemDetailContainer = () => {
    const navigate = useNavigate();
    const { categoria } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProducts();
                if (categoria) {
                    const filteredProducts = data.filter(product => product.categoria.toLowerCase().includes(categoria));
                    setProducts(filteredProducts);
                } else {
                    setProducts(data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [categoria]);

    const clickHandler = (id) => {
        navigate(`/detalle/${id}`);
    };

    return (
        <>
            {products.map(product => (
                <div key={product.id} className='itemDetalle'>
                    <h1 className='nombreDetalle'>Nombre: {product.nombre}</h1>
                    <img className='imgDetalle' src={product.imageUrl} alt={product.nombre} />
                    <p className='descripcionDetalle'>{product.descripcion}</p>
                    <p className='precioDetalle'>Precio $ {product.precio}</p>
                    <button className="btnDetalle" onClick={() => clickHandler(product.id)}>Ver Detalle</button>
                </div>
            ))}
        </>
    );
};

export default ItemDetailContainer;
