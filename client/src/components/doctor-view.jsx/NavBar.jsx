

import { BellIcon, UserCircle2Icon } from "lucide-react";

function NavBar() {
  return (
    <div className="bg-white shadow-md flex items-center justify-between px-6 py-5">
      <div className="flex items-center space-x-4">
        <h1 className="text-lg font-bold text-blue-500">Doctor Dashboard</h1>
      </div>
      <div className="flex items-center space-x-10 pr-3">
        <div className="relative cursor-pointer">
          <BellIcon className="w-6 h-6 text-gray-500" />
          <span className="absolute top-0 right-0 w-4 h-4 text-xs text-white bg-red-500 rounded-full flex items-center justify-center">
            3
          </span>
        </div>
        <UserCircle2Icon className="text-gray-500 w-9 h-9"/>
      </div>
    </div>
  );
};

export default NavBar;
