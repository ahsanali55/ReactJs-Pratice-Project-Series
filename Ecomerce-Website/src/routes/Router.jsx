import React from 'react'
import App from "./App.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Product from "./Product.jsx";
import Contact from "./Contact.jsx";
import { createBrowserRouter } from "react-router-dom";


    
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "/", element: <Home />},
      {path: "/about", element: <About />},
      {path: "/product", element: <Product />},
      {path: "/contact", element: <Contact />}
    ],
  },
])
export default router;
  