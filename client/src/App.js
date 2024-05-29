import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategorySelectionPage from './pages/CategorySelectionPage';
import ServiceSelectionPage from './pages/ServiceSelectionPage';
import ProfessionalSelectionPage from './pages/ProfessionalSelectionPage';
import DateSelectionPage from './pages/DateSelectionPage';
import TimeSelectionPage from './pages/TimeSelectionPage';
import SummaryPage from './pages/SummaryPage';
import PaymentPage from './pages/PaymentPage';
import ConfirmationPage from './pages/ConfirmationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CategorySelectionPage />} />
        <Route path="/service" element={<ServiceSelectionPage />} />
        <Route path="/professional" element={<ProfessionalSelectionPage />} />
        <Route path="/date" element={<DateSelectionPage />} />
        <Route path="/time" element={<TimeSelectionPage />} />
        <Route path="/summary" element={<SummaryPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
