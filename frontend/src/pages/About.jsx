import bgImg from "../assets/images/images.jpg";
import Counter from "../components/Counter";
import LuxuryHotel from "../components/LuxuryHotel";
import OurClents from "../components/OurClents";
import OurSkills from "../components/OurSkills";
import OurStaff from "../components/OurStaff";

export default function About() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="filter brightness-75 min-h-[50vh] md:min-h-[70vh] w-full bg-no-repeat bg-cover bg-center flex flex-col justify-center items-start px-6 md:px-16 py-16 relative"
      >
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
          About Us
        </h1>
        <h4 className="text-white font-semibold text-sm sm:text-base md:text-lg">
          Home &gt; About Us
        </h4>
      </div>
      <LuxuryHotel />
      <Counter />

      <OurSkills />
      <OurStaff />
      <OurClents />
    </>
  );
}
