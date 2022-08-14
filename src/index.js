import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HotelContextProvider } from "./store/hotel-context";
import "./styles/app.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HotelContextProvider>
      <App />
    </HotelContextProvider>
  </React.StrictMode>
);
