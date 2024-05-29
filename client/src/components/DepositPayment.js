// src/components/DepositPayment.js
import React, { useState } from 'react';

const DepositPayment = ({ onConfirmReservation }) => {
  const [paid, setPaid] = useState(false);

  const handlePayment = () => {
    // Lógica de pago simulada
    // Aquí deberías integrar la lógica real de pago
    setPaid(true);
    onConfirmReservation(); // Llama a la función de callback para confirmar la reserva
  };

  return (
    <div>
      <h2>Pago de Seña:</h2>
      {!paid ? (
        <button onClick={handlePayment}>Pagar Seña</button>
      ) : (
        <p>Seña pagada correctamente. Reserva confirmada.</p>
      )}
    </div>
  );
};

export default DepositPayment;