import { useRouter } from 'next/router';

export default function Receipt() {
  const router = useRouter();
  const booking = router.query; // In a real app, you'd fetch this from API or context

  if (!booking.fullName) {
    return <p>No booking info provided.</p>
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-LK', { style: 'currency', currency: 'LKR' }).format(amount);
  };

  const totalPrice = 8500; // fixed example

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: '1rem', border: '1px solid #ccc' }}>
      <h1>Booking Receipt</h1>
      <p><b>Guest Name:</b> {booking.fullName}</p>
      <p><b>Room Type:</b> {booking.roomType}</p>
      <p><b>Total Price:</b> {formatCurrency(totalPrice)}</p>
      <p><b>Payment Status:</b> Paid</p>
      <p><b>Date:</b> {new Date().toLocaleDateString('en-LK')}</p>
    </div>
  )
}