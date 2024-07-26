import React, { useState } from 'react';

const Item = ({ item, updateItem, deleteItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(item);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedItem({ ...editedItem, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateItem(editedItem);
    setIsEditing(false);
  };

  return (
    <div className="item">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            value={editedItem.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="descripcion"
            value={editedItem.descripcion}
            onChange={handleChange}
            required
          />
          <button type="submit">Guardar</button>
        </form>
      ) : (
        <div>
          <h2>{item.nombre}</h2>
          <p>{item.descripcion}</p>
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={() => deleteItem(item.id)}>Eliminar</button>
        </div>
      )}
    </div>
  );
};

export default Item;
