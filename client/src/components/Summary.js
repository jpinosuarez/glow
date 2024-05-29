import React from 'react';

const Summary = ({ appointmentDetails, onConfirm }) => {
  return (
    <div className="summary">
      <h1>Resumen del Turno</h1>
      <ul>
        <li>Categoría: {appointmentDetails.category}</li>
        <li>Servicio: {appointmentDetails.service}</li>
        <li>Profesional: {appointmentDetails.professional}</li>
        <li>Fecha: {appointmentDetails.date}</li>
        <li>Hora: {appointmentDetails.time}</li>
      </ul>
      <button onClick={onConfirm}>Confirmar Turno</button>
    </div>
  );
};

export default Summary;
