import React, { useState } from "react";
import { BoltIcon, Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const [isTrue, setTrue] = useState(false);
  return (
    <nav className="my-container bg-gray-100 p-6    relative">
      {/* This is for small device */}
      <div className="lg:hidden">
        <div className="flex gap-2 justify-between items-center">
          <div className="flex items-center gap-3">
            <BoltIcon className="w-7 text-red-600"></BoltIcon>
            <NavLink to={"/"}>
              <span
                className="font-bold text-xl  tracking-wide cursor-pointer"
                to={"/"}
                title="Title"
                nextPage>
                Lit Lounge 
              </span>
            </NavLink>
          </div>
          <span className="cursor-pointer" onClick={() => setTrue(!isTrue)}>
            <Bars3BottomRightIcon className="w-6" />
          </span>
        </div>
      </div>
      {/* This is design */}
      {isTrue && (
        <div className=" absolute z-10 bg-gray-200 lg:hidden w-11/12 mx-3 top-4 left-2 p-4 rounded-md">
            <div className="flex justify-between">
            <div className="flex items-center gap-1">
            <BoltIcon className="w-7 text-red-600"></BoltIcon>
            <NavLink to={"/"}>
              <span
                className="font-bold text-xl  tracking-wide cursor-pointer"
                to={"/"}
                title="Title"
                nextPage>
                LIT LOUNGE
              </span>
            </NavLink>
            </div>
    <div>
        <span onClick={()=> setTrue(!isTrue)}><XMarkIcon className="w-6"/></span>
    </div>
            </div>
          <ul className="space-y-3 mt-2 font-semibold">
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-red-600" : "")}
                to={"/"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-red-600" : "")}
                to={"/books"}>
                Book
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-red-600" : "")}
                to={"/about"}>
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      )}
      {/* This is for large device */}
      <div className="justify-between items-center lg:flex hidden ">
        <div className="flex gap-2">
          <BoltIcon className="w-7 text-red-600"></BoltIcon>
          <NavLink to={"/"}>
            <span
              className="font-extrabold text-xl  tracking-wide cursor-pointer"
              to={"/"}
              title="Title"
              nextPage>
              Lit Lounge
            </span>
          </NavLink>
        </div>
        <div className="space-x-3 font-bold ">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to={"/"}>
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to={"/books"}>
            Book
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to={"/about"}>
            About Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
