import imgOne from "../../assets/23007c91-cdac-42ce-b6ab-6c7e8d77ccf3.jpeg";
import imgTwo from "../../assets/CE0F2F27-B06A-42B9-807F-40A6AC83C87F.jpeg";
import { GiCoffeeBeans } from "react-icons/gi";
import imgThree from "../../assets/IMG_6877.jpeg";
import imgFour from "../../assets/23007c91-cdac-42ce-b6ab-6c7e8d77ccf3.jpeg";
import { FaHandHolding } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import { PiPlantBold } from "react-icons/pi";
import { FaPersonDigging } from "react-icons/fa6";

export const AboutUsWrap = () => {
  return (
    <div className="text-[#000] grid grid-cols-12 gap-12 h-[calc(100vh-4rem)]">
      <div className="border-0 border-[#000] col-span-7 pl-5 pt-5">
        <div>
          <h1 className="text-[3rem] font-[600]">About US</h1>
          <p className="text-[1.2rem] ml-5 font-[500]">
            Our central estate, Highland Temple Estate, is at an elevation of
            3360 feet in the hill station of Coorg in Karnataka, close to the
            Tadiandamol mountain in the mighty Western Ghats. We understand that
            coﬀee absorbs ﬂavours from its surroundings, so we grow a mix of the
            ﬁnest Robusta and Arabica beans amidst other ﬂora like jackfruit,
            avocado, orange and pepper. A practice that inspired a name, Skia in
            Greek means shade; all our coﬀee is shade grown and sun-dried
          </p>
        </div>
        <div className="mt-28 text-[2.5rem] font-[600]">
          <h1>WHAT MAKES SKIA SPECIAL?</h1>
          <div className="grid grid-cols-12  mt-5">
            <div className="col-span-4 flex flex-col items-center justify-center gap-5 my-2">
              <GiCoffeeBeans className="text-[3rem]" />
              <p className="text-[1rem]">SHADE GROWN COFFEE</p>
            </div>
            <div className="col-span-4 flex flex-col items-center justify-center gap-5  my-3">
              <FaHandHolding className="text-[3rem]" />
              <p className="text-[1rem]">HAND-PICKED BERRIES</p>
            </div>
            <div className="col-span-4 flex flex-col items-center justify-center gap-5  my-3">
              <BsFillSunFill className="text-[3rem]" />
              <p className="text-[1rem]">SUN-DRIED BEANS</p>
            </div>
            <div className="col-span-6 flex flex-col items-center justify-center gap-5  my-3">
              <PiPlantBold className="text-[3rem]" />
              <p className="text-[1rem]">COMMITTED TO ECO-CONSERVATION</p>
            </div>
            <div className="col-span-6 flex flex-col items-center justify-center gap-5  my-3">
              <FaPersonDigging className="text-[3rem]" />
              <p className="text-[1rem]">EMPLOYS LOCAL LABOUR</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-0 border-[#000] col-span-5 banner-about-us h-full">
        {/* <img src={imgThree} alt="" className="w-[30rem] h-auto col-span-12" /> */}
        {/* <span className="col-span-7"></span> */}
        {/* <span className="col-span-7"></span> */}

        {/* <img src={imgTwo} alt="" className="w-[15rem] h-auto col-span-5" /> */}
        {/* 
        <img src={imgOne} alt="" className="w-[10rem] h-auto col-span-5" />
        <img src={imgOne} alt="" className="w-[10rem] h-auto col-span-5" /> */}
      </div>
    </div>
  );
};
