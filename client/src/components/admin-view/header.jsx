import { BellIcon, SearchIcon, UserCircle2 } from "lucide-react";

function AdminHeader() {
  return (
    <div className="flex items-center justify-between bg-white shadow px-6 py-4">
      {/* Welcome Text */}
      <h1 className="text-lg font-semibold text-blue-600 whitespace-nowrap">
        Hi, Admin!
      </h1>

      {/* Search Bar */}
      <div className="flex items-center flex-grow max-w-md space-x-2 px-3 py-1 border rounded-2xl">
        <input
          type="text"
          placeholder="Search..."
          className="outline-none flex-grow w-full"
        />
        <SearchIcon className="w-5 h-5 text-gray-500" />
      </div>

      {/* Icons Section */}
      <div className="flex items-center space-x-8">
        <BellIcon className="w-6 h-6 text-gray-600" />
        <UserCircle2 className="w-8 h-8 text-gray-600" />
      </div>
    </div>
  );
};

export default AdminHeader;