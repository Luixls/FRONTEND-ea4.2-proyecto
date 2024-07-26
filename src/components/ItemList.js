import React from 'react';
import Item from './Item';

const ItemList = ({ items, updateItem, deleteItem }) => {
  return (
    <div className="item-list">
      {items.map(item => (
        <Item key={item.id} item={item} updateItem={updateItem} deleteItem={deleteItem} />
      ))}
    </div>
  );
};

export default ItemList;
