import { useState } from 'react';
import { districts, provinces } from '../src/components/SriLankaDistricts';

export default function Booking() {
  const [formData, setFormData] = useState({
    fullName: '',
    nicOrPassport: '',
    contactNumber: '',
    province: '',
    district: '',
    nationality: '',
    checkIn: '',
    checkOut: '',
    roomType: 'Standard'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Booking submitted for ' + formData.fullName);
    // Normally here you would call an API to save booking
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: '1rem' }}>
      <h1>Guest Booking - Sri Lankan Hotel</h1>
      <form onSubmit={handleSubmit}>
        <label>Full Name:<br />
          <input name="fullName" value={formData.fullName} onChange={handleChange} required />
        </label><br /><br />
        <label>NIC / Passport Number:<br />
          <input name="nicOrPassport" value={formData.nicOrPassport} onChange={handleChange} required />
        </label><br /><br />
        <label>Contact Number:<br />
          <input name="contactNumber" type="tel" value={formData.contactNumber} onChange={handleChange} required pattern="\d{9,10}" placeholder="e.g. 0712345678" />
        </label><br /><br />
        <label>Province:<br />
          <select name="province" value={formData.province} onChange={handleChange} required>
            <option value="">-- Select Province --</option>
            {provinces.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </label><br /><br />
        <label>District:<br />
          <select name="district" value={formData.district} onChange={handleChange} required>
            <option value="">-- Select District --</option>
            {districts.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </label><br /><br />
        <label>Nationality:<br />
          <input name="nationality" value={formData.nationality} onChange={handleChange} required />
        </label><br /><br />
        <label>Check-in Date:<br />
          <input name="checkIn" type="date" value={formData.checkIn} onChange={handleChange} required />
        </label><br /><br />
        <label>Check-out Date:<br />
          <input name="checkOut" type="date" value={formData.checkOut} onChange={handleChange} required />
        </label><br /><br />
        <label>Room Type:<br />
          <select name="roomType" value={formData.roomType} onChange={handleChange}>
            <option value="Standard">Standard</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite</option>
          </select>
        </label><br /><br />
        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
}