import React from 'react';

const CategorySelection = ({ categories, onSelectCategory }) => {
  return (
    <div className="category-selection">
      <h1>¿Qué servicio te gustaría reservar?</h1>
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelection;
