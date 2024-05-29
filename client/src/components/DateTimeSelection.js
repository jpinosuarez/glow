// src/components/DateTimeSelection.js
import React, { useState } from 'react';

const DateTimeSelection = ({ onSelectDateTime }) => {
  // Ejemplo de días y horarios disponibles
  const daysWithTimeslots = [
    { day: 'Lunes', timeslots: ['10:00', '11:00', '15:00', '16:00'] },
    { day: 'Martes', timeslots: ['09:00', '13:00', '15:00', '17:00'] },
    { day: 'Miércoles', timeslots: ['08:00', '10:00', '14:00', '16:00'] },
    { day: 'Jueves', timeslots: ['09:00', '11:00', '13:00', '15:00'] },
    { day: 'Viernes', timeslots: ['09:00', '10:00', '12:00', '14:00'] },
  ];

  const handleDateTimeSelect = (day, timeslot) => {
    onSelectDateTime({ day, timeslot }); // Llama a la función de callback con el día y horario seleccionados
  };

  return (
    <div>
      <h2>Selecciona un día y horario:</h2>
      <ul>
        {daysWithTimeslots.map((dayObj, index) => (
          <li key={index}>
            <h3>{dayObj.day}</h3>
            <ul>
              {dayObj.timeslots.map((timeslot, idx) => (
                <li key={idx}>
                  <button onClick={() => handleDateTimeSelect(dayObj.day, timeslot)}>{timeslot}</button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DateTimeSelection;