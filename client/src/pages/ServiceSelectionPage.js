import React, { useState } from 'react';
import ServiceSelection from '../components/ServiceSelection';

const ServiceSelectionPage = () => {
  const [services, setServices] = useState([
    { id: 1, name: 'Esculpidas' },
    { id: 2, name: 'Kapping' },
    // Otros servicios
  ]);

  const handleSelectService = (serviceId) => {
    console.log('Servicio seleccionado:', serviceId);
    // Navegar a la página de selección de profesional
  };

  return (
    <ServiceSelection services={services} onSelectService={handleSelectService} />
  );
};

export default ServiceSelectionPage;
