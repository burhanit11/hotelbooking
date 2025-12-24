import Image from "next/image";

export default function OurClents() {
  const clients = [
    "/images/clent1.PNG",
    "/images/clent2.PNG",
    "/images/clent3.PNG",
    "/images/clent4.PNG",
    "/images/clent5.PNG",
    "/images/clent6.PNG",
  ];

  return (
    <div className="bg-secondary py-16 px-4">
      <p className="text-primary mx-auto w-fit px-4 py-1 text-sm bg-white rounded">
        STAY WITH US
      </p>

      <h1 className="text-black pt-4 text-2xl md:text-4xl font-bold text-center">
        We Have More Than 150+ <br className="hidden md:block" /> Global Clients
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto py-10">
        {clients.map((client, index) => (
          <div key={index}>
            <Image
              height={300}
              width={300}
              src={client}
              alt="client"
              className="max-h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
