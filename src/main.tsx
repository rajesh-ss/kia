import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routesV1 } from "./routes/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routesV1} />
  </React.StrictMode>
);
