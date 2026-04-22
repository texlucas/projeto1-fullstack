import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FoodProvider } from "./contexts/FoodContext";
import "./styles.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <FoodProvider>
    <App />
  </FoodProvider>
)
