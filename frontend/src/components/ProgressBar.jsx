const ProgressBar = ({ label, percent }) => {
  return (
    <div className="mb-5 mt-10 ">
      {/* Label + Percentage */}
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-medium text-primary">{percent}%</span>
      </div>

      {/* Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-primary h-2 rounded-full transition-all duration-700"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
