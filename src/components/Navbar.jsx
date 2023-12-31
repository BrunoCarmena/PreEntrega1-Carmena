import React from 'react'
import CartWidget from './CartWidget'

const Navbar = () => {
    return (
        <div className='contenedor'>
            <nav className="navbar">
                <div className="logo">Logo</div>
                <ul className="nav-links">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Categorías</a></li>
                    <li><a href="#">Quienes Somos</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
                <CartWidget  />
                
            </nav>
        </div>
    )
}

export default Navbar
