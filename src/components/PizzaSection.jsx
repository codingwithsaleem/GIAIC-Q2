import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import PizzaTags from "./PizzaTags";
import PizzaCard from "./PizzaCard";
import WeekModal from "./WeekModal";

const PizzaSection = () => {
  const [tag, setTag] = useState("All");
  const [meals, setMeals] = useState([]);
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [weekMeals, setWeekMeals] = useState({
    "Week 1": [],
    "Week 2": [],
    "Week 3": [],
    "Week 4": []
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMeals, setSelectedMeals] = useState([]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then(response => response.json())
      .then(data => setMeals(data.recipes));
  }, []);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredMeals = tag === "All"
    ? meals
    : meals.filter(meal => weekMeals[tag].includes(meal.id));

    const handleSaveWeek = (week) => {
        if (week) {
          setWeekMeals(prevWeekMeals => {
            const newWeekMeals = { ...prevWeekMeals };
            selectedMeals.forEach(meal => {
              if (!newWeekMeals[week].includes(meal.id)) {
                newWeekMeals[week] = [...newWeekMeals[week], meal.id];
              }
            });
            return newWeekMeals;
          });
          setSelectedMeals([]);
        }
        setIsModalOpen(false);
      };

  const handleAddToWeek = () => {
    setIsModalOpen(true);
  };





  const handleDeleteMeal = (mealId, week) => {
    setWeekMeals({
      ...weekMeals,
      [week]: weekMeals[week].filter(id => id !== mealId)
    });
  };

  const handleMealSelect = (meal) => {
    setSelectedMeals(prevSelectedMeals => {
      if (prevSelectedMeals.includes(meal)) {
        return prevSelectedMeals.filter(m => m !== meal);
      }
      return [...prevSelectedMeals, meal];
    });
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <div className="px-12 md:px-28 flex items-center py-5  bg-gradient-to-r from-[#FBEBF5] to-[#E5F0F8] text-xl md:text-2xl font-bold">
        <h2>Week Orders</h2>
      </div>
      <div className="px-12 text-black text-sm flex flex-row justify-around items-center gap-2 py-6 flex-wrap">
        <PizzaTags onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <PizzaTags onClick={handleTagChange} name="Week 1" isSelected={tag === "Week 1"} />
        <PizzaTags onClick={handleTagChange} name="Week 2" isSelected={tag === "Week 2"} />
        <PizzaTags onClick={handleTagChange} name="Week 3" isSelected={tag === "Week 3"} />
        <PizzaTags onClick={handleTagChange} name="Week 4" isSelected={tag === "Week 4"} />
        <div>
          <button
            className="bg-[#004370] text-white text-sm font-bold px-6 py-2 rounded-lg shadow-md disabled:opacity-50"
            onClick={handleAddToWeek}
            disabled={tag !== "All"}
          >
            Add to Week
          </button>
        </div>
      </div>
      <ul ref={ref} className="py-10 px-12 md:px-24 md:px-30 grid md:grid-cols-3 gap-8 md:gap-12 bg-gradient-to-r from-[#FBEBF5] to-[#E5F0F8] min-h-screen">
        {filteredMeals.map((meal, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <PizzaCard
              key={meal.id}
              meal={meal}
              onSelectMeal={handleMealSelect}
              isSelected={selectedMeals.includes(meal)}
              onDeleteMeal={handleDeleteMeal}
              tag={tag}
            />
          </motion.li>
        ))}
      </ul>
      {isModalOpen && <WeekModal onSaveWeek={handleSaveWeek} />}
    </section>
  );
};

export default PizzaSection;
