// import bgImg from "../assets/images/images.jpg";

// export default function OurStaff() {
//   return (
//     <div className="bg-gray-100 py-16 px-4 md:px-8">
//       <p className="text-primary mx-auto w-fit px-4 py-1 text-sm bg-secondary rounded">
//         FLXYLAND STAFF
//       </p>

//       <h1 className="text-black text-2xl md:text-4xl font-bold text-center mt-3">
//         Expert Staff Persons
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-10">
//         {[1, 2, 3, 4].map((item) => (
//           <div
//             key={item}
//             className="rounded-lg bg-white overflow-hidden relative"
//           >
//             {/* IMAGE */}
//             <img src={bgImg} className="h-60 w-full object-cover" alt="staff" />

//             {/* PLUS ICON */}
//             <span className="absolute top-3 right-3 bg-primary text-white w-7 h-7 flex items-center justify-center rounded">
//               +
//             </span>

//             {/* CONTENT */}
//             <div className="p-4">
//               <h1 className="text-lg font-bold">Michael Dean</h1>
//               <p className="text-sm text-gray-600">— Chef Master</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import axios from "axios";
import bgImg from "../assets/images/images.jpg";

export default function OurStaff() {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/staff");
        setStaff(res.data.data || []);
      } catch (error) {
        console.error("Failed to fetch staff", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStaff();
  }, []);

  return (
    <div className="bg-gray-100 py-16 px-4 md:px-8">
      <p className="text-primary mx-auto w-fit px-4 py-1 text-sm bg-secondary rounded">
        FLXYLAND STAFF
      </p>

      <h1 className="text-black text-2xl md:text-4xl font-bold text-center mt-3">
        Expert Staff Persons
      </h1>

      {loading ? (
        <p className="text-center mt-10">Loading staff...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-10">
          {staff.map((member) => (
            <div
              key={member._id}
              className="rounded-lg bg-white overflow-hidden relative"
            >
              <img
                src={member.image || bgImg}
                className="h-60 w-full object-cover"
                alt={member.name}
              />

              <span className="absolute top-3 right-3 bg-primary text-white w-7 h-7 flex items-center justify-center rounded">
                +
              </span>

              <div className="p-4">
                <h1 className="text-lg font-bold">{member.name}</h1>
                <p className="text-sm text-gray-600">
                  <span className="text-primary">— </span>
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
