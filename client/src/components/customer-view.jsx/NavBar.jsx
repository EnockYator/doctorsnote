import { FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold text-blue-600">Welcome, Customer!</h1>
      <div className="flex items-center space-x-4">
        <FaBell className="text-xl text-gray-600 cursor-pointer" />
        <FaUserCircle className="text-2xl text-gray-600 cursor-pointer" />
      </div>
    </header>
  );
};

export default Navbar;
