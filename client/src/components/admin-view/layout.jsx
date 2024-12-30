import { Outlet } from "react-router-dom";
import AdminSideBar from "./sidebar";
import AdminHeader from "./header";


function AdminLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSideBar />
      <div className="flex flex-col flex-1">
        <AdminHeader />
        <main className="flex-1 p-6">
            {<Outlet />}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
