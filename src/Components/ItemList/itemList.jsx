import React from 'react';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const ItemList = ({ products }) => {
    return (
      <>
        <div>
          {products.map(prod => <ItemDetailContainer key={prod.id} {...prod} />)}
        </div>
      </>
    )
}

export default ItemList;


