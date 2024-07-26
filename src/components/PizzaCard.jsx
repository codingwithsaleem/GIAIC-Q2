import React from "react";
import { FaRegTrashAlt, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";


const PizzaCard = ({ meal, onSelectMeal, isSelected, onDeleteMeal, tag }) => {

    const fullStars = Math.floor(meal.rating);
  const hasHalfStar = meal.rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer md:min-h-[500px] ${isSelected ? 'border-2 border-[#004370]' : ''}`}
      onClick={() => onSelectMeal(meal)}
    >
      <div className="relative m-4">
        <img
          className="w-full h-48 object-cover border rounded-lg my-4"
          src={meal.image}
          alt={meal.name}
        />
        {tag !== "All" && (
          <span
            className="bg-red-200 text-red-800 p-2 absolute top-2 left-2 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              onDeleteMeal(meal.id, tag);
            }}
          >
            <FaRegTrashAlt />
          </span>
        )}
        <p className="bg-black text-white rounded-lg px-4 absolute top-2 right-2">
          {meal.mealType.join(", ")}
        </p>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold">{meal.name}</h2>
        <p className="text-sm text-zinc-500">{meal.instructions}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-zinc-500"><span className="font-bold">Cuisine:</span> {meal.cuisine}</span>
          <div className="flex items-center mt-1 text-sm">
            <span className="text-sm text-zinc-500"><span className="font-bold text-sm">Rating:</span> {meal.rating}</span>
            <div className="ml-2 text-yellow-500 flex">
              {[...Array(fullStars)].map((_, index) => (
                <FaStar key={index} />
              ))}
              {hasHalfStar && <FaStarHalfAlt />}
              {[...Array(emptyStars)].map((_, index) => (
                <FaRegStar key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
