import { useEffect, useState } from 'react';

export default function RoomList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/rooms')
      .then(res => res.json())
      .then(data => setRooms(data));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {rooms.map(room => (
        <div key={room.id} className="border p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Room {room.number}</h2>
          <p>Type: {room.type}</p>
          <p>Price: LKR {room.price}</p>
        </div>
      ))}
    </div>
  );
}