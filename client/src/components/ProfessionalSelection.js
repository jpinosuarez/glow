import React from 'react';

const ProfessionalSelection = ({ professionals, onSelectProfessional }) => {
  return (
    <div className="professional-selection">
      <h1>¿Con quién te quieres atender?</h1>
      <div className="professionals">
        {professionals.map((professional) => (
          <button
            key={professional.id}
            onClick={() => onSelectProfessional(professional.id)}
          >
            {professional.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalSelection;
