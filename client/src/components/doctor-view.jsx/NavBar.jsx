

import { MenuIcon } from "lucide-react";
import { BellIcon } from "lucide-react";

function NavBar() {
  return (
    <div className="bg-white shadow-md flex items-center justify-between px-6 py-4">
      <div className="flex items-center space-x-4">
        <MenuIcon className="w-6 h-6 text-gray-600 cursor-pointer" />
        <h1 className="text-lg font-bold text-blue-500">Doctor Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative cursor-pointer">
          <BellIcon className="w-6 h-6 text-gray-500" />
          <span className="absolute top-0 right-0 w-4 h-4 text-xs text-white bg-red-500 rounded-full flex items-center justify-center">
            3
          </span>
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-200 cursor-pointer"></div>
      </div>
    </div>
  );
};

export default NavBar;
