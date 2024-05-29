import React, { useState } from 'react';
import TimeSelection from '../components/TimeSelection';

const TimeSelectionPage = () => {
  const [availableTimes, setAvailableTimes] = useState([
    '10:00 AM',
    '11:00 AM',
    // Otros horarios disponibles
  ]);

  const handleSelectTime = (time) => {
    console.log('Hora seleccionada:', time);
    // Navegar a la página de resumen del turno
  };

  return (
    <TimeSelection availableTimes={availableTimes} onSelectTime={handleSelectTime} />
  );
};

export default TimeSelectionPage;
