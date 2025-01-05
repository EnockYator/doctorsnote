import { Outlet } from "react-router-dom";
import AdminSideBar from "./sidebar";
import AdminHeader from "./header";
import CommonFooter from "../common/footer";


function AdminLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSideBar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
        <CommonFooter />
      </div>
    </div>
  );
};

export default AdminLayout;
