// import TestCrash from "@/components/TestCrash";

export default function Home() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(/images/images.jpg)` }}
        className="filter brightness-75 min-h-[50vh] md:min-h-[100vh] w-full bg-no-repeat bg-cover bg-center flex flex-col justify-center items-start px-6 md:px-16 py-16 relative"
      >
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
          Home
        </h1>
        <h4 className="text-white font-semibold text-sm sm:text-base md:text-lg">
          Home &gt; Page
        </h4>
      </div>
      {/* <TestCrash /> */}
    </>
  );
}
