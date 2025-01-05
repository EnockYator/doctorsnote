import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import NavBar from './NavBar';
import CommonFooter from '../common/footer';

function DoctorLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBar/>
      <div className="flex flex-col flex-1 overflow-hidden">
        <NavBar />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
        <CommonFooter />
      </div>
    </div>
  );
};

export default DoctorLayout;
