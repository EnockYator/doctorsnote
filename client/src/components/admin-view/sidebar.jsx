
/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  UsersIcon,
  FileTextIcon,
  ClipboardCheckIcon,
  ActivityIcon,
  HelpCircleIcon,
  MenuIcon,
  UserPlus,
  UserCircle2,
  DollarSign,
  ChartNoAxesCombined,
  TableOfContents,
  Activity,
  UserRoundCog,
  BellIcon,
  MessageSquareIcon,
  ShieldCheck,
  DatabaseBackup,
  Blocks,
  Settings
} from 'lucide-react';

const AdminSideBar = ({ closeMenu }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } bg-white shadow-lg flex flex-col h-full transition-all duration-300`}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-[18px] text-xl font-bold bg-blue-800 text-white border-b">
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
          closeMenu={closeMenu}
        />
        <NavItem
          to="/admin/profile"
          icon={UserCircle2}
          label="Profile"
          isCollapsed={isCollapsed}
          closeMenu={closeMenu}
        />
        <NavItem
          to="/admin/notifications"
          icon={BellIcon}
          label="Notifications"
          isCollapsed={isCollapsed}
          closeMenu={closeMenu}
        />
        <NavItem
          to="/admin/users"
          icon={UsersIcon}
          label="User Management"
          isCollapsed={isCollapsed}
          closeMenu={closeMenu}
        />
        <NavItem
          to="/admin/notes"
          icon={FileTextIcon}
          label="Medical Notes"
          isCollapsed={isCollapsed}
          closeMenu={closeMenu}
        />
        <NavItem
          to="/admin/requests"
          icon={UserPlus}
          label="Account Requests"
          isCollapsed={isCollapsed}
          closeMenu={closeMenu}
        />
        <NavItem
          to="/admin/doctor-certification"
          icon={ClipboardCheckIcon}
          label="Doctor Certification"
          isCollapsed={isCollapsed}
          closeMenu={closeMenu}
        />
        <NavItem
          to="/admin/payment-and-transactions"
          icon={DollarSign}
          label="Payment & Transactions"
          isCollapsed={isCollapsed}
          closeMenu={closeMenu}
        />
        <NavItem
          to="/admin/analytics"
          icon={ChartNoAxesCombined}
          label="Analytics & Reports" 
          isCollapsed={isCollapsed}
          closeMenu={closeMenu}
        />
        <NavItem
          to="/admin/content-management"
          icon={TableOfContents}
          label="Content Management"
          isCollapsed={isCollapsed}
          closeMenu={closeMenu}
        />
        <NavItem
          to="/admin/system-monitoring"
          icon={Activity}
          label="System Monitoring"
          isCollapsed={isCollapsed}
          closeMenu={closeMenu}
        />
        <NavItem
          to="/admin/role-and-permissions"
          icon={UserRoundCog}
          label="Role & Permissions"
          isCollapsed={isCollapsed}
          closeMenu={closeMenu}
        />
        <NavItem
          to="/admin/data-and-backup"
          icon={DatabaseBackup}
          label="Data & Backup"
          isCollapsed={isCollapsed}
          closeMenu={closeMenu}
        />
        <NavItem
          to="/admin/activity-logs"
          icon={ActivityIcon}
          label="Activity Logs"
          isCollapsed={isCollapsed}
          closeMenu={closeMenu}
        />
        <NavItem
          to="/admin/integrations"
          icon={Blocks}
          label="Integrations"
          isCollapsed={isCollapsed}
          closeMenu={closeMenu}
        />
        <NavItem
          to="/admin/feedback"
          icon={MessageSquareIcon}
          label="Feedback"
          isCollapsed={isCollapsed}
          closeMenu={closeMenu}
        />        
        <NavItem
          to="/admin/support"
          icon={HelpCircleIcon}
          label="Support Tickets"
          isCollapsed={isCollapsed}
          closeMenu={closeMenu}
        />
        <NavItem
          to="/admin/security"
          icon={ShieldCheck}
          label="Security"
          isCollapsed={isCollapsed}
          closeMenu={closeMenu}
        />
        <NavItem
          to="/admin/settings"
          icon={Settings}
          label="Settings"
          isCollapsed={isCollapsed}
          closeMenu={closeMenu}
        />
      </nav>
    </div>
  );
};

const NavItem = ({ to, icon: Icon, label, isCollapsed, closeMenu }) => (
  <NavLink
    to={to}
    onClick={closeMenu} // Close the menu on link click
    className={({ isActive }) =>
      `flex items-center p-3 rounded-lg transition ${
        isActive
          ? "bg-blue-600 text-white shadow-lg"
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


