
/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  UsersIcon,
  FileTextIcon,
  ClipboardCheckIcon,
  BarChart2Icon,
  ActivityIcon,
  HelpCircleIcon,
  SettingsIcon,
  MenuIcon,
  UserPlus
} from 'lucide-react';

const AdminSideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } bg-white shadow-lg flex flex-col h-screen transition-all duration-300`}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-[18px] text-xl font-bold bg-blue-500 text-white border-b-2 border-r-2 space-x-3">
        {!isCollapsed && <div>DoctorsNote</div>}
        <MenuIcon
          className="w-6 h-6 cursor-pointer text-white"
          onClick={() => setIsCollapsed(!isCollapsed)}
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-3 overflow-scroll pb-6">
        <NavItem
          to="/admin/dashboard"
          icon={HomeIcon}
          label="Dashboard"
          isCollapsed={isCollapsed}
        />
        <NavItem
          to="/admin/users"
          icon={UsersIcon}
          label="User Management"
          isCollapsed={isCollapsed}
        />
        <NavItem
          to="/admin/notes"
          icon={FileTextIcon}
          label="Medical Notes"
          isCollapsed={isCollapsed}
        />
        <NavItem
          to="/admin/requests"
          icon={UserPlus}
          label="Account Requests"
          isCollapsed={isCollapsed}
        />
        <NavItem
          to="/admin/doctor-certification"
          icon={ClipboardCheckIcon}
          label="Doctor Certification"
          isCollapsed={isCollapsed}
        />
        <NavItem
          to="/admin/reports"
          icon={BarChart2Icon}
          label="Reports"
          isCollapsed={isCollapsed}
        />
        <NavItem
          to="/admin/activity-logs"
          icon={ActivityIcon}
          label="Activity Logs"
          isCollapsed={isCollapsed}
        />
        <NavItem
          to="/admin/support"
          icon={HelpCircleIcon}
          label="Support Tickets"
          isCollapsed={isCollapsed}
        />
        <NavItem
          to="/admin/settings"
          icon={SettingsIcon}
          label="Settings"
          isCollapsed={isCollapsed}
        />
      </nav>
    </div>
  );
};

const NavItem = ({ to, icon: Icon, label, isCollapsed }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center p-3 rounded-lg transition ${
        isActive
          ? "bg-blue-500 text-white shadow-lg"
          : "hover:bg-gray-100 text-gray-800"
      }`
    }
  >
    <Icon className="w-6 h-6" />
    {!isCollapsed && <span className="ml-3">{label}</span>}
    {isCollapsed && (
      <span className="sr-only">
        {label} {/* For screen readers */}
      </span>
    )}
  </NavLink>
);

export default AdminSideBar;


