import React from 'react'
import './Navbar.css'
import logo from '../../assets/img/Logo.jpg'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <>

            <nav>
                <img src={logo} alt="" className='logo' />
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Productos</a></li>
                    <li><a href="">Nosotros</a></li>
                    <li><button className='btn'>Contactanos</button></li>
                </ul>
                <CartWidget/>
            </nav>
            

        </>
    )
}

export default Navbar
