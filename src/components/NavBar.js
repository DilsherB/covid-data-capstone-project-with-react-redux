import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Navbar component
const Navbar = () => {
  const [activeItem, setActiveItem] = useState("/");
  const menuItems = {
    "/": "Home",
    "/contact": "Contact",
  };

  return (
    <ul
      className="flex justify-between mx-5 my-0.5 h-10 bg-slate-200 px-5 py-2 rounded-b mb-3"
    >
      <h3 className="text-3xl leading-5">Covid-19 Data</h3>
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
