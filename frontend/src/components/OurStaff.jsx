import bgImg from "../assets/images/images.jpg";

export default function OurStaff() {
  return (
    <div className="bg-gray-100 py-16 px-4 md:px-8">
      <p className="text-primary mx-auto w-fit px-4 py-1 text-sm bg-secondary rounded">
        FLXYLAND STAFF
      </p>

      <h1 className="text-black text-2xl md:text-4xl font-bold text-center mt-3">
        Expert Staff Persons
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-10">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="rounded-lg bg-white overflow-hidden relative"
          >
            {/* IMAGE */}
            <img src={bgImg} className="h-60 w-full object-cover" alt="staff" />

            {/* PLUS ICON */}
            <span className="absolute top-3 right-3 bg-primary text-white w-7 h-7 flex items-center justify-center rounded">
              +
            </span>

            {/* CONTENT */}
            <div className="p-4">
              <h1 className="text-lg font-bold">Michael Dean</h1>
              <p className="text-sm text-gray-600">— Chef Master</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
