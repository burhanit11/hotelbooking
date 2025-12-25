export default function Experince() {
  return (
    <div className="bg-primary py-12 px-4 md:px-8">
      {/* Section Title */}
      <p className="text-primary mx-auto w-fit px-4 py-1 text-center font-semibold text-sm bg-white rounded">
        AMAZING EXPERIENCE
      </p>

      <h1 className="text-white pt-4 text-2xl md:text-4xl font-bold text-center">
        Relax And Enjoy With Our <br className="hidden md:block" /> Hotel &
        Resort
      </h1>

      <div className="w-full max-w-2xl mx-auto mt-8 aspect-video">
        <video controls className="w-full h-full rounded-lg object-cover">
          <source src="/hotelvideo.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
