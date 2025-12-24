export default function Counter() {
  return (
    <div className="flex sm:flex-row flex-col justify-between bg-primary md:px-20 px-5 py-5">
      <div className="flex flex-col justify-center items-center text-white">
        <span className="text-3xl font-bold">350+</span>
        <span className="text-md">Luxury Rooms</span>
      </div>

      <div className="flex flex-col justify-center items-center text-white">
        <span className="text-3xl font-bold">650+</span>
        <span className="text-md">Regular Guests</span>
      </div>

      <div className="flex flex-col justify-center items-center text-white">
        <span className="text-3xl font-bold">80+</span>
        <span className="text-md">Team Members</span>
      </div>

      <div className="flex flex-col justify-center items-center text-white">
        <span className="text-3xl font-bold">75+</span>
        <span className="text-md">Beaches</span>
      </div>
    </div>
  );
}
