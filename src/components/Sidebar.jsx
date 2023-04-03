import React from "react";
import { RiHome3Line, RiStore3Line, RiLayout2Line,RiApps2Line, RiLiveLine } from "react-icons/ri";

function Sidebar() {
  return (
    <div className="fixed left-0 top-0 w-80 h-full overflow-y-scroll border border-gray-800 p-8">
        {/* Contenedor superior del sidebar */}
      <div className="">
        {/* Logo */}
        <h1 className="text-white uppercase font-bold text-2xl tracking-[5px] mb-10">
          Tu Logo
        </h1>
        <ul className="text-gray-100 text-xl">
          <li>
            <a className="flex items-center gap-4 hover:bg-[#232323] hover:cursor-pointer py-2 px-4 rounded-xl transition-colors">
              <RiHome3Line /> Home
            </a>
          </li>
          <li>
            <a className="flex items-center gap-4 hover:bg-[#232323] hover:cursor-pointer py-2 px-4 rounded-xl transition-colors">
              <RiStore3Line /> Store
            </a>
          </li>
          <li>
            <a className="flex items-center gap-4 hover:bg-[#232323] hover:cursor-pointer py-2 px-4 rounded-xl transition-colors">
              <RiLayout2Line /> Library
            </a>
          </li>
          <li>
            <a className="flex items-center gap-4 hover:bg-[#232323] hover:cursor-pointer py-2 px-4 rounded-xl transition-colors">
              <RiApps2Line /> Friends
            </a>
          </li>
          <li>
            <a className="flex items-center gap-4 hover:bg-[#232323] hover:cursor-pointer py-2 px-4 rounded-xl transition-colors">
              <RiLiveLine /> Live
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;