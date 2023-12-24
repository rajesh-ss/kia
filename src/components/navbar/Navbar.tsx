import { FC, Fragment, ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";
import { IconType } from "react-icons";
import logo from "../../assets/logo.png";

export type NavBarComponentPropsType = {
  left_items: NavBarInnerComponentPropsType[];
  RightItm: string | ReactNode;
};
export type NavBarInnerComponentPropsType = {
  itemName: string;
  itemElement: IconType;
  itemRoute: string;
};

/**
 *
 * @param props
 * @returns
 * The NavBar Accepts
 *
 * left_items
 * --------------
 * <Array of objects>
 * -> itemName: {String that displays the navbar items},
 * -> itemElement: {react-icons icons that display the navbar icons},
 * -> itemRoute: {route path for navigation}
 * ()=> Display the array of items passed in left hand of navbar
 *
 * right_itm
 * --------------
 * <string>
 * ()=> display of string passed on right of the navbar
 */

export const NavBar: FC<NavBarComponentPropsType> = (props) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const handleOnClickHamburgerMenu = () => {
    setToggleMenu((pre: boolean) => !pre);
  };
  //
  return (
    <nav className="h-[4rem] border-0 border-[green] glass-morphism  bg-[#00000094]">
      <div className="flex justify-between items-center h-full md:w-[70vw]  px-5 md:px-[1rem] gap-6 md:mx-auto border-b-0 border-[#fff] ">
        <div className="flex-1 md:hidden w-full h-full md:px-5 flex items-center ">
          <div
            className="w-8 h-8 flex items-center justify-center relative bg-[red] cursor-pointer"
            onClick={handleOnClickHamburgerMenu}
          >
            <span
              className={`transform transition w-full h-px bg-current absolute  ${
                toggleMenu ? "translate-y-0 rotate-45" : "-translate-y-2"
              }`}
            ></span>

            <span
              className={`transform transition w-full h-px bg-current absolute  ${
                toggleMenu ? "opacity-0 translate-x-3" : "opacity-100"
              }`}
            ></span>

            <span
              className={`transform transition w-full h-px bg-current absolute  ${
                toggleMenu ? "translate-y-0 -rotate-45" : "translate-y-2"
              }`}
            ></span>
          </div>
        </div>

        <div className="h-[4rem] border-[0rem] border-[violet] flex-1 flex items-center gap-5">
          {/* <img src={logo} className="w-[5rem] h-auto" alt="" /> */}

          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="60pt"
            height="60pt"
            viewBox="0 0 204.000000 136.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,136.000000) scale(0.100000,-0.100000)"
              fill="#fff"
              stroke="none"
            >
              <path
                d="M535 1329 c-50 -45 -64 -77 -74 -172 -8 -89 0 -138 29 -177 15 -20
21 -22 33 -12 12 10 16 8 21 -13 15 -59 103 -8 150 87 45 90 32 232 -25 271
-28 20 -39 14 -39 -24 0 -16 -9 -64 -21 -107 -11 -42 -25 -93 -30 -112 -4 -20
-15 -44 -24 -55 -13 -17 -13 -14 1 20 9 22 20 65 24 95 5 30 15 72 24 92 28
66 18 138 -21 138 -7 0 -28 -14 -48 -31z"
              />
              <path
                d="M1505 1322 c-61 -29 -114 -98 -129 -169 -8 -34 9 -113 24 -113 22 0
70 55 98 114 25 52 41 71 81 98 53 34 60 48 38 67 -26 21 -71 22 -112 3z"
              />
              <path
                d="M86 1258 c-9 -12 -16 -32 -16 -44 0 -13 66 -100 171 -225 239 -285
249 -298 249 -324 0 -15 -24 -53 -62 -97 -280 -333 -358 -431 -358 -451 0 -33
28 -67 54 -67 29 0 60 33 280 298 100 118 177 202 187 202 10 0 88 -86 190
-207 230 -275 247 -293 275 -293 24 0 123 109 347 383 91 110 117 126 149 94
7 -7 99 -116 203 -241 212 -253 237 -272 274 -202 22 40 7 63 -213 324 -133
158 -196 241 -196 257 0 26 8 37 249 324 103 123 171 213 171 225 0 52 -54 83
-92 54 -9 -7 -82 -92 -163 -188 -234 -279 -244 -290 -269 -290 -17 0 -61 46
-181 193 -204 246 -252 297 -280 297 -27 0 -62 -37 -274 -292 -89 -108 -170
-199 -178 -203 -9 -3 -24 0 -34 7 -10 7 -102 114 -204 238 -103 124 -194 231
-203 238 -25 19 -59 14 -76 -10z m1163 -368 c98 -118 171 -214 171 -226 0 -12
-70 -104 -171 -225 -130 -155 -176 -204 -193 -204 -17 0 -57 41 -161 165 -76
91 -153 182 -172 203 -18 20 -33 48 -33 61 0 17 54 89 173 230 137 165 176
206 194 204 14 -2 79 -73 192 -208z"
              />
              <path
                d="M1032 843 c-46 -22 -75 -65 -106 -155 -18 -53 -24 -86 -20 -110 9
-43 22 -68 37 -68 16 0 87 96 100 135 5 16 22 46 37 65 37 48 50 75 50 102 0
48 -39 60 -98 31z"
              />
              <path
                d="M1137 759 c-13 -30 -34 -62 -45 -73 -11 -10 -24 -31 -27 -47 -4 -16
-26 -54 -51 -85 -49 -64 -49 -63 -31 -89 33 -44 143 16 192 106 25 46 30 65
30 126 0 61 -3 76 -22 94 l-22 22 -24 -54z"
              />
              <path
                d="M1599 1231 c-25 -25 -61 -75 -80 -110 -27 -51 -41 -68 -71 -80 -21
-9 -38 -18 -38 -21 0 -11 59 -40 82 -40 96 1 202 158 175 262 -5 21 -12 37
-16 36 -3 -1 -27 -22 -52 -47z"
              />
              <path
                d="M1826 859 c-15 -11 -36 -40 -48 -62 -44 -87 -18 -250 47 -293 40 -26
51 -7 47 79 -6 134 -5 212 3 255 9 49 -5 56 -49 21z"
              />
              <path
                d="M1895 787 c-3 -55 -2 -106 4 -127 15 -48 14 -94 -3 -135 -14 -33 -14
-35 4 -35 34 0 79 49 95 103 35 119 -1 253 -77 280 -14 5 -17 -6 -23 -86z"
              />
              <path
                d="M71 813 c-22 -18 -22 -18 69 -113 50 -52 100 -112 111 -133 54 -102
105 -18 63 105 -17 53 -73 122 -115 143 -38 20 -102 19 -128 -2z"
              />
              <path
                d="M10 735 c-16 -19 -7 -102 15 -144 23 -45 126 -127 170 -135 43 -8 90
15 81 41 -9 23 -45 69 -106 134 -30 32 -67 72 -82 89 -29 33 -59 38 -78 15z"
              />
              <path
                d="M1450 372 c-47 -23 -47 -36 -3 -69 21 -15 48 -41 62 -56 13 -15 36
-34 52 -42 15 -8 42 -36 59 -61 24 -34 37 -44 53 -42 20 3 22 9 22 64 0 77
-39 145 -105 185 -60 36 -99 42 -140 21z"
              />
              <path
                d="M537 346 c-21 -8 -47 -22 -59 -33 -28 -25 -69 -97 -78 -138 -8 -36 6
-115 20 -115 23 0 76 61 103 118 25 52 40 70 84 98 29 18 53 39 53 44 0 10
-60 41 -77 40 -4 -1 -25 -7 -46 -14z"
              />
              <path
                d="M619 251 c-25 -25 -61 -74 -78 -109 -26 -52 -39 -67 -72 -81 l-40
-18 27 -22 c15 -11 38 -21 51 -21 103 0 214 159 184 261 -7 22 -15 38 -19 37
-4 -1 -28 -22 -53 -47z"
              />
              <path
                d="M1369 264 c-16 -44 13 -124 60 -167 83 -75 173 -100 214 -59 l20 21
-52 60 c-29 34 -58 61 -63 61 -6 0 -34 25 -63 55 -62 64 -99 73 -116 29z"
              />
            </g>
          </svg>
          <h2 className="text-[#fff] font-[900] text-[1.2rem]">SKIA COFFEE</h2>
        </div>

        <div
          className={`absolute md:h-full mt-0 md:mt-0 rounded-b-3xl md:rounded-none md:static h-min-[20vh] md-w-auto left-0 w-full md-flex items-center flex-[4]  ${
            toggleMenu
              ? "top-[4rem] md:shadow-none shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white"
              : "top-[-100%]"
          }`}
        >
          <ul
            className={`py-5 md:p-0 md:space-x-8 flex flex-col md:flex-row px-3 h-full md-py-0 md:gap-0 gap-2  justify-end  ${
              toggleMenu ? "items-center " : "items-center"
            }`}
          >
            {props?.left_items.map(
              (eachItem: NavBarInnerComponentPropsType, index: number) => {
                return (
                  <li
                    key={index}
                    className={`cursor-pointer h-full flex items-end  border-0 border-[green]`}
                  >
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "py-1 flex flex-row-reverse items-center gap-1 transition-all delay-50 duration-100 ease-all hover:pb-3 hover:border-b-[0.2rem]  text-[#EDD4A9] border-b-[0.2rem] border-solid border-[#EDD4A9] pb-3 rounded-[2px]"
                          : "text-[#AAB3B5] flex flex-row-reverse items-center gap-1 transition-all delay-50 duration-100 ease-all border-b-0  hover:pb-3 hover:border-b-[0.2rem]  border-solid border-[#EDD4A9] pb-3 rounded-[2px]"
                      }
                      to={eachItem?.itemRoute}
                    >
                      <span className="font-[900] text-[1.3rem] md:w-auto text-[#fff] hover:text-[#EDD4A9]">
                        {eachItem.itemName}
                      </span>
                    </NavLink>
                  </li>
                );
              }
            )}
          </ul>
        </div>

        <div className="h-full flex items-center">
          {typeof props?.RightItm === "string" ? (
            <>
              <a
                href="ictsupport@pjlhuillier.com"
                target="_blank"
                className="text-[#656869]"
              >
                {props?.RightItm}
              </a>
            </>
          ) : (
            <>{props?.RightItm}</>
          )}
        </div>
      </div>
    </nav>
  );
};
