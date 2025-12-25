import { MdBikeScooter } from "react-icons/md";
import { FaSwimmer } from "react-icons/fa";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import Image from "next/image";

export default function LuxuryHotel() {
  return (
    <div className="bg-secondary py-16 px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-primary w-fit px-4 py-1 text-sm font-semibold bg-white rounded">
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
                <Image
                  height={200}
                  width={200}
                  src="/images/correctImg.PNG"
                  alt="check"
                  className="w-5 h-5 "
                />
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </li>
            ))}
          </ul>

          <button className="flex items-center gap-2 mt-6 bg-primary text-white font-semibold px-6 py-3 rounded">
            Discover More <HiMiniArrowUpRight />
          </button>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className=" h-[400px] md:h-[500px] rounded-lg overflow-hidden">
          <Image
            height={500}
            width={500}
            src="/images/hotel.PNG"
            alt="hotel"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
