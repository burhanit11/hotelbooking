import bgImg from "../assets/images/images.jpg";
import AppointmentFrom from "./From";

export default function MakeAppointment() {
  return (
    <div className="bg-secondary py-10 px-4 md:px-8">
      {/* Heading */}
      <p className="text-primary mx-auto w-fit px-4 py-1 text-center text-sm bg-white rounded">
        STAY WITH US
      </p>

      <h1 className="text-black text-2xl md:text-4xl font-bold text-center mt-2">
        Make An Appointment
      </h1>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-8">
        {/* Form Section */}
        <div className="lg:col-span-2">
          <div className="bg-white p-5 md:p-7 rounded-lg shadow">
            <AppointmentFrom />
          </div>
        </div>

        {/* Info Card */}
        <div>
          <div className="bg-primary p-5 md:p-7 rounded-lg text-center text-white min-h flex flex-col justify-between">
            <img
              src={bgImg}
              alt="Hotel"
              className="rounded-lg mb-4 w-full h-40 object-cover"
            />

            <div>
              <h1 className="font-bold text-xl md:text-2xl py-2">
                (+92) 306 8866 333
              </h1>
              <p className="text-sm">Mon-Fri 7:00 am - 9:00 pm</p>
              <p className="text-sm">24/7 Service Available</p>
            </div>

            <button className="mt-5 bg-yellow-500 text-black font-semibold px-4 py-3 rounded">
              Book Your Stay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
