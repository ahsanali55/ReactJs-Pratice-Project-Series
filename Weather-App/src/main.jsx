import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import WeatherStore from "./store/WeatherStore.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WeatherStore>
    <App />

    </WeatherStore>
  </StrictMode>
);
