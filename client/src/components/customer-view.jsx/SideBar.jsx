/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  ClipboardCheckIcon,
  UserCircle2,
  Headset,
  BellIcon,
  HistoryIcon,
  MenuIcon,
  SettingsIcon,
} from 'lucide-react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } bg-white shadow-lg flex flex-col h-screen transition-all duration-300`}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-5 text-xl font-bold text-blue-500 shadow-md space-x-3">
        {!isCollapsed && <div>DoctorsNote</div>}
        <MenuIcon
          className="w-6 h-6 text-gray-800 cursor-pointer"
          onClick={() => setIsCollapsed(!isCollapsed)}
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-3 overflow-scroll pb-6">
        <NavItem
          to="dashboard"
          icon={HomeIcon}
          label="Dashboard"
          isCollapsed={isCollapsed}
        />
        <NavItem
          to="profile"
          icon={UserCircle2}
          label="Profile"
          isCollapsed={isCollapsed}
        />
        <NavItem
          to="requests"
          icon={ClipboardCheckIcon}
          label="Request Note"
          isCollapsed={isCollapsed}
        />
        <NavItem
          to="history"
          icon={HistoryIcon}
          label="Notes History"
          isCollapsed={isCollapsed}
        />
        <NavItem
          to="notifications"
          icon={BellIcon}
          label="Notifications"
          isCollapsed={isCollapsed}
        />
        <NavItem
          to="support"
          icon={Headset}
          label="Support"
          isCollapsed={isCollapsed}
        />
        <NavItem
          to="settings"
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

export default Sidebar;
