import { RouteObject } from "react-router-dom";
import { HomeWrapper } from "../../app/home/HomeWrapper";
import { HomeLayout } from "../../layout/HomeLayout";
import { AboutUsWrap } from "../../app/about_us/AboutUsWrap";
import { AboutUsLayout } from "../../layout/AboutUsLayout";

export const AboutUsRoute: RouteObject = {
  path: "about_us",
  element: <AboutUsLayout />,
  children: [
    {
      index: true,
      element: <AboutUsWrap />,
    },
  ],
};
