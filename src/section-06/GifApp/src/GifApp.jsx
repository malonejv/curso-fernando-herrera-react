import { useState } from "react";
import "./GifApp.css";
import { AddCategory } from "./components/AddCategory/AddCategory";

function GifApp() {
  const [categories, setCategories] = useState(["Perros"]);

  // const onAddCategory = () => {
  //   const categoryInput = document.querySelector(ui.categoryInput);

  //   setCategories([categoryInput.value, ...categories]);
  // };
  return (
    <>
      {/*title*/}
      <h1>GifApp</h1>
      <AddCategory setCategories={setCategories} />
      {/*Listado de gif*/}
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <h2>{category}</h2>
            {/* Aquí iría el componente GifList que mostraría los gifs de la categoría */}
          </li>
        ))}
      </ul>
    </>
  );
}

export default GifApp;
