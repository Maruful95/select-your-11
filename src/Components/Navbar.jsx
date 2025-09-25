import React from "react";
import navImg from "../assets/logo.png"
import coinImg from '../assets/dollar.png';

const Navbar = () => {
  return (
    <div className="navbar max-w-7xl mx-auto">
      <div className="flex-1">
        <a className=" text-xl">
          <img className="w-16" src={navImg} alt="" />
        </a>
      </div>
      <div className="flex items-center">
        <span className="mr-1">60000000000</span>
        <span className="mr-1">coin</span>
        <img className="w-5" src={coinImg} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
