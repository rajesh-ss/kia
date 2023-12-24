import { RouteObject } from "react-router-dom";
import { HomeWrapper } from "../../app/home/HomeWrapper";
import { HomeLayout } from "../../layout/HomeLayout";
import { AboutUsWrap } from "../../app/about_us/AboutUsWrap";
import { AboutUsLayout } from "../../layout/AboutUsLayout";
import { ContactUSLayout } from "../../layout/ContactUSLayout";
import { ContactUsWrap } from "../../app/contact_us/ContactUsWrap";

export const ContactUsRoute: RouteObject = {
  path: "contact_us",
  element: <ContactUSLayout />,
  children: [
    {
      index: true,
      element: <ContactUsWrap />,
    },
  ],
};
