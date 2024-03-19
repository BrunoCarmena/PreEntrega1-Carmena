import React from 'react'


const ItemDetailContainer = ({id, nombre, imageUrl, descripcion, precio }) => {


    return (
        <>
            <div className='itemDetalle'>
                <h1 className='nombreDetalle'>Nombre: {nombre}</h1>
                <img className='imgDetalle' src={imageUrl} alt={product.nombre} />
                <p className='descripcionDetalle'>{descripcion}</p>
                <p className='precioDetalle'>Precio $ {precio}</p>
                <button className="btnDetalle">Ver Detalle</button>
            </div>
        </>
    )
}

export default ItemDetailContainer
