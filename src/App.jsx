import PizzaSection from "./components/PizzaSection";

function App() {
  return (
    <>
      <section className="relative bg-zinc-100 dark:bg-zinc-800">
        <img
          src="/images/hero1.jpg"
          alt="Delicious pizza"
          className="absolute inset-0 object-cover w-full h-full opacity-30"
        />
        <div className="relative z-10 max-w-2xl mx-auto text-center py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
            Optimized Your Meal
          </h2>
          <p className="mt-4  text-zinc-700 dark:text-zinc-300">
            Select Meal to Add in Week. You will be able to edit, modify and
            change the Meal Weeks.
          </p>
        </div>
      </section>
      

      <PizzaSection />
    </>
  );
}

export default App;
