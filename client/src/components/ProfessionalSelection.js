// src/components/ProfessionalSelection.js
import React, { useState } from 'react';

const ProfessionalSelection = ({ service, onSelectProfessional }) => {
  // Ejemplo de profesionales según el servicio seleccionado
  const professionals = {
    Esculpidas: ['Laura', 'Carlos'],
    Kapping: ['Juan', 'María'],
    Lifting: ['Ana', 'Pedro'],
    Extensiones: ['Luisa', 'Diego'],
    Peluquería: ['Rosa', 'Sergio'],
    Depilación: ['Elena', 'Martín'],
  };

  const handleProfessionalSelect = (professional) => {
    onSelectProfessional(professional); // Llama a la función de callback con el profesional seleccionado
  };

  return (
    <div>
      <h2>Selecciona un profesional para {service}:</h2>
      <ul>
        {professionals[service].map((professional, index) => (
          <li key={index}>
            <button onClick={() => handleProfessionalSelect(professional)}>{professional}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfessionalSelection;