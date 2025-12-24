import hotel2 from "../assets/images/hotel2.PNG";
import ProgressBar from "./ProgressBar";

export default function OurSkills() {
  const skills = [
    { label: "Services", percent: 95 },
    { label: "Chef Master", percent: 85 },
    { label: "Design", percent: 92 },
    { label: "IT Solution", percent: 98 },
  ];

  return (
    <div className="bg-white py-16 px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-primary w-fit px-4 py-1 text-sm bg-secondary rounded">
            OUR SKILLS
          </p>

          <h1 className="text-2xl md:text-4xl font-bold mt-3">
            Why Choose For Us?
          </h1>

          <p className="text-gray-700 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            assumenda, soluta accusamus excepturi sequi sed veniam vel explicabo
            nemo.
          </p>

          {skills.map((skill, index) => (
            <ProgressBar
              key={index}
              label={skill.label}
              percent={skill.percent}
            />
          ))}
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className=" h-[350px] md:h-[450px] rounded-lg overflow-hidden">
          <img
            src={hotel2}
            alt="background"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
