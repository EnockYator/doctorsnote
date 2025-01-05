/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  ClipboardCheckIcon,
  UserCircle2,
  BellIcon,
  CalendarIcon,
  HistoryIcon,
  ShieldCheck,
  ChartNoAxesCombined,
  MessageSquareIcon,
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
          to="/doctor/dashboard"
          icon={HomeIcon}
          label="Dashboard"
          isCollapsed={isCollapsed}
        />
        <NavItem
          to="/doctor/requests"
          icon={ClipboardCheckIcon}
          label="Patient Requests"
          isCollapsed={isCollapsed}
        />
        <NavItem
          to="/doctor/profile"
          icon={UserCircle2}
          label="Profile"
          isCollapsed={isCollapsed}
        />
        <NavItem
          to="/doctor/notifications"
          icon={BellIcon}
          label="Notifications"
          isCollapsed={isCollapsed}
        />
        <NavItem
          to="/doctor/appointments"
          icon={CalendarIcon}
          label="Appointments"
          isCollapsed={isCollapsed}
        />
        <NavItem
          to="/doctor/history"
          icon={HistoryIcon}
          label="Patients History"
          isCollapsed={isCollapsed}
        />
        <NavItem
          to="/doctor/certifications"
          icon={ShieldCheck}
          label="Certifications"
          isCollapsed={isCollapsed}
        />
        <NavItem
          to="/doctor/analytics"
          icon={ChartNoAxesCombined}
          label="Analytics"
          isCollapsed={isCollapsed}
        />
        <NavItem
          to="/doctor/feedback"
          icon={MessageSquareIcon}
          label="Feedback"
          isCollapsed={isCollapsed}
        />
        <NavItem
          to="/doctor/settings"
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

