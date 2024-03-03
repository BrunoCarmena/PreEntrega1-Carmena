import React from 'react'
import './Cartwidget.css'
import { FaShoppingCart } from 'react-icons/fa';
const CartWidget = () => {
  return (
    <div className="cart-icon">
    <FaShoppingCart />
    <span className='cart-counter'>0</span>
  </div>
  )
}

export default CartWidget
