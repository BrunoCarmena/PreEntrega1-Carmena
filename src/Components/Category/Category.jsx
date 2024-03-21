import React from 'react'
import './category.css'
import { Link } from 'react-router-dom'

const Category = () => {
    return (
        <>
            <div className="container">
                <Link to={'/categoria/mate'}>Mates </Link>
                <Link to={'/categoria/muñecos'}>Muñecos </Link>
                <Link to={'/categoria/soportes'}>Soportes </Link>
            </div>
        </>
    )
}

export default Category
