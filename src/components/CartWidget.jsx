
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';


const CartWidget = () => {

const cantidadItems = 0;

    return (
        <div className="cart">
            <FaShoppingCart />
            <p>{cantidadItems}</p>
        </div>
    );
};

export default CartWidget;
