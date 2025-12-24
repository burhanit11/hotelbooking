import bgImg from "../assets/images/images.jpg";
import { MdBikeScooter } from "react-icons/md";
import { FaSwimmer } from "react-icons/fa";
import correctImg from "../assets/images/correctImg.PNG";
import { IoRestaurantSharp } from "react-icons/io5";
import { HiMiniArrowUpRight } from "react-icons/hi2";

export default function LuxuryHotel() {
  return (
    <div className="bg-secondary py-16 px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-primary w-fit px-4 py-1 text-sm bg-white rounded">
            LUXURY HOTEL
          </p>

          <h1 className="text-2xl md:text-3xl font-bold pt-5">
            We Provide Outdoor Activities <br className="hidden md:block" />
            To All Visitors
          </h1>

          <p className="text-gray-700 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            assumenda, soluta accusamus excepturi sequi sed veniam.
          </p>

          {/* FEATURES */}
          <div className="flex flex-col sm:flex-row gap-6 py-6">
            <div className="flex gap-3 items-center">
              <FaSwimmer size={40} className="text-primary" />
              <h2 className="text-lg font-semibold">
                The Best Swimming <br /> Pool Here
              </h2>
            </div>

            <div className="flex gap-3 items-center">
              <MdBikeScooter size={40} className="text-primary" />
              <h2 className="text-lg font-semibold">
                The Best <br /> Stationary Bike
              </h2>
            </div>
          </div>

          {/* LIST */}
          <ul className="space-y-3">
            {[1, 2, 3].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <img src={correctImg} alt="check" className="w-5 h-5 " />
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </li>
            ))}
          </ul>

          <button className="flex items-center gap-2 mt-6 bg-primary text-white font-semibold px-6 py-3 rounded">
            Discover More <HiMiniArrowUpRight />
          </button>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
          <img
            src={bgImg}
            alt="hotel"
            className="w-full h-full object-cover rounded-lg"
          />

          {/* RESTAURANT CARD */}
          <div className="absolute bottom-6 right-6 bg-black w-40 h-40 rounded-lg text-center p-4">
            <IoRestaurantSharp size={40} className="text-white mx-auto mt-2" />
            <h3 className="text-white font-bold mt-2">Restaurants</h3>
            <p className="text-white text-sm mt-1">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
