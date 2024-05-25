/* eslint-disable no-unused-vars */
<<<<<<< HEAD
=======
// import React from "react";
>>>>>>> 70d1f86a832f0f12fc25fea85178ce6f93715482
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);
