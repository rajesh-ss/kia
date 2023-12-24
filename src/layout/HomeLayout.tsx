import { NavBar } from "../components/navbar/Navbar";
import { MdStars } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { Outlet } from "react-router-dom";

export const HomeLayout = () => {
  return (
    <div className="h-[100vh] overflow-y-hidden p-0 border-[0rem] border-[red] home-banner-bg">
      <NavBar
        left_items={[
          {
            itemName: "Home",
            itemElement: MdStars,
            itemRoute: "/home",
          },
          {
            itemName: "About Us",
            itemElement: FaUsers,
            itemRoute: "/about_us",
          },
          {
            itemName: "Contact Us",
            itemElement: HiOutlineLightBulb,
            itemRoute: "/contact_us",
          },
        ]}
        RightItm=""
      />
      <Outlet />
    </div>
  );
};
