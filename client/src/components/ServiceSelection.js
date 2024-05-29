import React from 'react';

const ServiceSelection = ({ services, onSelectService }) => {
  return (
    <div className="service-selection">
      <h1>Selecciona un servicio</h1>
      <div className="services">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => onSelectService(service.id)}
          >
            {service.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServiceSelection;
