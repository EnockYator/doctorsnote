import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import NavBar from './NavBar';

function DoctorLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <NavBar />
        <main className="p-6 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DoctorLayout;
