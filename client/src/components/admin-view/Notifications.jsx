
import { useState } from 'react';

function Notifications() {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New user sign-up: Amos K', time: '2 mins ago' },
    { id: 2, message: 'Pending request from Enock Y', time: '10 mins ago' },
    { id: 3, message: 'Pending request from Evans M', time: '10 mins ago' }
  ]);

  return (
    <div className="relative">
      <div className="absolute right-0 mt-9 w-64 bg-white shadow-lg rounded-md">
        <div className="p-4 font-semibold border-b">Notifications</div>
        <ul>
          {notifications.map((notif) => (
            <li key={notif.id} className="p-3 hover:bg-gray-100">
              <div className="text-sm">{notif.message}</div>
              <div className="text-xs text-gray-500">{notif.time}</div>
            </li>
          ))}
        </ul>
        <div className="p-3 text-center text-blue-600 hover:underline cursor-pointer">
          View All
        </div>
      </div>
    </div>
  );
};

export default Notifications;
