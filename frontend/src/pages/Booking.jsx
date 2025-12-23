import bgImg from '../assets/images/images.jpg';
import Counter from '../components/Counter';
import LuxuryRooms from '../components/LuxuryRooms';
import MakeAppointment from '../components/Makeappointment';

export default function Booking() {
  return (
    <>
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="filter brightness-75 min-h-[50vh] md:min-h-[70vh] w-full bg-no-repeat bg-cover bg-center flex flex-col justify-center items-start px-6 md:px-16 py-16 relative"
    >
      <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
        Booking
      </h1>
      <h4 className="text-white font-semibold text-sm sm:text-base md:text-lg">
        Home &gt; Booking
      </h4>
    </div>
    
<MakeAppointment/>
<LuxuryRooms/>
    </>
  );
}
