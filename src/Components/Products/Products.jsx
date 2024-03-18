import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../../asynmock';
import './products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetchProducts()
            .then(products => {

                setProducts(products);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error al obtener los productos:', error);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <div>Cargando...</div>;
    }

    const handleClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <>
            <div>
                <h1>Variedades</h1>

                <section className="product-list">
                    {products.map((product, index) => (
                        <div className="product-card" key={index}>
                            <img src={product.imageUrl} alt={product.nombre} className="product-image" />
                            <div className="product-details">
                                <h3 className="product-name">{product.nombre}</h3>
                                <p className="product-price">${product.precio}</p>
                                <button className="btn-detail" onClick={() => handleClick(product.id)}>Ver Detalle</button>
                            </div>
                        </div>
                    ))}
                </section>
            </div>

        </>
    );
};

export default Products;
