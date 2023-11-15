import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/index.css";

import Home from "./routes/Home";
import Links from "./routes/Links/LinkPage";
import About from "./routes/About/AboutPage";
import Error from "./routes/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
  },
  {
    path: "about/",
    element: <About></About>,
  },
  {
    path: "Links/",
    element: <Links></Links>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
