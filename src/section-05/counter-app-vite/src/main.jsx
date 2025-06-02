import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Counter.jsx";
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Counter count={0} />
    {/* <App /> */}
  </React.StrictMode>
);