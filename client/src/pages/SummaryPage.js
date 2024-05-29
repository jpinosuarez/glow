import React, { useState } from 'react';
import Summary from '../components/Summary';

const SummaryPage = () => {
  const [appointmentDetails, setAppointmentDetails] = useState({
    category: 'Uñas',
    service: 'Esculpidas',
    professional: 'Profesional 1',
    date: '2024-06-01',
    time: '10:00 AM',
  });

  const handleConfirm = () => {
    console.log('Turno confirmado:', appointmentDetails);
    // Navegar a la página de pago de seña
  };

  return (
    <Summary appointmentDetails={appointmentDetails} onConfirm={handleConfirm} />
  );
};

export default SummaryPage;
