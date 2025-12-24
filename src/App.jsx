import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage.jsx'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="checkout" element={<div> HII </div>}></Route>
    </Routes>
  );
}

export default App
