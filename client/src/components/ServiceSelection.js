// src/components/ServiceSelection.js
import React, { useState } from 'react';

const ServiceSelection = ({ category, onSelectService }) => {
  // Ejemplo de servicios según la categoría seleccionada
  const services = {
    Uñas: ['Esculpidas', 'Kapping'],
    Pestañas: ['Lifting', 'Extensiones'],
    Otros: ['Peluquería', 'Depilación'],
  };

  const handleServiceSelect = (service) => {
    onSelectService(service); // Llama a la función de callback con el servicio seleccionado
  };

  return (
    <div>
      <h2>Selecciona un servicio de {category}:</h2>
      <ul>
        {services[category].map((service, index) => (
          <li key={index}>
            <button onClick={() => handleServiceSelect(service)}>{service}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceSelection;