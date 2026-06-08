import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between h-24 items-center border px-40">
      <div className="font-gerbil text-3xl">Elementum</div>
      <ul className="flex font-medium gap-16 text-xl">
        <li>Home</li>
        <li>Studio</li>
        <li>Services</li>
        <li>Contact</li>
        <li>FAQs</li>
      </ul>
      <div>
        <div className="w-11 h-0.5 mb-1 bg-black"></div>
        <div className="w-11 h-0.5 mb-1 bg-black"></div>
      </div>
    </nav>
  );
};

export default Navbar;
