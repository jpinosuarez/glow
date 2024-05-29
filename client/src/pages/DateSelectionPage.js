import React, { useState } from 'react';
import DateSelection from '../components/DateSelection';

const DateSelectionPage = () => {
  const [availableDates, setAvailableDates] = useState([
    '2024-06-01',
    '2024-06-02',
    // Otras fechas disponibles
  ]);

  const handleSelectDate = (date) => {
    console.log('Fecha seleccionada:', date);
    // Navegar a la página de selección de hora
  };

  return (
    <DateSelection availableDates={availableDates} onSelectDate={handleSelectDate} />
  );
};

export default DateSelectionPage;
