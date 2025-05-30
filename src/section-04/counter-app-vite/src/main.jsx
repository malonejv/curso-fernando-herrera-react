import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Counter.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Counter count={0} />
  </React.StrictMode>
);