import { useState } from 'react';
import React from 'react'

const ItemCount = () => {

    const [contador, setContador] = useState(1);

    const incrementar = () => {
        setContador(contador + 1);
    };

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }

    }


    return (
        <>
            <div className='container'>
                <div className='button-container'>
                    <button onClick={decrementar} >-</button>
                    <p className='counter'>{contador}</p>
                    <button onClick={incrementar} >+</button>
                </div>
            </div>

            <div>
                <button className="btn-cart">Agregar al carrito</button>
            </div>

        </>
    )
}

export default ItemCount
