import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { useState } from "react";

function Profile() {
  const [profileData, setProfileData] = useState({
    userName: "",
    email: "",
    phoneNumber: 0,
    country: "",
    city: "",
  });
  const [displayForm, setDisplayForm] = useState(false);
  const editProfile = () => setDisplayForm(!displayForm);
  
  const handleInputChange = (event) => {
    console.log(`Updating ${event.target.name} : ${event.target.value}`);
    setProfileData((prevData) => ({
      ...prevData, [event.target.name] : event.target.value
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to backend for processing
     console.log(profileData);
  };

    return (
      <div className="flex flex-col w-full max-w-6xl space-y-6">
        {/* <div className="flex flex-col w-full">
          <h1 className="text-lg font-bold text-center mb-4 tracking-tight text-blue-600">Profile</h1>
        </div> */}
        <div className="flex flex-col justify-center items-center space-y-3">
          <User className="w-20 md:w-24 h-20 md:h-24 mt-2 bg-white rounded-full text-gray-400"/>
          <h1 className="font-bold text-blue-700 tracking-tighter">Customer</h1>
        </div>
        
        <div className="flex-col md:flex md:flex-row justify-center gap-3 md:gap-16 space-y-5">
          <div className="w-full h-fit max-w-md flex flex-col space-y-3 py-4 px-6 rounded-lg shadow-md bg-white tracking-tight">
            <h1 className="font-bold text-center md:text-base tracking-tighter">Account Details</h1>
            <div className="flex flex-col space-y-1">
              <h1 className="text-gray-700">Name</h1>
              <h2 className="font-bold text-blue-600">Customer</h2>
            </div>
            <div className="flex flex-col space-y-1">
              <h1 className="text-gray-700">Email Address</h1>
              <h2 className="font-bold text-blue-600">customer@gmail.com</h2>
            </div>
            <div className="flex flex-col space-y-1">
              <h1 className="text-gray-700">Phone Number</h1>
              <h2 className="font-bold text-blue-600">+254 701234567</h2>
            </div>
            <div className="flex flex-col space-y-1">
              <h1 className="text-gray-700">Account Type</h1>
              <h2 className="font-bold text-blue-600">Customer Account</h2>
            </div>
          </div>

          <div className="w-full h-fit max-w-md flex flex-col space-y-3 p-3 rounded-lg shadow-md bg-white tracking-tight">
            <h1 className="font-bold text-center  md:text-base tracking-tighter">Location</h1>
            <div className="flex flex-col space-y-1">
              <h1 className="text-gray-700">Country</h1>
              <h2 className="font-bold text-blue-600">Kenya</h2>
            </div>
            <div className="flex flex-col space-y-1">
              <h1 className="text-gray-700">City</h1>
              <h2 className="font-bold text-blue-600">Nairobi</h2>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <Button
            className="w-1/2 max-w-fit mt-5 md:mt-10"
            onClick={editProfile}
            >Edit Profile
          </Button>
        </div>

        {displayForm && (
          <div className="w-full flex justify-center items-center">
            <form className="w-full max-w-xl flex flex-col justify-between items-center space-y-3">
              <div className="w-full flex flex-col space-y-1">
                <label htmlFor="userName" className="block text-gray-800 font-medium pl-2">Name</label>
                <input 
                type="text" 
                name="userName"
                value={profileData.userName || ""} 
                id="userName"
                placeholder="Enter your name"
                onChange={handleInputChange}
                className="w-full p-2 border rounded-sm" />
              </div>
              <div className="w-full flex flex-col space-y-1">
                <label htmlFor="email" className="block text-gray-800 font-medium pl-2">Email Address</label>
                <input 
                type="email" 
                name="email"
                value={profileData.email || ""} 
                id="email"
                placeholder="Enter your email address"
                onChange={handleInputChange}
                className="w-full p-2 border rounded-sm" />
              </div>
              <div className="w-full flex flex-col space-y-1">
                <label htmlFor="phoneNumber" className="block text-gray-800 font-medium pl-2">Phone Number</label>
                <input 
                type="text" 
                name="phoneNumber"
                value={profileData.phoneNumber || 0} 
                id="phoneNumber"
                placeholder="Enter your phone number"
                onChange={handleInputChange}
                className="w-full p-2 border rounded-sm" />
              </div>
              <div className="w-full flex flex-col space-y-1">
                <label htmlFor="country" className="block text-gray-800 font-medium pl-2">Country</label>
                <input 
                type="text" 
                name="country"
                value={profileData.country || ""} 
                id="country"
                placeholder="Enter country"
                onChange={handleInputChange}
                className="w-full p-2 border rounded-sm" />
              </div>
              <div className="w-full flex flex-col space-y-1">
                <label htmlFor="city" className="block text-gray-800 font-medium pl-2">City</label>
                <input 
                type="text" 
                name="city"
                value={profileData.city || ""} 
                id="city"
                placeholder="Enter city"
                onChange={handleInputChange}
                className="w-full p-2 border rounded-sm" />
              </div>
              <div className="w-full">
                <Button
                  className="w-1/2 max-w-fit m-8 md:mt-10 bg-blue-700 hover:bg-blue-900"
                  onClick={handleSubmit}
                  >Save Changes
                </Button>
              </div>
            </form>
          </div>
          
          
        )}
      </div>
    );
  };
  
  export default Profile;
  