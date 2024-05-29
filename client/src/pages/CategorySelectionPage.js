import React, { useState } from 'react';
import CategorySelection from '../components/CategorySelection';

const CategorySelectionPage = () => {
  const [categories] = useState([
    { id: 1, name: 'Uñas' },
    { id: 2, name: 'Miradas' },
    { id: 3, name: 'Peluquería' },
  ]);

  const handleSelectCategory = (categoryId) => {
    console.log('Categoría seleccionada:', categoryId);
    // Navegar a la página de selección de servicio
  };

  return (
    <CategorySelection categories={categories} onSelectCategory={handleSelectCategory} />
  );
};

export default CategorySelectionPage;
