import { useEffect, useState } from 'react';

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bookings')
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">All Bookings</h2>
      <ul>
        {bookings.map(b => (
          <li key={b.id}>🛏️ {b.name} - Room {b.room} - {b.date}</li>
        ))}
      </ul>
    </div>
  );
}
