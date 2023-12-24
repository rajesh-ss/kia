import { RiInstagramFill } from "react-icons/ri";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { IoMdMail } from "react-icons/io";
import { IoIosGlobe } from "react-icons/io";

export const ContactUsWrap = () => {
  return (
    <div className="h-[calc(100vh-4rem)] w-[100vw] flex flex-col justify-start mt-10 items-center">
      <h1 className="text-[3rem] text-center font-[400]">Contact US</h1>
      <div className="grid grid-cols-12  gap-5 mt-5">
        <div className="col-span-3 flex flex-col items-center hover:scale-105 cursor-pointer">
          <RiInstagramFill className="text-[5rem]" />
          <p>@Skia_coffee</p>
        </div>
        <div className="col-span-3 flex flex-col items-center hover:scale-105 cursor-pointer">
          <HiDevicePhoneMobile className="text-[5rem]" />
          <p>+91 9731138402</p>
        </div>
        <div className="col-span-3 flex flex-col items-center hover:scale-105 cursor-pointer">
          <IoMdMail className="text-[5rem]" />
          <p>info@skiacoffee.com</p>
        </div>
        <div className="col-span-3 flex flex-col items-center hover:scale-105 cursor-pointer">
          <IoIosGlobe className="text-[5rem]" />
          <p>www.skiacoffee.com</p>
        </div>
      </div>
    </div>
  );
};
