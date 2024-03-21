import React from 'react'
import './Navbar.css'
import logo from '../../assets/img/Logo.jpg'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>

            <nav>
                <img src={logo} alt="" className='logo' />
                <ul>
                    <li><Link to={'/'}>Inicio</Link></li>
                    <li><Link to={'/products'}>Productos</Link></li>
                    <li><Link to={'/About'}>Quienes Somos</Link></li>
                    <li><Link to={'/Contact'}>Contactanos</Link></li>
                </ul>
                <CartWidget />
            </nav>


        </>
    )
}

export default Navbar