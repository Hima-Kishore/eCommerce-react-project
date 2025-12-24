import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage.jsx';
import { CheckoutPage } from './pages/CheckoutPage.jsx';
import { Orders } from './pages/Orders.jsx';
import { Tracking } from './pages/Tracking.jsx';
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="Orders" element={<Orders />} />
      <Route path="Tracking" element={<Tracking />} />
    </Routes>
  );
}

export default App
