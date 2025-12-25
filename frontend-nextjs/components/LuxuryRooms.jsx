import { MdGroups2 } from "react-icons/md";
import { FaBed, FaBath } from "react-icons/fa";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import Image from "next/image";

export default function LuxuryRooms() {
  return (
    <div className="bg-primary py-12 px-4 md:px-8">
      {/* Section Title */}
      <p className="text-primary mx-auto w-fit px-4 py-1 text-center text-sm bg-white rounded">
        STAY WITH US
      </p>

      <h1 className="text-white text-2xl md:text-4xl font-bold text-center mt-2">
        Luxury Rooms And Resort
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto py-10">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="rounded-lg bg-white overflow-hidden shadow relative"
          >
            {/* Room Image */}
            <Image
              height={400}
              width={400}
              src="/images/images.jpg"
              className="w-full h-48 object-cover"
              alt="Room"
            />

            {/* Price Tag */}
            <span className="absolute top-3 right-3 bg-primary text-white w-20 h-8 flex items-center justify-center rounded font-medium text-sm">
              $400/Night
            </span>

            {/* Card Content */}
            <div className="p-4">
              <h1 className="text-lg font-bold mb-2">Deluxe Room</h1>

              {/* Features */}
              <div className="flex flex-wrap gap-4 text-sm mb-3">
                <span className="flex items-center gap-1">
                  <MdGroups2 size={18} className="text-primary" />2 Guests
                </span>
                <span className="flex items-center gap-1">
                  <FaBed size={18} className="text-primary" />2 Beds
                </span>
                <span className="flex items-center gap-1">
                  <FaBath size={18} className="text-primary" />1 Bath
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis labore officia enim.
              </p>

              {/* Read More Button */}
              <button className="flex items-center gap-2 bg-primary text-white font-medium px-4 py-2 rounded  transition">
                Read More <HiMiniArrowUpRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
