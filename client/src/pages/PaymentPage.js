import React from 'react';
import Payment from '../components/Payment';

const PaymentPage = () => {
  const amount = 100; // Importe de la seña

  const handlePay = () => {
    console.log('Pago realizado');
    // Navegar a la página de confirmación
  };

  return (
    <Payment amount={amount} onPay={handlePay} />
  );
};

export default PaymentPage;
