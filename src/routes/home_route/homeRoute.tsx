import { RouteObject } from "react-router-dom";
import { HomeWrapper } from "../../app/home/HomeWrapper";
import { HomeLayout } from "../../layout/HomeLayout";
import { AboutUsLayout } from "../../layout/AboutUsLayout";

export const homeRoute: RouteObject = {
  path: "home",
  element: <HomeLayout />,
  children: [
    {
      path: "",
      element: <HomeWrapper />,
    },
  ],
};
