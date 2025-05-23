import { useState } from 'react';

export default function BookingForm() {
  const [form, setForm] = useState({ name: '', room: '', date: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    }).then(() => alert('Booking successful!'));
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-2">
      <input type="text" placeholder="Customer Name" className="input" required
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input type="text" placeholder="Room Number" className="input" required
        onChange={(e) => setForm({ ...form, room: e.target.value })}
      />
      <input type="date" className="input" required
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />
      <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded">Book Now</button>
    </form>
  );
}
