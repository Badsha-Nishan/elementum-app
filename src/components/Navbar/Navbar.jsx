import React, { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Studio", path: "/studio" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "FAQs", path: "/faqs" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center h-20 px-6 md:px-20 bg-white z-50">
      {/* Logo */}
      <NavLink to={"/"} className="font-gerbil text-2xl md:text-3xl">
        Elementum
      </NavLink>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-lg">
        {menuItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `pb-1 border-b-2 transition ${
                  isActive
                    ? "border-amber-400 text-amber-400"
                    : "border-transparent hover:text-amber-400"
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* (icon Mobile only) */}
      <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
        <div className="w-7 h-0.5 mb-1 bg-black"></div>
        <div className="w-7 h-0.5 mb-1 bg-black"></div>
        <div className="w-7 h-0.5 bg-black"></div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-20 left-0 w-full bg-white z-50 shadow-md flex flex-col items-center py-6 gap-6 md:hidden">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-lg transition ${
                  isActive
                    ? "text-amber-400 font-semibold"
                    : "text-black hover:text-amber-400"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
