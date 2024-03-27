import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getProducts } from '../../asynmock';
import Category from '../Category/Category';
import './itemDetail.css';

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

    return (
        <>
            <div>
                <Category />
            </div>


            <div className='header'>
                {categoria ? <h1>{categoria}</h1> : <h1>Nuestros Productos</h1>
                }
            </div>

            <section className='container'>
                {products.map(product => (
                    <div key={product.id} className='itemDetalle'>
                        <h1 className='nombreDetalle'>{product.nombre}</h1>
                        <img className='imgDetalle' src={product.imageUrl} alt={product.nombre} />
                        <p className='descripcionDetalle'>{product.descripcion}</p>
                        <p className='precioDetalle'>Precio $ {product.precio}</p>
                        <Link to={'/item/${id}'} className="btnDetalle" >Ver Detalle</Link>
                    </div>

                ))}
            </section>
        </>
    );
};

export default ItemDetailContainer;
