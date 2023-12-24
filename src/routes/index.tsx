import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { HomeLayout } from "../layout/HomeLayout";
import { homeRoute } from "../routes/home_route/homeRoute";
import { AboutUsRoute } from "../routes/about_us_route/AboutUsRoute";
import { ContactUsRoute } from "../routes/contact_us_route/ContactUsRoute";

export const routesV1 = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        ...homeRoute,
      },
      {
        ...AboutUsRoute,
      },
      {
        ...ContactUsRoute,
      },
    ],
  },
]);
