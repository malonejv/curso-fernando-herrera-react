import React, { useState } from "react";
import { Assertion } from "../../common/Assertion";
import "./AddCategory.css";

export const AddCategory = ({ onNewCategory }) => {
  const [categoryValue, setCategoryValue] = useState("");
  const [errorState, setErrorState] = useState("");

  const onCategoryChange = (e) => {
    setCategoryValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newCategory = categoryValue.trim();
    try {
      Assertion.This(newCategory).IsNotNullOrEmpty("Debe ingresar una categoría.");

      onNewCategory(newCategory);
    } catch (error) {
      setErrorState(error.message);
      return;
    }

    setCategoryValue("");
    setErrorState("");
    e.target.focus();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="add-category">
        <div className="add-category-input">
          <input type="text" name="category" id="category" placeholder="Agrega una categoría" value={categoryValue} onChange={onCategoryChange} className="mr-1" />
          <button id="add-button" type="submit" className="btn btn-primary">
            Agregar
          </button>
        </div>
        <span className="error" id="category-error">
          {errorState}
        </span>
      </div>
    </form>
  );
};
