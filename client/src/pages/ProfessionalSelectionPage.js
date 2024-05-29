import React, { useState } from 'react';
import ProfessionalSelection from '../components/ProfessionalSelection';

const ProfessionalSelectionPage = () => {
  const [professionals, setProfessionals] = useState([
    { id: 1, name: 'Profesional 1' },
    { id: 2, name: 'Profesional 2' },
    // Otros profesionales
  ]);

  const handleSelectProfessional = (professionalId) => {
    console.log('Profesional seleccionado:', professionalId);
    // Navegar a la página de selección de fecha
  };

  return (
    <ProfessionalSelection professionals={professionals} onSelectProfessional={handleSelectProfessional} />
  );
};

export default ProfessionalSelectionPage;
