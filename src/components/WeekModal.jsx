import React, { useState } from "react";

const WeekModal = ({ onSaveWeek }) => {
  const [selectedWeek, setSelectedWeek] = useState(null);

  const handleWeekClick = (week) => {
    setSelectedWeek(week);
  };

  const handleSaveClick = () => {
    if (selectedWeek) {
      onSaveWeek(selectedWeek);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h2 className="text-lg font-semibold text-zinc-800 mb-4">
          Select Week
        </h2>
        <div className="flex justify-between mb-4">
          <button
            className={`text-sm py-2 px-6 rounded-lg ${selectedWeek === "Week 1" ? 'bg-blue-300' : 'bg-gray-200'}`}
            onClick={() => handleWeekClick("Week 1")}
          >
            Week 1
          </button>
          <button
            className={`text-sm py-2 px-6 rounded-lg ${selectedWeek === "Week 2" ? 'bg-blue-300' : 'bg-gray-200'}`}
            onClick={() => handleWeekClick("Week 2")}
          >
            Week 2
          </button>
          <button
            className={`text-sm py-2 px-6 rounded-lg ${selectedWeek === "Week 3" ? 'bg-blue-300' : 'bg-gray-200'}`}
            onClick={() => handleWeekClick("Week 3")}
          >
            Week 3
          </button>
          <button
            className={`text-sm py-2 px-6 rounded-lg ${selectedWeek === "Week 4" ? 'bg-blue-300' : 'bg-gray-200'}`}
            onClick={() => handleWeekClick("Week 4")}
          >
            Week 4
          </button>
        </div>
        <div className="flex justify-between items-center mt-4">
          <button
            className="bg-gray-500 text-white text-sm font-bold px-10 py-2 rounded-lg shadow-md"
            onClick={() => onSaveWeek(null)}
          >
            Cancel
          </button>
          <button
            className="bg-[#004370] text-white text-sm font-bold px-10 py-2 rounded-lg shadow-md"
            onClick={handleSaveClick}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeekModal;
