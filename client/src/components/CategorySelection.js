// src/components/CategorySelection.js
import React, { useState } from 'react';

const CategorySelection = ({ onSelectCategory }) => {
  const categories = ['Uñas', 'Pestañas', 'Otros']; // Ejemplo de categorías disponibles

  const handleCategorySelect = (category) => {
    onSelectCategory(category); // Llama a la función de callback con la categoría seleccionada
  };

  return (
    <div>
      <h2>Selecciona una categoría de servicio:</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <button onClick={() => handleCategorySelect(category)}>{category}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySelection;