import Header from '../components/Header';
import RoomList from '../components/RoomList';
import BookingForm from '../components/BookingForm';

export default function Home() {
  return (
    <div className="p-4">
      <Header />
      <BookingForm />
      <RoomList />
    </div>
  );
}
