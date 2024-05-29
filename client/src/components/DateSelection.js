import React from 'react';

const DateSelection = ({ availableDates, onSelectDate }) => {
  return (
    <div className="date-selection">
      <h1>Selecciona una fecha</h1>
      <div className="dates">
        {availableDates.map((date) => (
          <button
            key={date}
            onClick={() => onSelectDate(date)}
          >
            {date}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DateSelection;
