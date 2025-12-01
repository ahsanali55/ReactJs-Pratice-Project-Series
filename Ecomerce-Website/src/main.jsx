import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { AnimatePresence } from "framer-motion";



createRoot(document.getElementById("root")).render(
  <StrictMode>
  <AnimatePresence mode="wait">
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </AnimatePresence>

   </StrictMode>
);
