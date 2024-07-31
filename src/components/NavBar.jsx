import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Separator from "./Separator";

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation().pathname;

  return (
    <div className="fixed top-0 w-full bg-[#fbfbfb] z-50">
      <div className="flex w-11/12 h-16 mx-auto md:h-14 md:w-10/12 lg:h-14 lg:w-9/12 items-center justify-between md:justify-around px-4 bg-[#fbfbfb] lg:px-0 md:px-0 lg:justify-around py-3 lg:mb-3 z-10 ">
        <Link
          to={"/"}
          className=" lg:mr-7 md:mr-5 h-6 flex items-center justify-center "
        >
          <img
            className=" w-fit h-full lg:w-44 lg:h-12 md:w-36 md:h-9 md:object-fill object-cover lg:object-fill"
            src="https://assets-global.website-files.com/663249e88f740b1eb4ae9a5a/663b894e1e0c42a4469bd1d8_assets_logo_dark.svg"
            loading="lazy"
          ></img>
        </Link>

        <nav className="DESKTOP-NAV lg:flex items-center justify-between w-full md:flex hidden">
          <ul className="list-none flex justify-evenly items-center lg:w-6/12 ">
            <Link
              to={"/"}
              className={`${
                location === "/"
                  ? "text-blue-600"
                  : "text-black hover:text-blue-600"
              } transition duration-300 text-sm font-normal font-inter`}
            >
              Home
            </Link>
            <Link
              to={"/product"}
              className={`${
                location === "/product"
                  ? "text-blue-600"
                  : "text-black hover:text-blue-600"
              } transition duration-300 text-sm font-normal font-inter`}
            >
              Product
            </Link>
            <Link
              to={"/pricing"}
              className={`${
                location === "/pricing"
                  ? "text-blue-600"
                  : "text-black hover:text-blue-600"
              } transition duration-300 text-sm font-normal font-inter`}
            >
              Pricing
            </Link>
            <Link
              to={"/about"}
              className={`${
                location === "/about"
                  ? "text-blue-600"
                  : "text-black hover:text-blue-600"
              } transition duration-300 text-sm font-normal font-inter`}
            >
              About
            </Link>
            {/* <Link
              to={"/test"}
              className={`${
                location === "/test"
                  ? "text-blue-600"
                  : "text-black hover:text-blue-600"
              } transition duration-300 text-sm font-normal font-inter`}
            >
              Test
            </Link> */}
          </ul>
          <div className="flex items-center justify-center gap-2">
            <a
              href="/"
              className=" inline-block w-11 h-11 border rounded-full p-2 "
            >
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                viewBox="0 0 16 16"
              >
                <defs>
                  <style>
                    {`
                    .cls-1 {
                      fill: currentcolor;
                      strokeWidth: 0px;
                      }
                      `}
                  </style>
                </defs>
                <path
                  className="cls-1"
                  d="m8,7.44c1.65,0,3-1.35,3-3s-1.35-3-3-3-3,1.35-3,3,1.35,3,3,3Zm0-5c1.1,0,2,.9,2,2s-.9,2-2,2-2-.9-2-2,.9-2,2-2Z"
                ></path>
                <path
                  className="cls-1"
                  d="m8,8.06c-3.31,0-6,2.69-6,6h1c0-2.76,2.24-5,5-5s5,2.24,5,5h1c0-3.31-2.69-6-6-6Z"
                ></path>
              </svg>
            </a>
            <Link
              to={"pricing"}
              className="w-fit h-fit border rounded-full py-2 px-6 text-sm"
            >
              Get Started
            </Link>
          </div>
        </nav>

        <nav className="MOBILE_NAV flex lg:hidden md:hidden ">
          <div onClick={() => setIsNavOpen((prev) => !prev)}>
            {!isNavOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-align-justify"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            )}
          </div>
        </nav>
      </div>
      <Separator width="9/12" />
      <ul
        className={` w-full text-sm flex flex-col gap-7 justify-start items-center bg-[#fbfbfb] lg:hidden  transition-all -z-10 absolute ${
          isNavOpen ? "top-0 opacity-100 h-screen" : "-top-20 h-0 opacity-0"
        }`}
      >
        <div
          className={`${
            isNavOpen ? "flex" : "hidden"
          } list-none w-10/12  flex-col md:gap-3 md:pt-3 mt-16 justify-start items-center`}
        >
          <Link
            to={"/"}
            className={`${
              location === "/"
                ? "text-blue-600"
                : "text-black hover:text-blue-600"
            } transition duration-300 py-8 px-4`}
          >
            Home
          </Link>
          <Separator />
          <Link
            to={"/product"}
            className={`${
              location === "/product"
                ? "text-blue-600"
                : "text-black hover:text-blue-600"
            } transition duration-300 py-8 px-4`}
          >
            Product
          </Link>
          <Separator />
          <Link
            to={"/pricing"}
            className={`${
              location === "/pricing"
                ? "text-blue-600"
                : "text-black hover:text-blue-600"
            } transition duration-300 py-8 px-4`}
          >
            Pricing
          </Link>
          <Separator />
          <Link
            to={"/about"}
            className={`${
              location === "/about"
                ? "text-blue-600"
                : "text-black hover:text-blue-600"
            } transition duration-300 py-8 px-4`}
          >
            About
          </Link>
          <Separator />
        </div>
        <div
          className={`${
            isNavOpen ? "flex" : "hidden"
          } flex w-full items-center justify-center gap-2`}
        >
          <a
            href="/"
            className=" inline-block w-11 h-11 border rounded-full p-2 "
          >
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              height="100%"
              viewBox="0 0 16 16"
            >
              <defs>
                <style>
                  {`
                  .cls-1 {
                  fill: currentcolor;
                  strokeWidth: 0px;
                  }
                  `}
                </style>
              </defs>
              <path
                className="cls-1"
                d="m8,7.44c1.65,0,3-1.35,3-3s-1.35-3-3-3-3,1.35-3,3,1.35,3,3,3Zm0-5c1.1,0,2,.9,2,2s-.9,2-2,2-2-.9-2-2,.9-2,2-2Z"
              ></path>
              <path
                className="cls-1"
                d="m8,8.06c-3.31,0-6,2.69-6,6h1c0-2.76,2.24-5,5-5s5,2.24,5,5h1c0-3.31-2.69-6-6-6Z"
              ></path>
            </svg>
          </a>
          <Link
            to={"pricing"}
            className="w-3/4 h-fit border rounded-full py-2 px-6 text-center "
          >
            Get Started
          </Link>
        </div>
      </ul>
    </div>
  );
}
