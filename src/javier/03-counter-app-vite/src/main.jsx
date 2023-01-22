import React from "react";
import ReactDOM from "react-dom/client";
import { MyApp } from "./MyApp";
import {MyComponentWithoutFramgment1, MyComponentWithoutFramgment2, MyFragment1, MyFragment2 } from "./Fragment";
import { Parametros } from "./Parametros";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <MyApp />
        <MyComponentWithoutFramgment1 />
        <MyComponentWithoutFramgment2 />
        <MyFragment1 />
        <MyFragment2 />
        <Parametros></Parametros>
    </React.StrictMode>
)
