import React from "react";
import { NavLink } from "react-router-dom";

// Navbar component
const Navbar = () => {
  const menuItems = {
    home: "home",
    contact: "contact",
  };
  return (
    <ul className="flex justify-between mx-5 h-10 bg-slate-200 px-5 rounded-b mb-3">
      <h3 className="">Covid-19 Data</h3>
      <div className="flex gap-10">
        {Object.keys(menuItems).map((item) => (
          <li key={item} className="">
            <NavLink to={`${item}`} className="">
              {menuItems[item]}
            </NavLink>
          </li>
        ))}
      </div>
    </ul>
  );
};

export default Navbar;
