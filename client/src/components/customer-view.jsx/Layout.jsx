import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import CommonFooter from "../common/footer";

const CustomerLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <SideBar />
      <div className="flex flex-col flex-1">
        <NavBar />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
        <CommonFooter />
      </div>
    </div>
  );
};

export default CustomerLayout;
