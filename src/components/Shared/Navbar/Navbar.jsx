import { GoChevronDown } from "react-icons/go";
import { MdOutlineFileDownload } from "react-icons/md";
import logo from "../../../assets/logo/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const onButtonClick = () => {
  //   fetch("/assets/documents/FCL_Brochure.pdf").then((response) => {
  //     response.blob().then((blob) => {
  //       const fileURL = window.URL.createObjectURL(blob);
  //       const alink = document.createElement("a");
  //       alink.href = fileURL;
  //       alink.download = "FCL_Brochure.pdf";
  //       alink.click();
  //     });
  //   });
  // };

  const navItems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">Explore</a>
      </li>
      <li className="relative group">
        <span className="cursor-pointer flex items-center">
          Solution <GoChevronDown className="ml-1 font-bold text-2xl" />
        </span>
        <ul className="absolute lg:left-[-600px] lg:w-[1530px] mt-10 hidden z-100 bg-gradient-to-r from-[#000F1A] via-[#0080E5] to-[#000F1A] text-black shadow-md rounded-md group-hover:block p-2">
          <div className="flex justify-center items-center gap-6 py-10">
            <a href="/sub-company">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="grid grid-cols-2 gap-4 shadow-2xl">
                  <div>
                    <img
                      src="https://i.postimg.cc/76JjP9Cr/Rectangle-29-1.png"
                      alt="HR Strategy"
                    ></img>
                  </div>

                  <div className="flex justify-center items-center">
                    <div>
                      <h1 className="text-lg font-semibold mb-2  text-white">
                        HR STRATEGY
                      </h1>
                    </div>
                  </div>
                </div>
                <Link to="/IT-Strategy">
                  <div className="grid grid-cols-2 gap-4 shadow-2xl">
                    <div>
                      <img
                        src="https://i.postimg.cc/X7bt3w4t/Rectangle-31.png"
                        alt="HR Strategy"
                      ></img>
                    </div>

                    <div className="flex justify-center items-center">
                      <div>
                        <h1 className="text-lg font-semibold mb-2  text-white">
                          IT STRATEGY
                        </h1>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </a>
          </div>
        </ul>
      </li>
      <li className="relative group">
        <span className="cursor-pointer flex items-center">
          Services <GoChevronDown className="ml-1 font-bold text-2xl" />
        </span>

        <ul className="absolute lg:left-[-750px] lg:w-[1530px] mt-10 hidden z-100 bg-gradient-to-r from-[#000F1A] via-[#0080E5] to-[#000F1A] text-black shadow-md rounded-md group-hover:block p-2">
          <div className="flex justify-center items-center gap-6 py-10">
            <a href="/HR-Services">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
                <div className="shadow-2xl">
                  <img
                    src="https://i.postimg.cc/BbWkjFDL/Rectangle-29-2.png"
                    alt="HR Strategy"
                  ></img>
                  <h1 className="text-lg font-semibold my-2 text-center text-white">
                    HR Services
                  </h1>
                </div>

                <div className="shadow-2xl">
                  <img
                    src="https://i.postimg.cc/X7bt3w4t/Rectangle-31.png"
                    alt="HR Strategy"
                  ></img>
                  <h1 className="text-lg font-semibold my-2 text-center text-white">
                    IT Services
                  </h1>
                </div>
                <div className="shadow-2xl">
                  <img
                    src="https://i.postimg.cc/j2z9PjQ8/Rectangle-32.png"
                    alt="HR Strategy"
                  ></img>
                  <h1 className="text-lg font-semibold my-2 text-center  text-white">
                    Career Counseling
                  </h1>
                </div>
                <div className="shadow-2xl">
                  <img
                    src="https://i.postimg.cc/CLsXKzK5/Rectangle-33.png"
                    alt="HR Strategy"
                  ></img>
                  <h1 className="text-lg font-semibold my-2 text-center  text-white">
                    Health Tourism
                  </h1>
                </div>
              </div>
            </a>
          </div>
        </ul>
      </li>

      <li>
        <a href="/projects">Blogs</a>
      </li>
      <li>
        <a href="/career">Career</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </>
  );

  return (
    <div className="bg-gradient-to-r from-[#000F1A] via-[#0080E5] to-[#000F1A] fancyNav sticky top-0 z-50 text-white shadow-md">
      <div className="navbar flex justify-between items-center">
        <div className="container mx-auto flex justify-between items-center">
          <div className="navbar-start flex items-center">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItems}
              </ul>
            </div>
            <a href="/" className="text-5xl ">
              <img
                src={logo}
                className="w-20"
                title="360D SOUL LIMITED"
                alt="360D logo"
              />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex flex-grow">
            <ul className="menu menu-horizontal px-1 flex items-center text-[18px]">
              {navItems}
            </ul>
          </div>
          <div className="navbar-end flex items-center">
            <a
              href="#"
              className="bg-black text-white hover:text-white duration-500 rounded-full px-5 py-2 flex items-center cursor-pointer"
            >
              Brochure <MdOutlineFileDownload className="ml-2 text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
