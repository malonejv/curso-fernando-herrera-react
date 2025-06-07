import { useState } from "react";
import "./GifApp.css";
import { AddCategory, GifGrid  } from "./components";
import { Assertion } from "./common/Assertion";

function GifApp() {
  const [categories, setCategories] = useState(["Random"]);

  const onNewCategory = (newCategory) => {
    try {
      Assertion.This(newCategory).IsNotNullOrEmpty("Debe ingresar una categoría.");

      try {
        Assertion.This(categories).DoesNotContain(newCategory);

        setCategories([newCategory, ...categories]);
      } catch {
        return;
      }
    } catch (error) {
      console.error(error.message);
      return;
    }
  };

  const handleRemoveCategory = (category) => {
    const updatedCategories = categories.filter((cat) => cat !== category);
    setCategories(updatedCategories);
  };
  
  return (
    <>
      <h1>GifApp</h1>
      <AddCategory onNewCategory={onNewCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} onRemove={handleRemoveCategory} />
      ))}
    </>
  );
}

export default GifApp;
