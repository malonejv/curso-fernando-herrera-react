import React from "react";
import "./GridHeader.css";

export const GridHeader = ({ header, onRemove }) => {
  return (
    <h2 className="grid-header">
      {header} <button onClick={onRemove}>X</button>
    </h2>
  );
};
