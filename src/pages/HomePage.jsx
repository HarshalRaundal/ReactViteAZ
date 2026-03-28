import { useState } from "react";
import Hero from "../components/Hero";
import { ReactClassComponent } from "../components/ReactClassComponent";

const HomePage = () => {
  const [category, setCategory] = useState("laptops");

  return (
    <div>
      <Hero />
      <ReactClassComponent category={category} />
      <button
        type="button"
        onClick={() => {
          const categories = ["beauty", "fragrances", "furniture", "groceries"];
          setCategory(categories[parseInt((Math.random() * 10) % 4)]);
        }}
        className="p-4 rounded-md bg-amber-300 cursor-pointer active:bg-amber-600 hover:bg-amber-600 mx-40 my-4"
      >
        change category
      </button>
    </div>
  );
};

export default HomePage;
