import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Bookings from './pages/Bookings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </BrowserRouter>
  );
}
