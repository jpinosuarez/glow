// src/App.js
import React, { useState } from 'react';
import CategorySelection from './components/CategorySelection';
import ServiceSelection from './components/ServiceSelection';
import ProfessionalSelection from './components/ProfessionalSelection';
import DateTimeSelection from './components/DateTimeSelection';
import DepositPayment from './components/DepositPayment';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedProfessional, setSelectedProfessional] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [reservationConfirmed, setReservationConfirmed] = useState(false);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const handleProfessionalSelect = (professional) => {
    setSelectedProfessional(professional);
  };

  const handleDateTimeSelect = ({ day, timeslot }) => {
    setSelectedDateTime({ day, timeslot });
  };

  const handleConfirmReservation = () => {
    setReservationConfirmed(true);
  };

  return (
    <div className="App">
      <h1>Reserva de Turnos</h1>
      {!selectedCategory && <CategorySelection onSelectCategory={handleCategorySelect} />}
      {selectedCategory && !selectedService && (
        <ServiceSelection category={selectedCategory} onSelectService={handleServiceSelect} />
      )}
      {selectedService && !selectedProfessional && (
        <ProfessionalSelection service={selectedService} onSelectProfessional={handleProfessionalSelect} />
      )}
      {selectedProfessional && !selectedDateTime && (
        <DateTimeSelection onSelectDateTime={handleDateTimeSelect} />
      )}
      {selectedDateTime && !reservationConfirmed && (
        <DepositPayment onConfirmReservation={handleConfirmReservation} />
      )}
      {reservationConfirmed && (
        <p>¡Reserva confirmada! Recibirás confirmación por correo electrónico o WhatsApp.</p>
      )}
    </div>
  );
}

export default App;