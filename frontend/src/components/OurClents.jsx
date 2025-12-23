import clent1 from "../assets/images/clent1.PNG";
import clent2 from "../assets/images/clent2.PNG";
import clent3 from "../assets/images/clent3.PNG";
import clent4 from "../assets/images/clent4.PNG";
import clent5 from "../assets/images/clent5.PNG";
import clent6 from "../assets/images/clent6.PNG";

export default function OurClents() {
  return (
    <div className="bg-secondary py-16 px-4">
      <p className="text-primary mx-auto w-fit px-4 py-1 text-sm bg-white rounded">
        STAY WITH US
      </p>

      <h1 className="text-black pt-4 text-2xl md:text-4xl font-bold text-center">
        We Have More Than 150+ <br className="hidden md:block" /> Global Clients
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto py-10">
        {[clent1, clent2, clent3, clent4, clent5, clent6].map(
          (client, index) => (
            <div key={index}>
              <img
                src={client}
                alt="client"
                className="max-h-12 object-contain"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}
