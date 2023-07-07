import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [activeItem, setActiveItem] = useState("/");

  const menuItems = {
    "/home": "Home",
    "/contact": "Contact",
  };
  return (
    <nav className="w-full bg-slate-500 shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="md:hidden">
              <button
                type="button"
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <button
              type="button"
              onClick={() => setActiveItem("/")}
              className={
                activeItem === "/"
                  ? "text-slate-400 hover:text-slate-600 text-3xl leading-5"
                  : "hover:text-slate-600 text-3xl leading-5"
              }
              // "text-3xl leading-5"
            >
              <NavLink to="/">Covid-19 Data</NavLink>
            </button>
          </div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="hidden md:flex gap-10">
              {" "}
              {Object.keys(menuItems).map((item) => (
                <button
                  type="button"
                  key={item}
                  className={
                    activeItem === `/${item}`
                      ? "bg-slate-500 text-white rounded px-2 hover:bg-slate-400"
                      : "px-2 hover:bg-slate-400 rounded"
                  }
                  onClick={() => {
                    setActiveItem(`/${item}`);
                  }}
                >
                  <NavLink to={`${item}`} className="">
                    {menuItems[item]}
                  </NavLink>
                </button>
              ))}
            </div>
            {/* <ul
            className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:text-indigo-200">
                <NavLink to={`${"/"}`}>Home</NavLink>
              </li>
              <li className="text-white hover:text-indigo-200">
                <NavLink to={`${"/blog"}`}>Blog</NavLink>
              </li>
              <li className="text-white hover:text-indigo-200">
                <NavLink to={`${"/about"}`}>About US</NavLink>
              </li>
              <li className="text-white hover:text-indigo-200">
                <NavLink to={`${"/contact"}`}>Contact US</NavLink>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// // Navbar component
// const Navbar = () => {
//   const [activeItem, setActiveItem] = useState("/");
//   const [navbar, setNavbar] = useState(false);
//   const menuItems = {
//     "/home": "Home",
//     "/contact": "Contact",
//   };

//   return (
//     <ul className="flex justify-between mx-5 my-0.5 h-10 bg-slate-200 px-5 py-2 rounded-b mb-3">
//       <button
//         type="button"
//         onClick={() => setActiveItem("/")}
//         className={
//           activeItem === "/"
//             ? "text-slate-400 hover:text-slate-600 text-3xl leading-5"
//             : "hover:text-slate-600 text-3xl leading-5"
//         }
//         // "text-3xl leading-5"
//       >
//         <NavLink to="/">Covid-19 Data</NavLink>
//       </button>
//       <div className="hidden md:flex gap-10">
//         {Object.keys(menuItems).map((item) => (
//           <button
//             type="button"
//             key={item}
//             className={
//               activeItem === `/${item}`
//                 ? "bg-slate-500 text-white rounded px-2 hover:bg-slate-400"
//                 : "px-2 hover:bg-slate-400 rounded"
//             }
//             onClick={() => {
//               setActiveItem(`/${item}`);
//             }}
//           >
//             <NavLink to={`${item}`} className="">
//               {menuItems[item]}
//             </NavLink>
//           </button>
//         ))}
//       </div>
//     </ul>
//   );
// };

// export default Navbar;
