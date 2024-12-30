
import { useState} from "react";
import Notifications from "./Notifications";
import AccountCard from "./AccountCard";
import { BellIcon,  User2Icon } from "lucide-react";


function AdminHeader() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showAccountCard, setShowAccountCard] = useState(false);

  const handleNotificationBtn = () => {
    setShowNotifications(!showNotifications);
  };
  const handleAccountBtn = () => {
    setShowAccountCard(!showAccountCard);
  };

  console.log('Notifications:' + showNotifications)
  return (
    <header className="flex items-center justify-between bg-white shadow-md px-6 h-16">
      <div className="text-lg font-semibold">Admin Dashboard</div>
      <div className="flex items-center space-x-10">
        <div className="flex items-center">
          <button 
          onClick={handleNotificationBtn}
          className="text-gray-600 hover:text-blue-600"
          >
            <BellIcon className="w-6 h-6"/>
          </button>
          {showNotifications &&
          <Notifications />
          }

        </div>
        <div className="flex items-center">
          <button 
            onClick={handleAccountBtn}
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
            <User2Icon className="w-6 h-6"/>
            <p>Admin</p>
          </button>
          {showAccountCard &&
          <AccountCard />
          }
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
