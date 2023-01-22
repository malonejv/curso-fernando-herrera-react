import React from "react";
import ReactDOM from "react-dom/client";
import { MyApp } from "./MyApp";
import {MyComponentWithoutFramgment1, MyComponentWithoutFramgment2, MyFragment } from "./Fragment";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <MyApp />
        <MyComponentWithoutFramgment1 />
        <MyComponentWithoutFramgment2 />
        <MyFragment />
    </React.StrictMode>
)
