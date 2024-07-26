import React from "react";

const PizzaTags = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-[#004370] border-b-4 border-[#004370]"
    : "text-[#ADB7BE] border-slate-600 hover:border-blue-700";
  return (
    <button
      className={`${buttonStyles} text-black px-6 py-3 font-sm font-bold cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default PizzaTags;
