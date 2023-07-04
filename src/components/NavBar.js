import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Navbar component
const Navbar = () => {
  const [activeItem, setActiveItem] = useState("/");
  const menuItems = {
    "/home": "Home",
    "/contact": "Contact",
  };

  return (
    <ul className="flex justify-between mx-5 my-0.5 h-10 bg-slate-200 px-5 py-2 rounded-b mb-3">
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
      <div className="hidden md:flex gap-10">
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
    </ul>
  );
};

export default Navbar;
