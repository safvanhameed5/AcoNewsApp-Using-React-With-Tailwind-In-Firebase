import React from "react";
import { ImNewspaper } from "react-icons/im";
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar bg-white border-b border-gray-200 px-4 py-2.5 rounded">
      <div className="flex items-center justify-between">
        <a href="#" className="flex items-center">
          <ImNewspaper className="mr-2 text-2xl text-gray-800" />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-800">AcoNews</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;