import React, { useState } from 'react';

const Form = ({ addItem }) => {
  const [item, setItem] = useState({ nombre: '', descripcion: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.nombre && item.descripcion) {
      addItem({ ...item, id: Date.now() });
      setItem({ nombre: '', descripcion: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        value={item.nombre}
        onChange={handleChange}
        placeholder="Nombre"
        required
      />
      <input
        type="text"
        name="descripcion"
        value={item.descripcion}
        onChange={handleChange}
        placeholder="Descripción"
        required
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default Form;
