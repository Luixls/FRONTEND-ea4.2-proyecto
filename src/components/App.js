import React, { useState, useEffect } from 'react';
import Form from './Form';
import ItemList from './ItemList';
import './App.css';

const App = () => {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('items');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const updateItem = (updatedItem) => {
    const updatedItems = items.map(item =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setItems(updatedItems);
  };

  const deleteItem = (id) => {
    const filteredItems = items.filter(item => item.id !== id);
    setItems(filteredItems);
  };

  return (
    <div className="app">
      <h1>CRUD App</h1>
      <Form addItem={addItem} />
      <ItemList items={items} updateItem={updateItem} deleteItem={deleteItem} />
    </div>
  );
};

export default App;
