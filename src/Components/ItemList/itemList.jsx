import React from 'react';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const itemList = ({product}) => {

  return (
    <>
      <div>
        {product.map(prod => <ItemDetailContainer key={prod.id} {...prod}/>)}
      </div>
    </>
  )
}

export default itemList

