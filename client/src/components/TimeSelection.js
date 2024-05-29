import React from 'react';

const TimeSelection = ({ availableTimes, onSelectTime }) => {
  return (
    <div className="time-selection">
      <h1>Selecciona una hora</h1>
      <div className="times">
        {availableTimes.map((time) => (
          <button
            key={time}
            onClick={() => onSelectTime(time)}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSelection;
