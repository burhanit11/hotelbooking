import { HiMiniArrowUpRight } from "react-icons/hi2";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(/images/images.jpg)` }}
        className="filter brightness-75 min-h-[50vh] md:min-h-[70vh] w-full bg-no-repeat bg-cover bg-center flex flex-col justify-center items-start px-6 md:px-16 py-16 relative"
      >
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
          404 Error
        </h1>
        <h4 className="text-white font-semibold text-sm sm:text-base md:text-lg">
          Home &gt; Error
        </h4>
      </div>
      <div className="bg-secondary py-10 ">
        <Image
          height={500}
          width={500}
          src="/images/404page.PNG"
          alt="404-image"
          className="mx-auto"
        />
        <h1 className="text-black text-[40px] font-bold text-center">
          Ohh! Page Not Found
        </h1>
        <p className=" text-center py-4">
          Lorem ipsum dolor adipisicing elit. Voluptatum, qui sapiente
          architecto tenetur nam accusantium ipsa debitis. <br /> Quisquam quia
          labore ea cum architecto!
        </p>

        <div className="mx-auto w-40">
          <button className="flex items-center gap-2 text-white font-semibold bg-primary rounded p-3 ">
            Book Your Stay <HiMiniArrowUpRight />
          </button>
        </div>
      </div>
    </>
  );
}
