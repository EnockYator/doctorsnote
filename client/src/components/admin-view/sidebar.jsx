

import { Link } from 'react-router-dom';

const AdminSideBar = () => {
  const menuItems = [
    { name: 'Dashboard', path: '/admin/dashboard' },
    { name: 'User Management', path: '/admin/users' },
    { name: 'Medical Notes', path: '/admin/notes' },
    { name: 'Doctor Certification', path: '/admin/doctor-certification' },
    { name: 'Reports', path: '/admin/reports' },
    { name: 'Activity Logs', path: '/admin/activity-logs' },
    { name: 'Support Tickets', path: '/admin/support' },
    { name: 'Settings', path: 'admin/settings' },
  ];

  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="h-16 flex items-center justify-center text-xl text-blue-600 font-bold shadow-md">DoctorsNotes</div>
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="block py-2 px-4 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSideBar;
