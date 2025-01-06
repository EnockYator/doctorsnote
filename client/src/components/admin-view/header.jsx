/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { BellIcon, MenuIcon, SearchIcon, UserCircle2 } from "lucide-react";


function AdminHeader({ onClickMenuIcon, isDisplayingMenu }) {
  return (
    <div className="sticky top-0 z-10 bg-white shadow px-3 md:px-6 py-3 md:py-4 space-y-2">
      <div className="flex items-center justify-between">
        {/* For small screens */}
        <MenuIcon
          className="md:hidden w-6 h-6 cursor-pointer text-blue-600"
          onClick={onClickMenuIcon}
        />
        {/* Welcome Text */}
        <h1 className="text-base md:text-lg font-semibold text-blue-600 whitespace-nowrap">
          Hi, Admin!
        </h1>
        {/* Search Bar */}
        <div className="hidden md:flex mx-auto items-center flex-grow max-w-md space-x-2 px-3 py-1 border rounded-2xl">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none flex-grow w-full"
          />
          <SearchIcon className="w-5 h-5 text-gray-500" />
        </div>
        {/* Icons Section */}
        <div className="flex items-center space-x-4 md:space-x-8">
          <BellIcon className="w-5 md:w-6 h-5 md:h-6 text-gray-600" />
          <UserCircle2 className="w-7 md:w-8 h-7 md:h-8 text-gray-600" />
        </div>
      </div>
      {/* Search Bar for small screens */}
      <div className="flex md:hidden items-center flex-grow max-w-md space-x-2 px-3 py-1 border rounded-2xl mx-auto">
        <input
          type="text"
          placeholder="Search..."
          className="outline-none flex-grow w-full"
        />
        <SearchIcon className="w-5 h-5 text-gray-500" />
      </div>
    </div>
  );
}

export default AdminHeader;
