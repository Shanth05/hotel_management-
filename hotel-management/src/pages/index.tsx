import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '1rem' }}>
      <h1>Welcome to Sri Lankan Hotel Management System</h1>
      <p>Manage your guests and bookings with ease.</p>
      <Link href="/booking">
        <a style={{ color: 'blue', textDecoration: 'underline' }}>Go to Booking</a>
      </Link>
    </div>
  )
}