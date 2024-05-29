import React from 'react';

const Payment = ({ amount, onPay }) => {
  return (
    <div className="payment">
      <h1>Pagar Seña</h1>
      <p>Importe: ${amount}</p>
      <button onClick={onPay}>Pagar</button>
    </div>
  );
};

export default Payment;
