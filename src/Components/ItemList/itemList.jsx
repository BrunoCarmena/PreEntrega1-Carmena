import React from 'react';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const ItemList = ({ products }) => {
    return (
      <>
        <div>
          {products.map(prod => (
            <ItemDetailContainer
              key={prod.id}
              categoria={prod.categoria}
              nombre={prod.nombre}
              imageUrl={prod.imageUrl}
              descripcion={prod.descripcion}
              precio={prod.precio}
            />
          ))}
        </div>
      </>
    )
}

export default ItemList;



