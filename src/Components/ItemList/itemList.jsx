import React from 'react';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

function ItemList({ items }) {
  return (
    <div>
      {items && items.map(item => (
        <ItemDetailContainer key={item.id} {...item} />
      ))}
    </div>
  );
}

export default ItemList;



