

import { NavLink } from 'react-router-dom';
import { HomeIcon, ClipboardCheckIcon, UserCircleIcon, BellIcon } from 'lucide-react';

function SideBar() {
  return (
    <div className="w-64 bg-white shadow-lg flex flex-col">
      <div className="p-4 text-2xl font-bold text-blue-500 border-b">
        DoctorsNotes
      </div>
      <nav className="flex-1 p-4 space-y-3">
        <NavLink
          to="/doctor/dashboard"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg ${
              isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
            }`
          }
        >
          <HomeIcon className="w-5 h-5 mr-3" />
          Dashboard
        </NavLink>
        <NavLink
          to="/doctor/requests"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg ${
              isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
            }`
          }
        >
          <ClipboardCheckIcon className="w-5 h-5 mr-3" />
          Patient Requests
        </NavLink>
        <NavLink
          to="/doctor/profile"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg ${
              isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
            }`
          }
        >
          <UserCircleIcon className="w-5 h-5 mr-3" />
          Profile
        </NavLink>
        <NavLink
          to="/doctor/notifications"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg ${
              isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
            }`
          }
        >
          <BellIcon className="w-5 h-5 mr-3" />
          Notifications
        </NavLink>
        <NavLink
          to="/doctor/appointments"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg ${
              isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
            }`
          }
        >
          <HomeIcon className="w-5 h-5 mr-3" />
          Appointments
        </NavLink>
        <NavLink
          to="/doctor/history"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg ${
              isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
            }`
          }
        >
          <HomeIcon className="w-5 h-5 mr-3" />
          Patients History
        </NavLink>
        <NavLink
          to="/doctor/certifications"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg ${
              isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
            }`
          }
        >
          <HomeIcon className="w-5 h-5 mr-3" />
          Certifications
        </NavLink>
        <NavLink
          to="/doctor/analytics"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg ${
              isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
            }`
          }
        >
          <HomeIcon className="w-5 h-5 mr-3" />
          Analytics
        </NavLink>
        <NavLink
          to="/doctor/feedback"
          className={({ isActive }) =>
            `flex items-center p-3 rounded-lg ${
              isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
            }`
          }
        >
          <HomeIcon className="w-5 h-5 mr-3" />
          Feedback
        </NavLink>
      </nav>
    </div>
  );
};

export default SideBar;
