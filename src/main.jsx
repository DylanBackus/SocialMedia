import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "./css/home.css";
import { UserProvider } from "./UserContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(

    <BrowserRouter>
      <App />
    </BrowserRouter>

);
